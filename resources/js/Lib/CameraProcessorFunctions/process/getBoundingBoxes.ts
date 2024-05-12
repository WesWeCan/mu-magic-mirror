import { CameraProcessor } from "@/Lib/CameraProcessor";

import { PixelInput, Segmentation } from '@tensorflow-models/body-segmentation/dist/shared/calculators/interfaces/common_interfaces';
import { blazePosePoseBodyParts, blazePosePoseLandmarks, bodyPixCombination, bodyPixRedValue } from '../../Tables';
import { Pixel } from '@/types';

import * as poseDetection from '@tensorflow-models/pose-detection';

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

        // context.boundingBoxes.push(maskBoundingBox);


       
        // ----------------------------


        // Bounding Box based on combined mask
        let centerX = Math.floor((partBoundingBox.x + partBoundingBox.width / 2));
        let centerY = Math.floor((partBoundingBox.y + partBoundingBox.height / 2));

        if (centerX < 0) {
            centerX = 0;
        }

        if (centerX > imageWidth) {
            centerX = imageWidth;
        }

        if (centerY < 0) {
            centerY = 0;
        }

        if (centerY > imageHeight) {
            centerY = imageHeight;
        }

        // Initialize the boundaries to the center
        let topY = centerY;
        let bottomY = centerY;
        let leftX = centerX;
        let rightX = centerX;

        // Create a 2D array for the mask
        let mask = Array(imageHeight).fill(0).map(() => Array(imageWidth).fill(false));

        // Fill the mask array based on the bodyPix mask
        for (let pixel of pixels) {
            if (bodyPixCombination[bodyPixLabel].includes(pixel.color.r)) {
                mask[pixel.y][pixel.x] = true;
            }
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


        context.boundingBoxes.push(combinedBoundingBox);



    };

}