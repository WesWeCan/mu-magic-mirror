import { CameraProcessor } from "@/Lib/CameraProcessor";

import { PixelInput, Segmentation } from '@tensorflow-models/body-segmentation/dist/shared/calculators/interfaces/common_interfaces';
import { blazePosePoseBodyParts, blazePosePoseLandmarks, bodyPixCombination, bodyPixRedValue } from '../../Tables';
import { Pixel } from '@/types';

import * as poseDetection from '@tensorflow-models/pose-detection';
import * as cocoSsd from '@tensorflow-models/coco-ssd';


export const getBoundingBoxes = async (context: CameraProcessor, poses: poseDetection.Pose[], input: PixelInput) => {


    // from the poses, get the bounding boxes based on the coloredPartImage

    const boundingBoxes: { x: number, y: number, width: number, height: number, label: string }[] = [];

    for (const pose of poses) {
        const keypoints = pose.keypoints;
        const boundingBox = getBoundingBox(context, keypoints, input);
    }

}

export const getBoundingBox = async (context: CameraProcessor, keypoints: poseDetection.Keypoint[], input: PixelInput) => {    

    context.boundingBoxes = [];
    const pixels = context.inferenceData.pixels as Pixel[];

    let imageWidth = context.inferenceData.maskData?.width as number;
    let imageHeight = context.inferenceData.maskData?.height as number;

    const scalingFactor = 1.2;

    const labels = Object.keys(blazePosePoseBodyParts);


    // combine the keypoints with the detected Humans to determine the bounding boxes for the masks first
    // the bodypix mask is not able to differentiate single humans accurately. Therefore, we need to combine the masks

    for(let label of labels) {

        // General Bounding Box based on only keypoints

        const blazePoseLabel = label as keyof typeof blazePosePoseBodyParts;

        // const partPoints: poseDetection.Keypoint[] = [];

        // for (const part of blazePosePoseBodyParts[blazePoseLabel]) {
        //     partPoints.push(keypoints[part]);
        // }

        // const partMinX = Math.min(...partPoints.map(point => point.x));
        // const partMinY = Math.min(...partPoints.map(point => point.y));
        // const partMaxX = Math.max(...partPoints.map(point => point.x));
        // const partMaxY = Math.max(...partPoints.map(point => point.y));

        // const partWidth = partMaxX - partMinX;
        // const partHeight = partMaxY - partMinY;

        // const boundingBox = { x: partMinX, y: partMinY, width: partWidth, height: partHeight, label: `${blazePoseLabel}_pose` };

        // context.boundingBoxes.push(boundingBox);

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

        context.boundingBoxes.push(maskBoundingBox);


        // ----------------------------
        

        // EXAMPLE CODE FROM OPENCV
        // let src = cv.imread('canvasInput');
        // let dst = cv.Mat.zeros(src.rows, src.cols, cv.CV_8UC3);
        // cv.cvtColor(src, src, cv.COLOR_RGBA2GRAY, 0);
        // cv.threshold(src, src, 177, 200, cv.THRESH_BINARY);
        // let contours = new cv.MatVector();
        // let hierarchy = new cv.Mat();
        // cv.findContours(src, contours, hierarchy, cv.RETR_CCOMP, cv.CHAIN_APPROX_SIMPLE);
        // let cnt = contours.get(0);
        // // You can try more different parameters
        // let rect = cv.boundingRect(cnt);
        // let contoursColor = new cv.Scalar(255, 255, 255);
        // let rectangleColor = new cv.Scalar(255, 0, 0);
        // cv.drawContours(dst, contours, 0, contoursColor, 1, 8, hierarchy, 100);
        // let point1 = new cv.Point(rect.x, rect.y);
        // let point2 = new cv.Point(rect.x + rect.width, rect.y + rect.height);
        // cv.rectangle(dst, point1, point2, rectangleColor, 2, cv.LINE_AA, 0);
        // cv.imshow('canvasOutput', dst);
        // src.delete(); dst.delete(); contours.delete(); hierarchy.delete(); cnt.delete();


        // Based on the mask, get the bounding box of this label
        // first I probably have to make a binary image of the mask
        // then I can use the findContours method to get the bounding box

        // const mask = Array(imageHeight).fill(0).map(() => Array(imageWidth).fill(0));

        // for (let pixel of pixels) {
        //     if (bodyPixCombination[bodyPixLabel].includes(pixel.color.r)) {
        //         mask[pixel.y][pixel.x] = 1;
        //     }
        // }

        // const cvCanvas = document.createElement('canvas');
        // cvCanvas.width = imageWidth;
        // cvCanvas.height = imageHeight;

        // const cvContext = cvCanvas.getContext('2d');

        // if (!cvContext) {
        //     console.error('No context');
        //     return;
        // }

        // const cvImageData = cvContext.createImageData(imageWidth, imageHeight);

        // let data = cvImageData.data;

        // for (let i = 0; i < data.length; i += 4) {
        //     let x = (i / 4) % imageWidth;
        //     let y = Math.floor((i / 4) / imageWidth);

        //     let value = mask[y][x] * 255;

        //     data[i] = value;
        //     data[i + 1] = value;
        //     data[i + 2] = value;
        //     data[i + 3] = 255;
        // }

        // cvContext.putImageData(cvImageData, 0, 0);

        // let src = cv.imread(cvCanvas);
        
        
        // ----------------------------

        continue;

        // Bounding Box based on combined mask
        // let centerX = Math.floor((partBoundingBox.x + partBoundingBox.width / 2));
        // let centerY = Math.floor((partBoundingBox.y + partBoundingBox.height / 2));

        // if (centerX < 0) {
        //     centerX = 0;
        // }

        // if (centerX > imageWidth) {
        //     centerX = imageWidth;
        // }

        // if (centerY < 0) {
        //     centerY = 0;
        // }

        // if (centerY > imageHeight) {
        //     centerY = imageHeight;
        // }

        // // Initialize the boundaries to the center
        // let topY = centerY;
        // let bottomY = centerY;
        // let leftX = centerX;
        // let rightX = centerX;

        // // Create a 2D array for the mask
        // let mask = Array(imageHeight).fill(0).map(() => Array(imageWidth).fill(false));

        // // Fill the mask array based on the bodyPix mask
        // for (let pixel of pixels) {
        //     if (bodyPixCombination[bodyPixLabel].includes(pixel.color.r)) {
        //         mask[pixel.y][pixel.x] = true;
        //     }
        // }

        // // Raycast upwards
        // for (let y = centerY; y >= 0; y--) {
        //     if (mask[y][centerX]) {
        //         topY = y;
        //     } else {
        //         break;
        //     }
        // }

        // // Raycast downwards
        // for (let y = centerY; y < imageHeight; y++) {
        //     if (mask[y][centerX]) {
        //         bottomY = y;
        //     } else {
        //         break;
        //     }
        // }

        // // Raycast left
        // for (let x = centerX; x >= 0; x--) {
        //     if (mask[centerY][x]) {
        //         leftX = x;
        //     } else {
        //         break;
        //     }
        // }

        // // Raycast right
        // for (let x = centerX; x < imageWidth; x++) {
        //     if (mask[centerY][x]) {
        //         rightX = x;
        //     } else {
        //         break;
        //     }
        // }


        // const combinedMinX = leftX;
        // const combinedMinY = topY;
        // const combinedMaxX = rightX;
        // const combinedMaxY = bottomY;

        // const combinedWidth = combinedMaxX - combinedMinX;
        // const combinedHeight = combinedMaxY - combinedMinY;


        // // Include the scaling factor
        // const combinedBoundingBox = {
        //     x: combinedMinX - (combinedWidth * scalingFactor - combinedWidth) / 2,
        //     y: combinedMinY - (combinedHeight * scalingFactor - combinedHeight) / 2,
        //     width: combinedWidth * scalingFactor,
        //     height: combinedHeight * scalingFactor,
        //     label: `${bodyPixLabel}_combined`
        // };


        // context.boundingBoxes.push(combinedBoundingBox);



    };

}