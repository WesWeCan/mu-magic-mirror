
type Pixel = {
    x: number,
    y: number,
    color: {
        r: number,
        g: number,
        b: number,
        a: number
    }
}

type cutOut = {
    part: string,
    img: string
}

import '@tensorflow/tfjs';
import * as tf from '@tensorflow/tfjs';
import * as bodySegmentation from '@tensorflow-models/body-segmentation';
import '@tensorflow/tfjs-core';
import '@tensorflow/tfjs-backend-webgl';
import '@mediapipe/selfie_segmentation';

import { Segmentation } from '@tensorflow-models/body-segmentation/dist/shared/calculators/interfaces/common_interfaces';
import { labelTable, labelTableCombinations } from './Tables';
import { CutoutRaw } from '@/types/PoolTypes'

import * as poseDetection from '@tensorflow-models/pose-detection';
// Register WebGL backend.
import '@tensorflow/tfjs-backend-webgl';


import { COCOKeypoints, COCOKeypointsCombinations } from './Tables';


export class CameraProcessor {


    drawCanvas: boolean = false;

    canvasses: HTMLCanvasElement | null = null;

    cutouts: cutOut[] = [];

    div_video: HTMLDivElement | null = null;
    video: HTMLVideoElement | null = null;

    div_process: HTMLDivElement | null = null;
    canvas_process: HTMLCanvasElement | null = null;


    mousePos: { x: number, y: number } = { x: 0, y: 0 };


    inference: any = {};
    inferenceData: any = {};


    constructor() {
        console.log("ImageProcessor constructor");
    }


    async init(videoDiv: HTMLDivElement, div_process: HTMLDivElement) {
        console.log("init");



        await this.setupInferences();

        await this.getMediaStream(videoDiv);
        console.log('Got media stream');

        await this.createCanvasses(div_process);
        console.log('Canvasses created');

        return new Promise<boolean>((resolve, reject) => {
            resolve(true);
        });
    }

    async getMediaStream(videoDiv: HTMLDivElement) {

        if (!videoDiv) {
            console.error('No video div');
            return;
        }

        this.div_video = videoDiv;


        const video = document.createElement('video');
        video.width = 640;
        video.height = 480;

        video.muted = true;

        // append video to div
        videoDiv.appendChild(video);

        navigator.mediaDevices.getUserMedia({ video: true })
            .then((stream) => {
                video.srcObject = stream;
            });

        await new Promise((resolve) => {
            video.onloadedmetadata = () => {
                console.log('Video metadata loaded');
                resolve(true);
            };
        });

        video.play();

        if (!video) {
            console.error('No video');
            return;
        }
        this.video = video;

        await new Promise((resolve) => {
            video.addEventListener('loadeddata', () => {
                console.log('Video loaded');
                resolve(true);
            });
        });

        return new Promise((resolve) => {
            resolve(true);
        });

    }

    async createCanvasses(div_process: HTMLDivElement) {

        if (!div_process) {
            console.error('No div process');
            return;
        }

        this.div_process = div_process;

        const canvas_process = document.createElement('canvas');
        canvas_process.id = 'canvas_process';

        canvas_process.width = this.div_process.clientWidth;
        canvas_process.height = this.div_process.clientHeight;

        this.canvas_process = canvas_process;

        this.div_process.appendChild(canvas_process);

        return new Promise((resolve) => {
            resolve(true);
        });


    }



    async setupInferences() {

        await tf.ready();
        console.log('Tensorflow ready');

        // BodyPix Segmentation
        this.inference.bodyPix = undefined;
        const bodyPixSegmenter = await bodySegmentation.createSegmenter(bodySegmentation.SupportedModels.BodyPix);
        this.inference.bodyPix = bodyPixSegmenter;
        console.log('BodyPix ready');

        // BlazePose
        this.inference.blazePose = undefined;
        const detectorConfig = {
            runtime: 'tfjs',
            enableSmoothing: true,
            modelType: "full",
        };
        const blazePose = await poseDetection.createDetector(poseDetection.SupportedModels.BlazePose, detectorConfig);
        this.inference.blazePose = blazePose;
        console.log('BlazePose ready');

    }




    // --------------------------------------------------

    async loop() {
        await this.process();
        await this.draw();
    }

    // --------------------------------------------------

    async process() {

        console.log('process');

        await this.segmentBodyPix();
        await this.estimatePose();


        console.log(this.inferenceData);

        // await new Promise((resolve) => {
        //     setTimeout(() => {
        //         resolve(true);
        //     }, 1000);
        // }
        // )

    }

    async segmentBodyPix() {

        if (!this.video || !this.inference.bodyPix) {
            console.error('No video or inference');
            return;
        }

        const bodyPix = this.inference.bodyPix as bodySegmentation.BodySegmenter;

        const segmentation = await bodyPix.segmentPeople(this.video, { multiSegmentation: false, segmentBodyParts: true });
        const coloredPartImage = await bodySegmentation.toColoredMask(segmentation, bodySegmentation.bodyPixMaskValueToRainbowColor, { r: 255, g: 255, b: 255, a: 255 });

        this.inferenceData.coloredPartImage = coloredPartImage;

        return segmentation;
    }


    async estimatePose() {

        if (!this.video || !this.inference.blazePose) {
            console.error('No video or inference');
            return;
        }

        const estimationConfig = {
            flipHorizontal: false,
        }

        const timestamp = performance.now();
        const blazePose = this.inference.blazePose as poseDetection.PoseDetector;

        const poses = await blazePose.estimatePoses(this.video, estimationConfig, timestamp);


        this.inferenceData.poses = poses;


    }



    // --------------------------------------------------

    async draw() {
        console.log('draw');

        await this.clearCanvas();

        // await this.drawVideo();

        await this.drawSegmentation();
        await this.drawPose();

        // wait 1 second
        // await new Promise((resolve) => {
        //     setTimeout(() => {
        //         resolve(true);
        //     }, 1000);
        // });
    }


    async clearCanvas() {
        if (!this.canvas_process) {
            console.error('No canvas');
            return;
        }

        const canvas = this.canvas_process as HTMLCanvasElement;
        const ctx = canvas.getContext('2d');

        if (!ctx) {
            console.error('No context');
            return;
        }

        ctx.clearRect(0, 0, canvas.width, canvas.height);


    }


    // TODO: make this responsive
    // TODO: use a processing canvas and a rendering canvas
    async drawVideo() {
        if (!this.canvas_process || !this.video) {
            console.error('No canvas or video');
            return;
        }

        const canvas = this.canvas_process as HTMLCanvasElement;
        const ctx = canvas.getContext('2d');

        if (!ctx) {
            console.error('No context');
            return;
        }

        ctx.drawImage(this.video, 0, 0, canvas.width, canvas.height);

    }


    async drawSegmentation() {

        if (!this.canvas_process || !this.inferenceData.coloredPartImage) {
            console.error('No canvas or coloredPartImage');
            return;
        }

        const canvas = this.canvas_process as HTMLCanvasElement;
        const ctx = canvas.getContext('2d');

        if (!ctx) {
            console.error('No context');
            return;
        }

        const coloredPartImage = this.inferenceData.coloredPartImage as ImageData;

        ctx.putImageData(coloredPartImage, 0, 0);

    }


    async drawPose() {


        if (!this.canvas_process || !this.inferenceData.poses) {
            console.error('No canvas or poses');
            return;
        }

        const canvas = this.canvas_process as HTMLCanvasElement;
        const ctx = canvas.getContext('2d');

        if (!ctx) {
            console.error('No context');
            return;
        }

        const poses = this.inferenceData.poses as poseDetection.Pose[];

        if (poses.length > 0) {
            this.drawKeypoints(ctx, poses[0].keypoints);
            this.drawSkeleton(ctx, poses[0].keypoints, 0);
        }

    }

    async drawKeypoints(ctx: CanvasRenderingContext2D, keypoints: poseDetection.Keypoint[]) {

        if (!ctx) {
            console.error('No context');
            return;
        }

        const keypointInd =
            poseDetection.util.getKeypointIndexBySide(poseDetection.SupportedModels.BlazePose);
        ctx.fillStyle = 'Red';
        ctx.strokeStyle = '#ffd8b1';
        ctx.lineWidth = 5;

        for (const i of keypointInd.middle) {
            this.drawKeypoint(ctx, keypoints[i]);
        }

        ctx.fillStyle = 'Green';
        for (const i of keypointInd.left) {
            this.drawKeypoint(ctx, keypoints[i]);
        }

        ctx.fillStyle = 'Orange';
        for (const i of keypointInd.right) {
            this.drawKeypoint(ctx, keypoints[i]);
        }

    }

    drawKeypoint(ctx: CanvasRenderingContext2D, keypoint: poseDetection.Keypoint) {
        // If score is null, just show the keypoint.
        const score = keypoint.score != null ? keypoint.score : 1;
        const scoreThreshold = 0;
        const radius = 8;

        if (score >= scoreThreshold) {
            const circle = new Path2D();
            circle.arc(keypoint.x, keypoint.y, radius, 0, 2 * Math.PI);
            ctx.fill(circle);
            ctx.stroke(circle);
        }
    }


    async drawSkeleton(ctx: CanvasRenderingContext2D, keypoints: poseDetection.Keypoint[], poseId: number) {

        const COLOR_PALETTE = [
            '#ffffff', '#800000', '#469990', '#e6194b', '#42d4f4', '#fabed4', '#aaffc3',
            '#9a6324', '#000075', '#f58231', '#4363d8', '#ffd8b1', '#dcbeff', '#808000',
            '#ffe119', '#911eb4', '#bfef45', '#f032e6', '#3cb44b', '#a9a9a9'
        ];

        // Each poseId is mapped to a color in the color palette.
        const color = "#a9a9a9";
        ctx.fillStyle = color;
        ctx.strokeStyle = color;
        ctx.lineWidth = 3;

        poseDetection.util.getAdjacentPairs(poseDetection.SupportedModels.BlazePose).forEach(([ i, j ]) => {
            const kp1 = keypoints[i];
            const kp2 = keypoints[j];

            // If score is null, just show the keypoint.
            const score1 = kp1.score != null ? kp1.score : 1;
            const score2 = kp2.score != null ? kp2.score : 1;
            const scoreThreshold = 0;

            if (score1 >= scoreThreshold && score2 >= scoreThreshold) {
                ctx.beginPath();
                ctx.moveTo(kp1.x, kp1.y);
                ctx.lineTo(kp2.x, kp2.y);
                ctx.stroke();
            }
        });

    }





}