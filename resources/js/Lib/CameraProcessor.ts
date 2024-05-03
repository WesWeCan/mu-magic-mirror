
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

import '@mediapipe/selfie_segmentation';

import { Segmentation } from '@tensorflow-models/body-segmentation/dist/shared/calculators/interfaces/common_interfaces';
import { labelTable, labelTableCombinations } from './Tables';
import { CutoutRaw } from '@/types/PoolTypes'


export class CameraProcessor {


    drawCanvas: boolean = false;

    canvasses: HTMLCanvasElement | null = null;


    bodySegmenter: bodySegmentation.BodySegmenter | null = null;
    bodySegmentationModel = bodySegmentation.SupportedModels.MediaPipeSelfieSegmentation;

    bodySegmentationModelConfig: bodySegmentation.BodyPixModelConfig = {
        architecture: 'ResNet50',
        outputStride: 16,
        quantBytes: 4
    };

    bodySegmentationConfig: bodySegmentation.BodyPixSegmentationConfig = {
        multiSegmentation: false,
        segmentBodyParts: true,
        flipHorizontal: false,
        internalResolution: 'medium', // full, low, medium, high default is 'medium'
        segmentationThreshold: 0.7,
        maxDetections: 1,
        scoreThreshold: 0.2,
        nmsRadius: 20,

        minKeypointScore: 0.5,
        refineSteps: 20,
    }


    cutouts: cutOut[] = [];

    div_video: HTMLDivElement | null = null;
    video: HTMLVideoElement | null = null;

    div_process: HTMLDivElement | null = null;
    canvas_process: HTMLCanvasElement | null = null;


    mousePos: { x: number, y: number } = { x: 0, y: 0 };


    constructor() {

        console.log("ImageProcessor constructor");



    }


    async init(videoDiv: HTMLDivElement, div_process: HTMLDivElement) {
        console.log("init");

        await tf.ready();


        // this.bodySegmenter = await bodySegmentation.createSegmenter(this.bodySegmentationModel, this.bodySegmentationModelConfig);
        const segmenterConfig = {
            runtime: 'tfjs', // or 'tfjs'
            solutionPath: 'https://cdn.jsdelivr.net/npm/@mediapipe/selfie_segmentation',
            modelType: 'general'
        }
        this.bodySegmenter = await bodySegmentation.createSegmenter(this.bodySegmentationModel, segmenterConfig);

        console.log("bodySegmenter loaded");


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

        // videoDiv.appendChild(video);
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
        canvas_process.width = 640;
        canvas_process.height = 480;

        this.canvas_process = canvas_process;

        // const canvas_result = document.createElement('canvas');
        // canvas_result.id = 'canvas_result';
        // canvas_result.width = 640;
        // canvas_result.height = 480;



        this.div_process.appendChild(canvas_process);

        this.canvas_process.addEventListener('mousemove', (e) => {
            this.mousePos = { x: e.offsetX, y: e.offsetY };
        });

        this.canvas_process.addEventListener('mouseleave', (e) => {
            this.mousePos = { x: -1, y: -1 };
        });


        this.canvas_process.addEventListener('click', (e) => {
            this.mousePos = { x: e.offsetX, y: e.offsetY };
            // this.takePictureAndSlice();
        });


        return new Promise((resolve) => {
            resolve(true);
        });


    }


    async draw(){


        if (!this.video) {
            console.error('No video');
            return;
        }

        if (!this.canvas_process) {
            console.error('No canvas process');
            return;
        }

        if (!this.bodySegmenter) {
            console.error('No bodySegmenter');
            return;
        }

        const ctx = this.canvas_process.getContext('2d');

        if (!ctx) {
            console.error('No ctx');
            return;
        }

        ctx.drawImage(this.video, 0, 0, this.canvas_process.width, this.canvas_process.height);
     
        // draw circle around mouse
        ctx.beginPath();
        ctx.arc(this.mousePos.x, this.mousePos.y, 10, 0, 2 * Math.PI);
        ctx.stroke();


        
        let boundingBox = await this.getBoundingBoxFromMousePos();

        if(boundingBox){
            let x = boundingBox.x;
            let y = boundingBox.y;
            let width = boundingBox.width;
            let height = boundingBox.height;

            ctx.strokeStyle = 'red';
            ctx.lineWidth = 2;

            ctx.strokeRect(x, y, width, height);
        }

    }



    async getBoundingBoxFromMousePos() {


        if (!this.canvas_process) {
            console.error('No canvas process');
            return;
        }


        if(this.mousePos.x == -1 && this.mousePos.y == -1){
            return;
        }

    
        const squareSize = this.canvas_process.width * 0.23;
        let x = this.mousePos.x - squareSize / 2;
        let y = this.mousePos.y - squareSize / 2;



        if (x < 0) {
            x = 0;
        } else if (x + squareSize > this.canvas_process.width) {
            x = this.canvas_process.width - squareSize;
        }

        if (y < 0) {
            y = 0;
        } else if (y + squareSize > this.canvas_process.height) {
            y = this.canvas_process.height - squareSize;
        }


        return {
            x,
            y,
            width: squareSize,
            height: squareSize
        }


    }




    async takePicture() {

        if (!this.video) {
            console.error('No video');
            return;
        }

        if (!this.canvas_process) {
            console.error('No canvas process');
            return;
        }


        const ctx = this.canvas_process.getContext('2d');

        if (!ctx) {
            console.error('No ctx');
            return;
        }

        ctx.drawImage(this.video, 0, 0, this.canvas_process.width, this.canvas_process.height);
        // this.video.pause();

        const imgData = this.canvas_process.toDataURL();

        return new Promise<string>((resolve, reject) => {
            resolve(imgData);
        });

    }


    async takePictureAndSlice() {
        
        
        if (!this.video) {
            console.error('No video');
            
            return new Promise<null>((resolve, reject) => {
                reject('No video');
            });
        }

        if (!this.canvas_process) {
            console.error('No canvas process');
            
            return new Promise<null>((resolve, reject) => {
                reject('No canvas process');
            });
        }


        let ctx = this.canvas_process.getContext('2d');

        if (!ctx) {
            console.error('No ctx');
            
            return new Promise<null>((resolve, reject) => {
                reject('No ctx');
            });
        }


        let boundingBox = await this.getBoundingBoxFromMousePos();

        if (!boundingBox) {
            console.error('No bounding box');

            return new Promise<null>((resolve, reject) => {
                reject('No bounding box');
            });

        }

        ctx.drawImage(this.video, 0, 0, this.canvas_process.width, this.canvas_process.height);


        // cut out the part, based on the bounding box

        let partCanvas = document.createElement('canvas');
        partCanvas.width = boundingBox.width;
        partCanvas.height = boundingBox.height;

        let partCtx = partCanvas.getContext('2d');

        if (!partCtx) {
            console.error('No part ctx');

            return new Promise<null>((resolve, reject) => {
                reject('No part ctx');
            });
        }

        partCtx.drawImage(this.canvas_process, boundingBox.x, boundingBox.y, boundingBox.width, boundingBox.height, 0, 0, boundingBox.width, boundingBox.height);

        let cutOut = {
            part: 'part',
            img: partCanvas.toDataURL()
        }

        console.log("cutOut", cutOut);

        return new Promise<CutoutRaw>((resolve, reject) => {
            resolve(cutOut);
        });
    }




    async takePictureAndProcess() {

        const image = await this.takePicture();

        if (!image) {
            console.error('No image');
            return new Promise<cutOut[]>((resolve, reject) => {
                reject('No image');
            }
            );
        }

        const cutouts = await this.processImage(image);

        console.log("cutouts", cutouts);



        return new Promise<cutOut[]>((resolve, reject) => {

            if (!cutouts || cutouts.length === 0) {
                reject([]);
            }
            else {
                resolve(cutouts);
            }

        });



    }





    async readAndDrawSegmented() {

        if (!this.video) {
            console.error('No video');
            return;
        }

        if (!this.canvas_process) {
            console.error('No canvas process');
            return;
        }

        if (!this.bodySegmenter) {
            console.error('No bodySegmenter');
            return;
        }

        const ctx = this.canvas_process.getContext('2d');

        if (!ctx) {
            console.error('No ctx');
            return;
        }

        ctx.drawImage(this.video, 0, 0, this.canvas_process.width, this.canvas_process.height);
        // const image = new Image();
        // image.src = this.canvas_process.toDataURL();

        // await new Promise((resolve) => {
        //     image.onload = resolve;
        // });

    }


    async processImage(image: string) {

        console.log("processImage");

        let cutouts: cutOut[] = [];

        let cutout = await this.drawMasksFromImgData(image);
            if (cutout) {
                cutouts.push(...cutout);
            }

        console.log("total cutouts", cutouts);

        return new Promise<cutOut[]>((resolve, reject) => {
            resolve(cutouts);
        });


    }

    async detectHumans(image: HTMLImageElement) {

        if (!this.cocoSsdModel) {
            console.error("cocoSsdModel is not loaded");
            return;
        }

        const predictions = await this.cocoSsdModel.detect(image, 50, 0.6);
        console.log("predictions", predictions);

        // filter only persons
        const persons = predictions.filter(prediction => prediction.class === 'person');

        if (this.drawCanvas) {
            this.drawBoundingBoxesFromObjectDetection(image, predictions);
        }

        return new Promise<cocoSsd.DetectedObject[]>((resolve, reject) => {
            resolve(persons);
        });

    }

    async drawBoundingBoxesFromObjectDetection(image: HTMLImageElement, predictions: cocoSsd.DetectedObject[]) {

        let canvas = document.createElement('canvas');
        canvas.width = image.width;
        canvas.height = image.height;

        let ctx = canvas.getContext('2d');

        if (!ctx) {
            console.error("ctx is null");
            return;
        }

        ctx.drawImage(image, 0, 0, image.width, image.height);

        predictions.forEach((prediction) => {
            const { bbox } = prediction;
            const [x, y, width, height] = bbox;
            ctx.beginPath();
            ctx.rect(x, y, width, height);


            if (prediction.class === 'person') {
                ctx.strokeStyle = 'green';
            }
            else {
                ctx.strokeStyle = 'red';
            }

            ctx.lineWidth = 2;
            ctx.stroke();


            // draw the label, with background
            ctx.beginPath();
            const textWidth = ctx.measureText(prediction.class).width;
            ctx.rect(x, y - 20, width, 20);
            ctx.fillStyle = 'black';
            ctx.fill();
            ctx.font = '16px Arial';
            ctx.fillStyle = 'white';
            ctx.fillText(`${prediction.class} (${Math.round(prediction.score * 100)}%)`, x, y - 10);
            ctx.fillStyle = 'black';
            ctx.fill();


            ctx.font = '16px Arial';
            ctx.fillStyle = 'white';
            ctx.fillText(`${prediction.class} (${Math.round(prediction.score * 100)}%)`, x, y - 10);

        });



    }


    async splitCanvasIntoPersons(image: HTMLImageElement, predictions: cocoSsd.DetectedObject[]) {


        const imgData: string[] = [];

        predictions.forEach((prediction, index) => {
            // Create a new canvas for each prediction
            let canvas = document.createElement('canvas');
            canvas.width = prediction.bbox[2];
            canvas.height = prediction.bbox[3];

            let ctx = canvas.getContext('2d');

            if (!ctx) {
                console.error('No ctx');
                return;
            }

            // Draw the prediction on the new canvas
            ctx.drawImage(
                image,
                prediction.bbox[0],
                prediction.bbox[1],
                prediction.bbox[2],
                prediction.bbox[3],
                0,
                0,
                prediction.bbox[2],
                prediction.bbox[3]
            );

            // Append the new canvas to the canvasses div
            // this.canvasses?.appendChild(canvas);

            imgData.push(canvas.toDataURL());

        });


        return new Promise<string[]>((resolve, reject) => {
            resolve(imgData);
        });

    }


    async getSegmentationFromImage(image: HTMLImageElement) {

        if (!this.bodySegmenter) {
            console.error("bodySegmenter is not loaded");
            return;
        }

        const segmentation = await this.bodySegmenter.segmentPeople(image);

        // console.log("segmentation", segmentation);

        return new Promise<Segmentation[]>((resolve, reject) => {
            resolve(segmentation);
        });

    }

    async drawMasksFromImgData(imgData: string) {


        const img = new Image();
        img.src = imgData;

        // await the image to load
        await new Promise(resolve => {
            img.onload = resolve;
        });

        const segmentation = await this.getSegmentationFromImage(img);

        if (!segmentation) {
            console.error("No segmentation");
            return;
        }


        let cutouts: cutOut[] = [];

        for (let i = 0; i < segmentation.length; i++) {

            const person = segmentation[i];

            // get the pixel data
            let pixels = await this.getPixelData(person);


            // based on the pixel data, I want to get the bounding box of each part
            let partBoundingBoxesRaw = await this.getBoundingBoxesRaw(pixels);

            // get the bounding boxes of the combinations
            let partBoundingBoxesCombinations = await this.getBoundingBoxesCombinations(pixels);

            // create a canvas for this person, append it to the canvasses div
            let personCanvas = document.createElement('canvas');
            personCanvas.width = img.width;
            personCanvas.height = img.height;


            // TODO: fix this
            // if(this.drawCanvas){
            //     // draw the mask on the canvas
            //     this.drawMaskOnCanvas(person, img, personCanvas);

            //     // draw the bounding box of the raw parts
            //     this.drawRawBoxes(img, partBoundingBoxesRaw);
            // await this.drawCombinedBoxes(img, partBoundingBoxesCombinations);
            // }

            // draw the bounding box of the combinations



            // extract the cutouts
            let cutout = await this.extractCutouts(img, partBoundingBoxesCombinations);
            if (cutout) {
                cutouts.push(...cutout);
            }

            // await this.extractCutoutsMasked(img, partBoundingBoxesCombinations, pixels);
        }

        console.log("cutouts", cutouts);
        this.cutouts.push(...cutouts);

        return new Promise<cutOut[]>((resolve, reject) => {
            resolve(cutouts);
        });

    }


    getPixelData = async (person: Segmentation) => {


        let rawImgData = (await person.mask.toImageData());
        const width = rawImgData.width;
        const height = rawImgData.height;
        const rawData = rawImgData.data;

        let pixels: Pixel[] = [];

        for (let i = 0; i < rawData.length; i += 4) {

            let pixel: Pixel = {
                x: (i / 4) % width,
                y: Math.floor((i / 4) / width),
                color: {
                    r: rawData[i],
                    g: rawData[i + 1],
                    b: rawData[i + 2],
                    a: rawData[i + 3]
                }
            }

            pixels.push(pixel);

        }

        return pixels;

    }


    getBoundingBoxesRaw = async (pixels: Pixel[]) => {

        // get the bounding box of the head
        // first get all the pixels that are part of the head
        // loop through the pixels and get the min and max x and y values
        // this will give me the bounding box of the head
        let partBoundingBoxesRaw = {};

        for (let part in labelTable) {
            let partPixels = pixels.filter(pixel => pixel.color.r === parseInt(part));

            if (partPixels.length > 0) {
                let minX = partPixels.reduce((acc, curr) => curr.x < acc ? curr.x : acc, partPixels[0].x);
                let maxX = partPixels.reduce((acc, curr) => curr.x > acc ? curr.x : acc, partPixels[0].x);

                let minY = partPixels.reduce((acc, curr) => curr.y < acc ? curr.y : acc, partPixels[0].y);
                let maxY = partPixels.reduce((acc, curr) => curr.y > acc ? curr.y : acc, partPixels[0].y);

                // @ts-ignore due to the labelTable
                partBoundingBoxesRaw[labelTable[part]] = { minX, maxX, minY, maxY };
            }
        }


        console.log('Raw part bounding boxes:', partBoundingBoxesRaw);

        return partBoundingBoxesRaw;

    }


    getBoundingBoxesCombinations = async (pixels: Pixel[]) => {

        let partBoundingBoxesCombinations = {};

        for (let part in labelTableCombinations) {
            let partPixels = pixels.filter(pixel => labelTableCombinations[part].includes(pixel.color.r));

            if (partPixels.length > 0) {
                let minX = partPixels.reduce((acc, curr) => curr.x < acc ? curr.x : acc, partPixels[0].x);
                let maxX = partPixels.reduce((acc, curr) => curr.x > acc ? curr.x : acc, partPixels[0].x);

                let minY = partPixels.reduce((acc, curr) => curr.y < acc ? curr.y : acc, partPixels[0].y);
                let maxY = partPixels.reduce((acc, curr) => curr.y > acc ? curr.y : acc, partPixels[0].y);

                partBoundingBoxesCombinations[part] = { minX, maxX, minY, maxY, pixels: partPixels };
            }
        }

        // console.log(
        //     'Combinations part bounding boxes:',
        //     partBoundingBoxesCombinations);

        return partBoundingBoxesCombinations;

    }


    drawMaskOnCanvas = async (person: Segmentation, image: HTMLImageElement, canvas: HTMLCanvasElement) => {

        // The colored part image is an rgb image with a corresponding color from the
        // rainbow colors for each part at each pixel, and white pixels where there is
        // no part.
        const coloredPartImage = await bodySegmentation.toColoredMask(person, bodySegmentation.bodyPixMaskValueToRainbowColor, { r: 255, g: 255, b: 255, a: 0 });
        const opacity = 1;
        const flipHorizontal = false;
        const maskBlurAmount = 0;
        const pixelCellWidth = 4.0;


        // Draw the pixelated colored part image on top of the original image onto a
        // canvas.  Each pixel cell's width will be set to 10 px. The pixelated colored
        // part image will be drawn semi-transparent, with an opacity of 0.7, allowing
        // for the original image to be visible under.
        // await bodySegmentation.drawPixelatedMask(
        //   canvas, img, coloredPartImage, opacity, maskBlurAmount,
        //   flipHorizontal, pixelCellWidth);

        // clear the canvas

        // remove the canvas from the dom
        await bodySegmentation.drawMask(canvas, image, coloredPartImage, opacity, maskBlurAmount, flipHorizontal);

    }

    drawRawBoxes = async (img: HTMLImageElement, partBoundingBoxesRaw: HTMLCanvasElement) => {


        // create a canvas only for the image
        // append it to the canvasses div
        let imgCanvas = document.createElement('canvas');

        if (!imgCanvas) {
            console.error('No img canvas');
            return;
        }

        imgCanvas.width = img.width;
        imgCanvas.height = img.height;

        let imgCtx = imgCanvas.getContext('2d');

        if (!imgCtx) {
            console.error('No img ctx');
            return;
        }

        imgCtx.drawImage(img, 0, 0, img.width, img.height);

        // draw the bounding box of the combinations
        imgCtx.strokeStyle = 'red';
        imgCtx.lineWidth = 2;

        for (let part in partBoundingBoxesRaw) {
            let { minX, maxX, minY, maxY } = partBoundingBoxesRaw[part];
            imgCtx.strokeRect(minX, minY, maxX - minX, maxY - minY);
        }



    }

    drawCombinedBoxes = async (img: HTMLImageElement, partBoundingBoxesCombinations: any) => {


        // create a canvas only for the image
        // append it to the canvasses div
        let imgCanvas = document.createElement('canvas');

        if (!imgCanvas) {
            console.error('No img canvas');
            return;
        }

        imgCanvas.width = img.width;
        imgCanvas.height = img.height;

        let imgCtx = imgCanvas.getContext('2d');

        if (!imgCtx) {
            console.error('No img ctx');
            return;
        }

        imgCtx.drawImage(img, 0, 0, img.width, img.height);

        // draw the bounding box of the combinations
        imgCtx.strokeStyle = 'green';
        imgCtx.lineWidth = 2;

        for (let part in partBoundingBoxesCombinations) {
            let { minX, maxX, minY, maxY } = partBoundingBoxesCombinations[part];
            imgCtx.strokeRect(minX, minY, maxX - minX, maxY - minY);
        }

    }



    extractCutouts = async (img: any, partBoundingBoxesCombinations: any) => {


        // create a canvas only for the image
        // append it to the canvasses div
        let imgCanvas = document.createElement('canvas');

        if (!imgCanvas) {
            console.error('No img canvas');
            return;
        }

        imgCanvas.width = img.width;
        imgCanvas.height = img.height;

        let imgCtx = imgCanvas.getContext('2d');

        if (!imgCtx) {
            console.error('No img ctx');
            return;
        }

        imgCtx.drawImage(img, 0, 0, img.width, img.height);


        // cut out all partBoundingBoxesCombinations
        // add them as an image to the dom as img tags

        let cutouts: cutOut[] = [];

        for (let part in partBoundingBoxesCombinations) {
            let { minX, maxX, minY, maxY } = partBoundingBoxesCombinations[part];

            let imgCanvas = document.createElement('canvas');
            imgCanvas.width = maxX - minX;
            imgCanvas.height = maxY - minY;

            let partCtx = imgCanvas.getContext('2d');
            if (!partCtx) {
                console.error('No part ctx');
                return;
            }
            partCtx.drawImage(img, minX, minY, maxX - minX, maxY - minY, 0, 0, maxX - minX, maxY - minY);




            let cutOut = {
                part,
                img: imgCanvas.toDataURL()
            }


            cutouts.push(cutOut);

            // let partImg = document.createElement('img');
            // partImg.src = partCanvas.toDataURL();
            // document.body.appendChild(partImg);

        }

        console.log("cutouts", cutouts);
        return cutouts;

    }



    //   extractCutoutsMasked = async (img: any, partBoundingBoxesCombinations: any, pixels: Pixel[]) => {


    //     // create a canvas only for the image
    //     // append it to the canvasses div
    //     let imgCanvas = document.createElement('canvas');

    //     if (!imgCanvas) {
    //       console.error('No img canvas');
    //       return;
    //     }

    //     imgCanvas.width = img.width;
    //     imgCanvas.height = img.height;
    //     canvasses.value?.appendChild(imgCanvas);

    //     let imgCtx = imgCanvas.getContext('2d');

    //     if (!imgCtx) {
    //       console.error('No img ctx');
    //       return;
    //     }

    //     imgCanvas.setAttribute('willReadFrequently', '');

    //     const PixelParts = Object.keys(partBoundingBoxesCombinations).map(part => {
    //       return {
    //         part,
    //         pixels: partBoundingBoxesCombinations[part].pixels
    //       }
    //     });

    //     console.log('PixelParts', PixelParts);

    //     // make a copy in a canvas of the original image for data extraction
    //     const imgCanvasCopy = document.createElement('canvas');
    //     imgCanvasCopy.width = img.width;
    //     imgCanvasCopy.height = img.height;
    //     const imgCtxCopy = imgCanvasCopy.getContext('2d');
    //     if (!imgCtxCopy) {
    //       console.error('No img ctx copy');
    //       return;
    //     }

    //     imgCtxCopy.drawImage(img, 0, 0, img.width, img.height);


    //     PixelParts.forEach(part => {

    //       // imgCtx.drawImage(img, 0, 0, img.width, img.height);
    //       // clear the canvas to be able to draw the next part
    //       imgCtx.clearRect(0, 0, img.width, img.height);

    //       for (let pixel of part.pixels) {

    //         let correctValues = labelTableCombinations[part.part];

    //         // if the r value is in the correct values, then it's part of the part
    //         if (correctValues.includes(pixel.color.r)) {
    //           const originalPixel = imgCtxCopy.getImageData(pixel.x, pixel.y, 1, 1);
    //           pixel.color.r = originalPixel.data[0];
    //           pixel.color.g = originalPixel.data[1];
    //           pixel.color.b = originalPixel.data[2];
    //           pixel.color.a = 255;

    //         }
    //         else {
    //           pixel.color.r = 0;
    //           pixel.color.g = 0;
    //           pixel.color.b = 0;
    //           pixel.color.a = 0;
    //         }

    //         let imgData = imgCtx.getImageData(pixel.x, pixel.y, 1, 1);
    //         imgData.data[0] = pixel.color.r;
    //         imgData.data[1] = pixel.color.g;
    //         imgData.data[2] = pixel.color.b;
    //         imgData.data[3] = pixel.color.a;


    //         imgCtx.putImageData(imgData, pixel.x, pixel.y);
    //       }


    //       let { minX, maxX, minY, maxY } = partBoundingBoxesCombinations[part.part];

    //       // draw the bounding box of the current part
    //       // imgCtx.strokeStyle = 'green';
    //       // imgCtx.lineWidth = 2;
    //       // imgCtx.strokeRect(minX, minY, maxX - minX, maxY - minY);

    //       // cut out the part, based on the bounding box
    //       // make sure to keep the transparency

    //       let partCanvas = document.createElement('canvas');
    //       partCanvas.width = maxX - minX;
    //       partCanvas.height = maxY - minY;

    //       let partCtx = partCanvas.getContext('2d');
    //       if (!partCtx) {
    //         console.error('No part ctx');
    //         return;
    //       }

    //       partCtx.drawImage(imgCanvas, minX, minY, maxX - minX, maxY - minY, 0, 0, maxX - minX, maxY - minY);

    //       cutouts.value.push(partCanvas.toDataURL());


    //     });

    //   }





}