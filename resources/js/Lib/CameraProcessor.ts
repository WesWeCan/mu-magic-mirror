
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

        await this.setupInferences();
        console.log('Inferences setup');

        await this.getAvailableVideoDevices();
        console.log('Got available video devices');
        this.currentVideoDevice = this.availableVideoDevices[0];

        await this.getMediaStream(videoDiv);
        console.log('Got media stream');

        await this.createCanvasses(div_process, div_render);
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

    async createCanvasses(div_process: HTMLDivElement, div_render: HTMLDivElement) {

        if (!div_process) {
            console.error('No div process');
            return;
        }



        this.div_process = div_process  ;

        const canvas_process = document.createElement('canvas');
        canvas_process.id = 'canvas_process';

        canvas_process.width = this.video?.videoWidth || 0;
        canvas_process.height = this.video?.videoHeight || 0;

        this.canvas_process = canvas_process;

        this.div_process.appendChild(canvas_process);




        if (!div_render) {
            console.error('No div render');
            return;
        }

        this.div_render = div_render;

        const canvas_render = document.createElement('canvas');
        canvas_render.id = 'canvas_render';

        canvas_render.width = this.div_render.clientWidth;
        canvas_render.height = this.div_render.clientHeight;

        this.canvas_render = canvas_render;

        this.div_render.appendChild(canvas_render);



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
        await this.render();
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

    async filterkeypoints(keypoints: poseDetection.Keypoint[]) {

        const treshold = 0.9;

        const filteredKeypoints = keypoints.filter(keypoint => keypoint.score as number > treshold);


        this.inferenceData.filteredKeypoints = filteredKeypoints;
        return filteredKeypoints;

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
        return;
        this.boundingBoxes = [];
        const pixels = this.inferenceData.pixels as Pixel[];

        let imageWidth = this.inferenceData.maskData?.width as number;
        let imageHeight = this.inferenceData.maskData?.height as number;

        const scalingFactor = 1.2;


        const labels = Object.keys(blazePosePoseBodyParts)
        
        for(let label of labels) {

            // General Bounding Box based on only keypoints

            const blazePoseLabel = label as keyof typeof blazePosePoseBodyParts;

            const partPoints: poseDetection.Keypoint[] = [];

            for (const part of blazePosePoseBodyParts[blazePoseLabel]) {
                partPoints.push(keypoints[part]);
            }

            const partMinX = Math.min(...partPoints.map(point => point.x));
            const partMinY = Math.min(...partPoints.map(point => point.y));
            const partMaxX = Math.max(...partPoints.map(point => point.x));
            const partMaxY = Math.max(...partPoints.map(point => point.y));

            const partWidth = partMaxX - partMinX;
            const partHeight = partMaxY - partMinY;

            const boundingBox = { x: partMinX, y: partMinY, width: partWidth, height: partHeight, label: `${blazePoseLabel}_pose` };

            this.boundingBoxes.push(boundingBox);


            // ----------------------------



            // Bounding Box based on BodyPix mask

            let partBoundingBox = {
                x: -1,
                y: -1,
                width: -1,
                height: -1
            }

            const bodyPixLabel = label as keyof typeof bodyPixCombination;
            let partPixels = pixels.filter(pixel => (bodyPixCombination[bodyPixLabel].includes(pixel.color.r)));

            partBoundingBox.x = Math.min(...partPixels.map(pixel => pixel.x));
            partBoundingBox.y = Math.min(...partPixels.map(pixel => pixel.y));
            partBoundingBox.width = Math.max(...partPixels.map(pixel => pixel.x)) - partBoundingBox.x;
            partBoundingBox.height = Math.max(...partPixels.map(pixel => pixel.y)) - partBoundingBox.y;

            const maskBoundingBox = { x: partBoundingBox.x, y: partBoundingBox.y, width: partBoundingBox.width, height: partBoundingBox.height, label: `${blazePoseLabel}_mask` };

            this.boundingBoxes.push(maskBoundingBox);

            // ----------------------------



            // Bounding Box based on combined mask


            // Calculate the center of the {part}_pose bounding box
            const centerX = Math.round(partMinX + partWidth / 2);
            const centerY = Math.round(partMinY + partHeight / 2);

            // Initialize the boundaries to the center
            let topY = centerY;
            let bottomY = centerY;
            let leftX = centerX;
            let rightX = centerX;

            // Create a 2D array for the mask
            let mask = Array(imageHeight).fill(0).map(() => Array(imageWidth).fill(false));

            // Fill the mask array based on the bodyPix mask

            let atLeastOnePixel = false;
            for (let pixel of pixels) {
                if (bodyPixCombination[bodyPixLabel].includes(pixel.color.r)) {
                    mask[pixel.y][pixel.x] = true;
                    atLeastOnePixel = true;
                }
            }


            if (!atLeastOnePixel) {
                console.log('No pixels found', bodyPixLabel);
                continue;
            }

            // Raycast upwards
            for (let y = centerY; y >= 0; y--) {
                if (mask[y][centerX]) {
                    topY = y;
                } else {
                    break;
                }
            }

            // Raycast downwards
            for (let y = centerY; y < imageHeight; y++) {
                if (mask[y][centerX]) {
                    bottomY = y;
                } else {
                    break;
                }
            }

            // Raycast left
            for (let x = centerX; x >= 0; x--) {
                if (mask[centerY][x]) {
                    leftX = x;
                } else {
                    break;
                }
            }

            // Raycast right
            for (let x = centerX; x < imageWidth; x++) {
                if (mask[centerY][x]) {
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


            // Include the scaling factor
            const combinedBoundingBox = {
                x: combinedMinX - (combinedWidth * scalingFactor - combinedWidth) / 2,
                y: combinedMinY - (combinedHeight * scalingFactor - combinedHeight) / 2,
                width: combinedWidth * scalingFactor,
                height: combinedHeight * scalingFactor,
                label: `${bodyPixLabel}_combined`
            };


            this.boundingBoxes.push(combinedBoundingBox);



        };

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

        ctx.lineWidth = 5;




        for (const i of keypointInd.middle) {
            ctx.strokeStyle = (keypoints[i].score ?? 0 >= .5) ? 'rgba(0,255,0,1)' : 'rgba(0,0,255)';
            this.drawKeypoint(ctx, keypoints[i]);
        }

        ctx.fillStyle = 'Green';
        for (const i of keypointInd.left) {
            ctx.strokeStyle = (keypoints[i].score ?? 0 >= .5) ? 'rgba(0,255,0,1)' : 'rgba(0,0,255)';
            this.drawKeypoint(ctx, keypoints[i]);
        }

        ctx.fillStyle = 'Orange';
        for (const i of keypointInd.right) {
            ctx.strokeStyle = (keypoints[i].score ?? 0 >= .5) ? 'rgba(0,255,0,1)' : 'rgba(0,0,255)';
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
            ctx.strokeStyle = boundingBox.label === 'head_combined' ? 'green' : 'red';
            ctx.lineWidth = 5;
            ctx.stroke();

            ctx.font = '20px Arial';
            ctx.fillStyle = boundingBox.label === 'head_combined' ? 'green' : 'red';
            ctx.fillText(boundingBox.label, boundingBox.x, boundingBox.y - 10);

        }


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