
import { BoundingBox, Pixel, cutOut } from '@/types';

import '@tensorflow/tfjs';

import * as bodySegmentation from '@tensorflow-models/body-segmentation';
import '@tensorflow/tfjs-core';
import '@tensorflow/tfjs-backend-webgl';
import '@mediapipe/selfie_segmentation';

import { PixelInput, Segmentation } from '@tensorflow-models/body-segmentation/dist/shared/calculators/interfaces/common_interfaces';
import * as cocoSsd from '@tensorflow-models/coco-ssd';

import * as poseDetection from '@tensorflow-models/pose-detection';
// Register WebGL backend.
import '@tensorflow/tfjs-backend-webgl';
import { setupInferences } from './CameraProcessorFunctions/setup/setupInferences'
import { getAvailableVideoDevices, getMediaStream, switchVideoDevice } from './CameraProcessorFunctions/setup/setupVideo'
import { createCanvasses } from './CameraProcessorFunctions/setup/setupCanvasses'
import { segmentBodyPix } from './CameraProcessorFunctions/process/segmentBodyPix';
import { estimatePose } from './CameraProcessorFunctions/process/estimatePose';
import { convertImageDataToPixels } from './CameraProcessorFunctions/process/convertImageDataToPixels';
import { getBoundingBoxes } from './CameraProcessorFunctions/process/getBoundingBoxes';
import { clearCanvas } from './CameraProcessorFunctions/draw/clearCanvas';
import { drawVideo } from './CameraProcessorFunctions/draw/drawVideo';
import { drawSegmentation } from './CameraProcessorFunctions/draw/drawSegmentation';
import { drawPose } from './CameraProcessorFunctions/draw/drawPose';
import { drawBoundingBoxes } from './CameraProcessorFunctions/draw/drawBoundingboxes';
import { detectHumans } from './CameraProcessorFunctions/process/detectHumans';
import { drawObjects } from './CameraProcessorFunctions/draw/drawObjects';
import { process } from './CameraProcessorFunctions/process/process';
import { draw } from './CameraProcessorFunctions/draw/draw';

import { CorpsesObject } from '@/types';

import axios from 'axios';


export class CameraProcessor {


    // drawCanvas: boolean = false;
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
        console.log("ImageProcessor constructor");
    }


    async init(videoDiv: HTMLDivElement, div_process: HTMLDivElement, div_render: HTMLDivElement, corpse: CorpsesObject) {
        console.log("init");

        await getAvailableVideoDevices(this);
        console.log('Got available video devices');


        if(this.videoPermission === false) {
            console.error('No video permission');
            return;
        }

        await setupInferences(this);
        console.log('Inferences setup');

        await getMediaStream(this, videoDiv);
        console.log('Got media stream');

        await createCanvasses(this, div_process, div_render);
        console.log('Canvasses created');

        await this.loadPieces(corpse);
        console.log('Pieces loaded');

        return new Promise<boolean>((resolve, reject) => {
            resolve(true);
        });
    }

    async loadPieces(corpses: CorpsesObject) {

        let start = performance.now();
        let keys = Object.keys(corpses);

        console.log('keys', keys);
        console.log('corpse', corpses);

        let pieces = [];

        for (let i = 0; i < keys.length; i++) {
            const key = keys[i];
            const corpseParts = corpses[key];



            for(let j = 0; j < corpseParts.length; j++) {
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

        console.log(`${pieces.length} pieces loaded in ${end - start} ms`);

        this.pieces = pieces;

    }

    async switchVideoDevice() {

        await switchVideoDevice(this);

    }


    // --------------------------------------------------

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

    async draw() {

        await draw(this);
    }

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

    async togglePicture() {
        this.running = !this.running;
        this.loop();
    }


    getCurrentTime() {

        const options: DateTimeFormatOptions = { weekday: 'long', day: 'numeric', month: 'long', hour: '2-digit', minute: '2-digit' };
        const currentTime: string = new Intl.DateTimeFormat('en-GB', options).format(new Date()).replace(/[:\s]/g, '_');

        return currentTime;

    }

    async downloadImage(isSharing = false) {
        if (this.processingDownload) {
            return;
        }
        this.processingDownload = true;
    
        try {
            if (this.running) {
                this.running = false;
                await this.loop();
                await this.draw();
                // Wait for the last draw to finish if necessary
                await new Promise(resolve => setTimeout(resolve, 2000));
            }
    
            if (!this.canvas_render) {
                console.error('No rendering canvas');
                this.processingDownload = false;
                return;
            }
    
            const canvas_render = this.canvas_render as HTMLCanvasElement;
            const dataUrl = canvas_render.toDataURL();
    
            const a = document.createElement('a');
            a.href = dataUrl;
    

    
            a.download = `Corpse_Image_${this.getCurrentTime()}.png`;
            a.click();
    
            if (isSharing) {
                await this.archiveImage(dataUrl);
            }
        } catch (error) {
            console.error('Error downloading or archiving image', error);
        } finally {
            this.processingDownload = false;
        }
    }


    async shareImage() {


        const userUsesMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

        if(!userUsesMobile) {
            this.downloadImage(true);
            return;
        }

        if(this.processingDownload) {
            return;
        }
        this.processingDownload = true;

        if(this.running) {
            this.running = false;
            await this.loop();
            await this.draw();
            // wait for the last draw to finish
            await new Promise((resolve) => {
                setTimeout(() => {
                    resolve(true);
                }, 2000);
            });

        }


        if (!this.canvas_render) {
            console.error('No rendering canvas');
            return;
        }

        const canvas_render = this.canvas_render as HTMLCanvasElement;

        const dataUrl = canvas_render.toDataURL();

       const currentTime = this.getCurrentTime();

        // share as file
        const blob = await fetch(dataUrl).then(res => res.blob());
        const filesArray = [new File([blob], `image ${currentTime}.png`, { type: 'image/png' })];

        const shareData = {
            files: filesArray,
            title: `image ${currentTime}`,
            text: `image ${currentTime}`,
            url: import.meta.env.VITE_APP_URL
        };       

        try {
            if (navigator.share && userUsesMobile) {
                await navigator.share(shareData);
                console.log('Shared successfully');
            } else {
                console.error('Sharing is not supported (on desktop)');
                this.downloadImage();
            }
        } catch (err) {
            console.error('Error sharing', err);
        }

        this.processingDownload = false;

    }


    async archiveImage(dataUrl: string) {

    if(confirm('Do you consent that we archive this image?')) {

        // console.log('Archiving image');
        console.log('Archiving image');
        const formData = new FormData();

        const currentTime = this.getCurrentTime();

        const file = await fetch(dataUrl).then(res => res.blob())
            .then(blob => new File([blob], `image ${currentTime}.png`, { type: 'image/png' }));
            
    
        // Append the File to FormData
        formData.append('image', file);



        const usedPiecesList = Object.keys(this.currentlyShownPieces).map((key) => {
            const piece = this.currentlyShownPieces[key];

            if(piece.baseImage.name === 'YOU!') {
                return -1;
            }
            else {
                return piece.baseImage.id;
            }
        });

        formData.append('usedPieces', JSON.stringify(usedPiecesList));

        // get the list of used pieces
        console.log('Used pieces', usedPiecesList);

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