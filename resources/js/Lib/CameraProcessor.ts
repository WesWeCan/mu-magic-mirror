
import { Pixel, cutOut } from '@/types';

import '@tensorflow/tfjs';
import * as tf from '@tensorflow/tfjs';
import * as bodySegmentation from '@tensorflow-models/body-segmentation';
import '@tensorflow/tfjs-core';
import '@tensorflow/tfjs-backend-webgl';
import '@mediapipe/selfie_segmentation';

import { PixelInput, Segmentation } from '@tensorflow-models/body-segmentation/dist/shared/calculators/interfaces/common_interfaces';


import * as poseDetection from '@tensorflow-models/pose-detection';
// Register WebGL backend.
import '@tensorflow/tfjs-backend-webgl';
import { setupInferences } from './CameraProcessorFunctions/setup/setupInferences'
import { getAvailableVideoDevices, getMediaStream } from './CameraProcessorFunctions/setup/setupVideo'
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


export class CameraProcessor {


    drawCanvas: boolean = false;

    canvasses: HTMLCanvasElement | null = null;

    cutouts: cutOut[] = [];

    div_video: HTMLDivElement | null = null;
    video: HTMLVideoElement | null = null;

    div_process: HTMLDivElement | null = null;
    canvas_process: HTMLCanvasElement | null = null;

    div_render: HTMLDivElement | null = null;
    canvas_render: HTMLCanvasElement | null = null;

    mousePos: { x: number, y: number } = { x: 0, y: 0 };


    availableVideoDevices: MediaDeviceInfo[] = [];
    currentVideoDevice: MediaDeviceInfo | undefined;


    inference:
        {
            bodyPix: bodySegmentation.BodySegmenter | undefined,
            blazePose: poseDetection.PoseDetector | undefined
        }
        = {
            bodyPix: undefined,
            blazePose: undefined
        };
    inferenceData: {
        poses: poseDetection.Pose[] | undefined,
        coloredPartImage: ImageData | undefined,
        bodyPixSegmentation: Segmentation[] | undefined
        pixels: Pixel[] | undefined,
        maskData: ImageData | undefined
    } = {
            poses: undefined,
            bodyPixSegmentation: undefined,
            coloredPartImage: undefined,
            pixels: undefined,
            maskData: undefined
        };


    boundingBoxes: { x: number, y: number, width: number, height: number, label: string }[] = [];

    constructor() {
        console.log("ImageProcessor constructor");
    }


    async init(videoDiv: HTMLDivElement, div_process: HTMLDivElement, div_render: HTMLDivElement) {
        console.log("init");

        await setupInferences(this);
        console.log('Inferences setup');

        await getAvailableVideoDevices(this);
        console.log('Got available video devices');
        this.currentVideoDevice = this.availableVideoDevices[0];

        await getMediaStream(this, videoDiv);
        console.log('Got media stream');

        await createCanvasses(this, div_process, div_render);
        console.log('Canvasses created');

        return new Promise<boolean>((resolve, reject) => {
            resolve(true);
        });
    }

    

    async switchVideoDevice() {

        if (!this.currentVideoDevice) {
            console.error('No current video device');
            return;
        }

        const currentDevice = this.currentVideoDevice;

        // get index of current device
        const currentIndex = this.availableVideoDevices.indexOf(currentDevice);

        // get next device
        const nextIndex = (currentIndex + 1) % this.availableVideoDevices.length;
        const nextDevice = this.availableVideoDevices[nextIndex];

        // set next device
        this.currentVideoDevice = nextDevice;
        console.log('Switching video device to: ' + nextDevice.label);

        getMediaStream(this, this.div_video as HTMLDivElement);

    }


    // --------------------------------------------------

    async loop() {
        if (!this.video || !this.canvas_process) {
            console.error('No video or canvas');
            return;
        }

        await this.process(this.video);
        await this.draw();
        await this.render();
    }

    // --------------------------------------------------

    async process(input: PixelInput) {

        console.log('process');

        await segmentBodyPix(this, input);
        await estimatePose(this, input);
        await convertImageDataToPixels(this, this.inferenceData.maskData as ImageData);

        if (this.inferenceData.poses && this.inferenceData.coloredPartImage) {
            await getBoundingBoxes(this, this.inferenceData.poses, this.inferenceData.coloredPartImage);
        }


        // console.log(this.inferenceData);

        // await new Promise((resolve) => {
        //     setTimeout(() => {
        //         resolve(true);
        //     }, 1000);
        // }
        // )

    }

    // --------------------------------------------------

    async draw() {
        console.log('draw');

        await clearCanvas(this);
        await drawVideo(this);
        await drawSegmentation(this);
        await drawPose(this);
        await drawBoundingBoxes(this);

        //wait 1 second
        // await new Promise((resolve) => {
        //     setTimeout(() => {
        //         resolve(true);
        //     }, 1000);
        // });
    }

    







    async render() {

        console.log('render');

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



}