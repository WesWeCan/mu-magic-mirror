
import { BoundingBox, Pixel, cutOut } from '@/types';

import '@tensorflow/tfjs';

import * as bodySegmentation from '@tensorflow-models/body-segmentation';
import '@tensorflow/tfjs-core';
import '@tensorflow/tfjs-backend-webgl';
import '@mediapipe/selfie_segmentation';

import { Segmentation } from '@tensorflow-models/body-segmentation/dist/shared/calculators/interfaces/common_interfaces';
import * as cocoSsd from '@tensorflow-models/coco-ssd';

import * as poseDetection from '@tensorflow-models/pose-detection';

import '@tensorflow/tfjs-backend-webgl'; // Register WebGL backend.
import { setupInferences } from './CameraProcessorFunctions/setup/setupInferences'
import { getAvailableVideoDevices, getMediaStream, switchVideoDevice } from './CameraProcessorFunctions/setup/setupVideo'
import { createCanvasses } from './CameraProcessorFunctions/setup/setupCanvasses'
import { process } from './CameraProcessorFunctions/process/process';
import { draw } from './CameraProcessorFunctions/draw/draw';

import { CorpsesObject } from '@/types';

import axios from 'axios';
import { downloadImage } from './CameraProcessorFunctions/share/downloadImage';
import { shareImage } from './CameraProcessorFunctions/share/shareImage';


export class CameraProcessor {

    running: boolean = true;

    canvasses: HTMLCanvasElement | null = null;

    cutouts: cutOut[] = [];

    div_video: HTMLDivElement | null = null;
    video: HTMLVideoElement | null = null;
    videoPermission: boolean = false;

    div_process: HTMLDivElement | null = null;
    canvas_process: HTMLCanvasElement | null = null;

    div_render: HTMLDivElement | null = null;
    canvas_render: HTMLCanvasElement | null = null;

    mousePos: { x: number, y: number } = { x: 0, y: 0 };

    availableVideoDevices: {
        device: InputDeviceInfo,
        capabilities: MediaTrackCapabilities
    }[] = [];

    currentVideoDeviceId: string | undefined = undefined;

    lastDraws = {
        shufflePieces: 0,
        shuffleBoundingBoxes: 0,
        shuffleYou: 0
    };

    inference:
        {
            bodyPix: bodySegmentation.BodySegmenter | undefined,
            blazePose: poseDetection.PoseDetector | undefined,
            cocoSsd: cocoSsd.ObjectDetection | undefined,
            selfieSegmentation: bodySegmentation.BodySegmenter | undefined
        }
        = {
            bodyPix: undefined,
            blazePose: undefined,
            cocoSsd: undefined,
            selfieSegmentation: undefined
        };

    inferenceData: {
        poses: poseDetection.Pose[] | undefined,
        coloredPartImage: ImageData | undefined,
        bodyPixSegmentation: Segmentation[] | undefined
        pixels: Pixel[] | undefined,
        maskData: ImageData | undefined,
        detectedOjects: cocoSsd.DetectedObject[] | undefined,
        humans: cocoSsd.DetectedObject[] | undefined
    } = {
            poses: undefined,
            bodyPixSegmentation: undefined,
            coloredPartImage: undefined,
            pixels: undefined,
            maskData: undefined,
            detectedOjects: undefined,
            humans: undefined
        };


    boundingBoxes: BoundingBox[] = [];
    boundingBoxesProcessed: BoundingBox[] = [];

    pieces: any = [];
    currentlyShownPieces: any = {};
    resolutionScaling: number = 2;
    processingDownload: boolean = false;
    showLegsSeparately: boolean = false;

    constructor() {
        console.log("CameraProcessor constructed");
    }


    /**
     * Initialize the camera processor.
     * 
     * @param {HTMLDivElement} videoDiv - The video div element.
     * @param {HTMLDivElement} div_process - The div process element.
     * @param {HTMLDivElement} div_render - The div render element.
     * @param {CorpsesObject} corpse - The corpse object.
     * @returns {Promise<void>}
     */
    async init(videoDiv: HTMLDivElement, div_process: HTMLDivElement, div_render: HTMLDivElement, corpse: CorpsesObject) {
        console.info("Initializing camera processor");

        await getAvailableVideoDevices(this);
        console.info('Got available video devices');


        if (this.videoPermission === false) {
            console.error('No video permission');
            return;
        }

        await setupInferences(this);
        console.info('Inferences setup');

        await getMediaStream(this, videoDiv);
        console.info('Got media stream');

        await createCanvasses(this, div_process, div_render);
        console.info('Canvasses created');

        await this.loadPieces(corpse);
        console.info('Pieces loaded');

        return new Promise<boolean>((resolve, reject) => {
            resolve(true);
        });
    }

    /**
     * Load the pieces from the corpses object.
     * Makes all images in memory.
     * 
     * @param {CorpsesObject} corpses - The corpses object.
     * @returns {Promise<void>}
     */
    async loadPieces(corpses: CorpsesObject) {

        let start = performance.now();
        let keys = Object.keys(corpses);

        console.log('keys', keys);
        console.log('corpse', corpses);

        let pieces = [];

        for (let i = 0; i < keys.length; i++) {
            const key = keys[i];
            const corpseParts = corpses[key];

            for (let j = 0; j < corpseParts.length; j++) {
                const corpsePart = corpseParts[j];

                const img = new Image();
                img.src = corpsePart.path;

                // wait until image is loaded
                await new Promise<void>((resolve) => {
                    img.onload = () => {
                        resolve();
                    }
                });

                const width = img.width;
                const height = img.height;
                const label = key;

                pieces.push({
                    img: img,
                    width: width,
                    height: height,
                    label: label,
                    baseImage: corpsePart.base_image
                });

            }
        }

        let end = performance.now();

        console.warn(`${pieces.length} pieces loaded in ${end - start} ms`);

        this.pieces = pieces;

    }

    /**
     * Switch the video device.
     * 
     * @returns {Promise<void>}
     */
    async switchVideoDevice() {
        await switchVideoDevice(this);
    }


    // --------------------------------------------------

    /**
     * Loop the camera processor.
     * 
     * @returns {Promise<void>}
     */
    async loop() {

        if (!this.running) {
            return;
        }


        if (!this.video || !this.canvas_process) {
            console.error('No video or canvas');
            return;
        }

        await process(this, this.video);
        await this.draw();
        await this.render();
    }

    // --------------------------------------------------



    // --------------------------------------------------

    /**
     * Draw the canvas.
     * 
     * @returns {Promise<void>}
     */
    async draw() {
        await draw(this);
    }

    /**
     * Render the canvas, in a responsive way.
     * the processing canvas is scaled to fit the rendering canvas.
     * 
     * @returns {Promise<void>}
     */
    async render() {

        // console.log('render');

        // render the processed canvas to the rendering canvas
        // fill the rendering canvas with the processed canvas, make it responsive
        if (!this.canvas_process || !this.canvas_render) {
            console.error('No canvas or rendering canvas');
            return;
        }

        const canvas_process = this.canvas_process as HTMLCanvasElement;
        const canvas_render = this.canvas_render as HTMLCanvasElement;

        const ctx_render = canvas_render.getContext('2d');
        const ctx_process = canvas_process.getContext('2d');

        if (!ctx_render || !ctx_process) {
            console.error('No context');
            return;
        }

        // draw processed canvas, make it responsive and scale proportionally, but cover the whole rendering canvas
        const aspectRatio = canvas_process.width / canvas_process.height;

        const renderHeight = canvas_render.height;
        const renderWidth = renderHeight * aspectRatio;

        const renderX = (canvas_render.width - renderWidth) / 2;
        const renderY = 0;

        ctx_render.drawImage(canvas_process, renderX, renderY, renderWidth, renderHeight);

    }

    /**
     * Toggle the picture taken state.
     * 
     * @returns {Promise<void>}
     */
    async togglePicture() {
        this.running = !this.running;
        this.loop();
    }


    /**
     * Get the current time in the format YYYY_MM_DD_HH_MM_SS.
     * 
     * @returns {string} The current time in the format YYYY_MM_DD_HH_MM_SS.
     */
    getCurrentTime() {
        const options: Intl.DateTimeFormatOptions = { weekday: 'long', day: 'numeric', month: 'long', hour: '2-digit', minute: '2-digit', hour12: false };
        const currentTime: string = new Intl.DateTimeFormat('en-GB', options).format(new Date()).replace(/[:\s]/g, '_');
        return currentTime;

    }

    async downloadImage(isSharing = false) {
        await downloadImage(this, isSharing);
    }

    /**
     * Share the user generated corpse.
     * 
     * @returns {Promise<void>}
     */
    async shareImage() {
        await shareImage(this);
    }

    /**
     * Archive the user generated corpse.
     * 
     * @param  {string} dataUrl - The data URL of the image to be archived.
     * @returns {Promise<void>}
     */
    async archiveImage(dataUrl: string) {

        if (confirm('Do you consent that we archive this image?')) {

            // console.log('Archiving image');
            console.info('Archiving image');
            const formData = new FormData();

            const currentTime = this.getCurrentTime();

            const file = await fetch(dataUrl).then(res => res.blob())
                .then(blob => new File([blob], `image ${currentTime}.png`, { type: 'image/png' }));


            // Append the File to FormData
            formData.append('image', file);



            const usedPiecesList = Object.keys(this.currentlyShownPieces).map((key) => {
                const piece = this.currentlyShownPieces[key];

                if (piece.baseImage.name === 'YOU!') {
                    return -1;
                }
                else {
                    return piece.baseImage.id;
                }
            });

            formData.append('usedPieces', JSON.stringify(usedPiecesList));

            // get the list of used pieces
            console.info('Used pieces', usedPiecesList);

            try {
                const response = await axios.post('/archive', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });

                console.log('Image archived', response);
            } catch (error) {
                console.error('Error archiving image', error);
            }
        }
    }



}