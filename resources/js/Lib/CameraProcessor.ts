
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

import { PixelInput, Segmentation } from '@tensorflow-models/body-segmentation/dist/shared/calculators/interfaces/common_interfaces';
import { blazePosePoseBodyParts, blazePosePoseLandmarks, bodyPixCombination, bodyPixRedValue } from './Tables';
import { CutoutRaw } from '@/types/PoolTypes'

import * as poseDetection from '@tensorflow-models/pose-detection';
// Register WebGL backend.
import '@tensorflow/tfjs-backend-webgl';


export class CameraProcessor {


    drawCanvas: boolean = false;

    canvasses: HTMLCanvasElement | null = null;

    cutouts: cutOut[] = [];

    div_video: HTMLDivElement | null = null;
    video: HTMLVideoElement | null = null;

    div_process: HTMLDivElement | null = null;
    canvas_process: HTMLCanvasElement | null = null;


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


    async init(videoDiv: HTMLDivElement, div_process: HTMLDivElement) {
        console.log("init");

        await this.setupInferences();
        console.log('Inferences setup');

        await this.getAvailableVideoDevices();
        console.log('Got available video devices');
        this.currentVideoDevice = this.availableVideoDevices[0];

        await this.getMediaStream(videoDiv);
        console.log('Got media stream');

        await this.createCanvasses(div_process);
        console.log('Canvasses created');

        return new Promise<boolean>((resolve, reject) => {
            resolve(true);
        });
    }

    async getAvailableVideoDevices() {
        const devices = await navigator.mediaDevices.enumerateDevices();
        this.availableVideoDevices = devices.filter(device => device.kind === 'videoinput');
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

        this.getMediaStream(this.div_video as HTMLDivElement);

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


        videoDiv.innerHTML = '';
        videoDiv.appendChild(video);



        const constraints = {
            video: {
                deviceId: this.currentVideoDevice ? { exact: this.currentVideoDevice.deviceId } : undefined,
                width: { ideal: 640 },
                height: { ideal: 480 }
            }
        };


        navigator.mediaDevices.getUserMedia(constraints)
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



        if (!this.video || !this.canvas_process) {
            console.error('No video or canvas');
            return;
        }

        await this.process(this.video);
        await this.draw();
    }

    // --------------------------------------------------

    async process(input: PixelInput) {

        console.log('process');

        await this.segmentBodyPix(input);
        await this.estimatePose(input);
        await this.convertImageDataToPixels(this.inferenceData.maskData as ImageData);

        if (this.inferenceData.poses && this.inferenceData.coloredPartImage) {
            await this.getBoundingBoxes(this.inferenceData.poses, this.inferenceData.coloredPartImage);
        }


        // console.log(this.inferenceData);

        // await new Promise((resolve) => {
        //     setTimeout(() => {
        //         resolve(true);
        //     }, 1000);
        // }
        // )

    }

    async segmentBodyPix(input: PixelInput) {

        if (!input || !this.inference.bodyPix) {
            console.error('No video or inference');
            return;
        }

        const bodyPix = this.inference.bodyPix as bodySegmentation.BodySegmenter;

        const segmentationConfig: bodySegmentation.BodyPixSegmentationConfig = {
            multiSegmentation: false,
            segmentBodyParts: true,
            maxDetections: 1,
            // nmsRadius: 20,
        }

        const segmentation = await bodyPix.segmentPeople(input, segmentationConfig);

        this.inferenceData.bodyPixSegmentation = segmentation;

        const coloredPartImage = await bodySegmentation.toColoredMask(segmentation, bodySegmentation.bodyPixMaskValueToRainbowColor, { r: 255, g: 255, b: 255, a: 255 });

        this.inferenceData.coloredPartImage = coloredPartImage;
        this.inferenceData.maskData = await segmentation[0].mask.toImageData();

        return segmentation;
    }


    // Important: this image data is a .mask.toImageData() from the segmentation, NOT .toColoredMask()
    async convertImageDataToPixels(imageData: ImageData) {

        let pixels: Pixel[] = [];

        const data = imageData.data;
        const width = imageData.width;
        const height = imageData.height;

        for (let i = 0; i < data.length; i += 4) {
            const r = data[i];
            const g = data[i + 1];
            const b = data[i + 2];
            const a = data[i + 3];

            const x = (i / 4) % width;
            const y = Math.floor((i / 4) / width);

            pixels.push({ x: x, y: y, color: { r: r, g: g, b: b, a: a } });
        }

        this.inferenceData.pixels = pixels;

        return pixels;

    }


    async estimatePose(input: PixelInput) {

        if (!input || !this.inference.blazePose) {
            console.error('No video or inference');
            return;
        }

        const estimationConfig = {
            flipHorizontal: false,
        }

        const timestamp = performance.now();
        const blazePose = this.inference.blazePose as poseDetection.PoseDetector;

        const poses = await blazePose.estimatePoses(input, estimationConfig, timestamp);


        this.inferenceData.poses = poses;

        return poses;


    }


    async getBoundingBoxes(poses: poseDetection.Pose[], input: PixelInput) {


        // from the poses, get the bounding boxes based on the coloredPartImage

        const boundingBoxes: { x: number, y: number, width: number, height: number, label: string }[] = [];

        for (const pose of poses) {
            const keypoints = pose.keypoints;
            const boundingBox = this.getBoundingBox(keypoints, input);
        }

    }

    async getBoundingBox(keypoints: poseDetection.Keypoint[], input: PixelInput) {

        this.boundingBoxes = [];

        const blazePoseLabel = "head";

        const headPoints: poseDetection.Keypoint[] = [];

        for (const part of blazePosePoseBodyParts[blazePoseLabel]) {
            headPoints.push(keypoints[part]);
        }

        const headMinX = Math.min(...headPoints.map(point => point.x));
        const headMinY = Math.min(...headPoints.map(point => point.y));
        const headMaxX = Math.max(...headPoints.map(point => point.x));
        const headMaxY = Math.max(...headPoints.map(point => point.y));

        const headWidth = headMaxX - headMinX;
        const headHeight = headMaxY - headMinY;

        let boundingBox = { x: headMinX, y: headMinY, width: headWidth, height: headHeight, label: 'head_pose' };

        this.boundingBoxes.push(boundingBox);


        let pixels = this.inferenceData.pixels as Pixel[];

        let headBoundingBox = {
            x: -1,
            y: -1,
            width: -1,
            height: -1
        }

        const bodyPixLabel = "head";
        let headPixels = pixels.filter(pixel => (bodyPixCombination[bodyPixLabel].includes(pixel.color.r)));

        headBoundingBox.x = Math.min(...headPixels.map(pixel => pixel.x));
        headBoundingBox.y = Math.min(...headPixels.map(pixel => pixel.y));
        headBoundingBox.width = Math.max(...headPixels.map(pixel => pixel.x)) - headBoundingBox.x;
        headBoundingBox.height = Math.max(...headPixels.map(pixel => pixel.y)) - headBoundingBox.y;

        boundingBox = { x: headBoundingBox.x, y: headBoundingBox.y, width: headBoundingBox.width, height: headBoundingBox.height, label: 'head_mask' };

        // this.boundingBoxes.push(boundingBox);

let imageWidth = this.inferenceData.maskData?.width as number;
let imageHeight = this.inferenceData.maskData?.height as number;

// Calculate the center of the head_pose bounding box
const centerX = Math.round(headMinX + headWidth / 2);
const centerY = Math.round(headMinY + headHeight / 2);

// Initialize the boundaries to the center
let topY = centerY;
let bottomY = centerY;
let leftX = centerX;
let rightX = centerX;

// Raycast upwards
for (let y = centerY; y >= 0; y--) {
    const pixel = pixels.find(p => p.x === centerX && p.y === y);
    if (pixel && bodyPixCombination[bodyPixLabel].includes(pixel.color.r)) {
        topY = y;
    } else {
        break;
    }
}

// Raycast downwards
for (let y = centerY; y < imageHeight; y++) {
    const pixel = pixels.find(p => p.x === centerX && p.y === y);
    if (pixel && bodyPixCombination[bodyPixLabel].includes(pixel.color.r)) {
        bottomY = y;
    } else {
        break;
    }
}

// Raycast left
for (let x = centerX; x >= 0; x--) {
    const pixel = pixels.find(p => p.x === x && p.y === centerY);
    if (pixel && bodyPixCombination[bodyPixLabel].includes(pixel.color.r)) {
        leftX = x;
    } else {
        break;
    }
}

// Raycast right
for (let x = centerX; x < imageWidth; x++) {
    const pixel = pixels.find(p => p.x === x && p.y === centerY);
    if (pixel && bodyPixCombination[bodyPixLabel].includes(pixel.color.r)) {
        rightX = x;
    } else {
        break;
    }
}

const combinedMinX = leftX;
const combinedMinY = topY;
const combinedMaxX = rightX;
const combinedMaxY = bottomY;

const combinedWidth = combinedMaxX - combinedMinX;
const combinedHeight = combinedMaxY - combinedMinY;

boundingBox = { x: combinedMinX, y: combinedMinY, width: combinedWidth, height: combinedHeight, label: 'head_combined' };

this.boundingBoxes.push(boundingBox);

    }



    // --------------------------------------------------

    async draw() {
        console.log('draw');

        await this.clearCanvas();

        await this.drawVideo();

        await this.drawSegmentation();
        await this.drawPose();

        await this.drawBoundingBoxes();

        //wait 1 second
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

        poseDetection.util.getAdjacentPairs(poseDetection.SupportedModels.BlazePose).forEach(([i, j]) => {
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

    async drawBoundingBoxes() {

        if (!this.canvas_process || !this.boundingBoxes) {
            console.error('No canvas or bounding boxes');
            return;
        }

        const canvas = this.canvas_process as HTMLCanvasElement;
        const ctx = canvas.getContext('2d');

        if (!ctx) {
            console.error('No context');
            return;
        }

        for (const boundingBox of this.boundingBoxes) {
            ctx.beginPath();
            ctx.rect(boundingBox.x, boundingBox.y, boundingBox.width, boundingBox.height);
            ctx.strokeStyle = 'red';
            ctx.lineWidth = 5;
            ctx.stroke();

            ctx.font = '20px Arial';
            ctx.fillStyle = 'red';
            ctx.fillText(boundingBox.label, boundingBox.x, boundingBox.y - 10);

        }


    }



}