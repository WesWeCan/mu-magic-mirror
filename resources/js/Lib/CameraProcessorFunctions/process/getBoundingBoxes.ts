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
        const keypoints3D = pose.keypoints3D || [];
        const boundingBox = getBoundingBox(context, keypoints, keypoints3D, input);
    }

}

export const getBoundingBox = async (context: CameraProcessor, keypoints: poseDetection.Keypoint[], keypoints3D: poseDetection.Keypoint[], input: PixelInput) => {    

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

        const partPoints: poseDetection.Keypoint[] = [];
        const partPoints3D: poseDetection.Keypoint[] = [];

        for (const part of blazePosePoseBodyParts[blazePoseLabel]) {
            partPoints.push(keypoints[part]);
            partPoints3D.push(keypoints3D[part]);
        }

        const partMinX = Math.min(...partPoints.map(point => point.x));
        const partMinY = Math.min(...partPoints.map(point => point.y));
        const partMaxX = Math.max(...partPoints.map(point => point.x));
        const partMaxY = Math.max(...partPoints.map(point => point.y));

        const partWidth = partMaxX - partMinX;
        const partHeight = partMaxY - partMinY;

        const boundingBox = { x: partMinX, y: partMinY, width: partWidth, height: partHeight, keypoints: partPoints, keypoints3D: partPoints3D, label: `${blazePoseLabel}_pose` };

        context.boundingBoxes.push(boundingBox);

        continue;

        // ----------------------------

        // Bounding Box based on BodyPix mask

        // let partBoundingBox = {
        //     x: -1,
        //     y: -1,
        //     width: -1,
        //     height: -1
        // }

        // const bodyPixLabel = label as keyof typeof bodyPixCombination;
        // let partPixels = pixels.filter(pixel => (bodyPixCombination[bodyPixLabel].includes(pixel.color.r)));

        // partBoundingBox.x = Math.min(...partPixels.map(pixel => pixel.x));
        // partBoundingBox.y = Math.min(...partPixels.map(pixel => pixel.y));
        // partBoundingBox.width = Math.max(...partPixels.map(pixel => pixel.x)) - partBoundingBox.x;
        // partBoundingBox.height = Math.max(...partPixels.map(pixel => pixel.y)) - partBoundingBox.y;

        // const maskBoundingBox = { x: partBoundingBox.x, y: partBoundingBox.y, width: partBoundingBox.width, height: partBoundingBox.height, label: `${blazePoseLabel}_mask` };

        // context.boundingBoxes.push(maskBoundingBox);


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



export const processBoundingBoxes = async (context: CameraProcessor) => {

    context.boundingBoxesProcessed = [];
    
    const head_pose = context.boundingBoxes.find(boundingBox => boundingBox.label === 'head_pose');
    const torso_pose = context.boundingBoxes.find(boundingBox => boundingBox.label === 'torso_pose');
    const right_arm_pose = context.boundingBoxes.find(boundingBox => boundingBox.label === 'right_arm_pose');
    const left_arm_pose = context.boundingBoxes.find(boundingBox => boundingBox.label === 'left_arm_pose');
    const right_leg_pose = context.boundingBoxes.find(boundingBox => boundingBox.label === 'right_leg_pose');
    const left_leg_pose = context.boundingBoxes.find(boundingBox => boundingBox.label === 'left_leg_pose');
    const right_hand_pose = context.boundingBoxes.find(boundingBox => boundingBox.label === 'right_hand_pose');
    const left_hand_pose = context.boundingBoxes.find(boundingBox => boundingBox.label === 'left_hand_pose');
    const right_foot_pose = context.boundingBoxes.find(boundingBox => boundingBox.label === 'right_foot_pose');
    const left_foot_pose = context.boundingBoxes.find(boundingBox => boundingBox.label === 'left_foot_pose');

    // check if all are not undefined
    if (!head_pose || !torso_pose || !right_arm_pose || !left_arm_pose || !right_leg_pose || !left_leg_pose || !right_hand_pose || !left_hand_pose || !right_foot_pose || !left_foot_pose) {
        console.error('Some bounding boxes are undefined');
        return;
    }


    // Head
    // Estimate the size of the head based on the torso
    const head_width = torso_pose.width * 0.75;
    const head_height = head_width * 1.15;

    const head_x = head_pose.x - (head_width - head_pose.width) / 2;
    const head_y = head_pose.y - (head_height - head_pose.height) / 2;

   

    const head_processed = { x: head_x, y: head_y, width: head_width, height: head_height, keypoints: head_pose.keypoints, keypoints3D: head_pose.keypoints3D, label: 'head_processed' };
     
    context.boundingBoxesProcessed.push(head_processed);


    // Torso
    const torso_width = head_height * 1.65;
    const torso_height = torso_pose.height * 1.25;

    const torso_x = torso_pose.x - (torso_width - torso_pose.width) / 2;
    const torso_y = torso_pose.y - (torso_height - torso_pose.height) / 2;

    const torso_processed = { x: torso_x, y: torso_y, width: torso_width, height: torso_height, keypoints: torso_pose.keypoints, keypoints3D: torso_pose.keypoints3D, label: 'torso_processed' };

    context.boundingBoxesProcessed.push(torso_processed);


    // Right Arm

    const keypoints_right_arm_shoulder = right_arm_pose.keypoints.find(keypoint => keypoint.name === 'right_shoulder');
    const keypoints_right_arm_elbow = right_arm_pose.keypoints.find(keypoint => keypoint.name === 'right_elbow');
    const keypoints_right_arm_wrist = right_arm_pose.keypoints.find(keypoint => keypoint.name === 'right_wrist');
    const keypoints_right_arm_thumb = right_arm_pose.keypoints.find(keypoint => keypoint.name === 'right_thumb');

    const right_arm_width = right_arm_pose.width * 1.45;
    
    // Calculate the height of the arm based on the distance between shoulder, elbow, and wrist keypoints
    const right_arm_height = Math.abs(keypoints_right_arm_shoulder.y - keypoints_right_arm_elbow.y) +
        Math.abs(keypoints_right_arm_elbow.y - keypoints_right_arm_wrist.y) * 1.35;

    const right_arm_x = right_arm_pose.x - (right_arm_width - right_arm_pose.width) / 2;
    const right_arm_y = right_arm_pose.y - (right_arm_height - right_arm_pose.height) / 2;



    const right_arm_processed = { x: right_arm_x, y: right_arm_y, width: right_arm_width, height: right_arm_height, keypoints: right_arm_pose.keypoints, keypoints3D: right_arm_pose.keypoints3D, label: 'right_arm_processed' };

    context.boundingBoxesProcessed.push(right_arm_processed);


    // Left Arm
    const keypoints_left_arm_shoulder = left_arm_pose.keypoints.find(keypoint => keypoint.name === 'left_shoulder');
    const keypoints_left_arm_elbow = left_arm_pose.keypoints.find(keypoint => keypoint.name === 'left_elbow');
    const keypoints_left_arm_wrist = left_arm_pose.keypoints.find(keypoint => keypoint.name === 'left_wrist');
    const keypoints_left_arm_thumb = left_arm_pose.keypoints.find(keypoint => keypoint.name === 'left_thumb');
    
    const left_arm_width = left_arm_pose.width * 1.45;

    // Calculate the height of the arm based on the distance between shoulder, elbow, and wrist keypoints
    const left_arm_height = Math.abs(keypoints_left_arm_shoulder.y - keypoints_left_arm_elbow.y) +
        Math.abs(keypoints_left_arm_elbow.y - keypoints_left_arm_wrist.y) * 1.35;

    const left_arm_x = left_arm_pose.x - (left_arm_width - left_arm_pose.width) / 2;
    const left_arm_y = left_arm_pose.y - (left_arm_height - left_arm_pose.height) / 2;

    const left_arm_processed = { x: left_arm_x, y: left_arm_y, width: left_arm_width, height: left_arm_height, keypoints: left_arm_pose.keypoints,
        keypoints3D: left_arm_pose.keypoints3D,
        label: 'left_arm_processed' };

    context.boundingBoxesProcessed.push(left_arm_processed);


    // Right hand
    const right_hand_width = right_hand_pose.width * 3;
    const right_hand_height = right_hand_pose.height * 1.5;

    const right_hand_x = right_hand_pose.x - (right_hand_width - right_hand_pose.width) / 2;
    const right_hand_y = right_hand_pose.y - (right_hand_height - right_hand_pose.height) / 2;

    const right_hand_processed = { x: right_hand_x, y: right_hand_y, width: right_hand_width, height: right_hand_height, keypoints: right_hand_pose.keypoints, 
        keypoints3D: right_hand_pose.keypoints3D,
        label: 'right_hand_processed' };

    context.boundingBoxesProcessed.push(right_hand_processed);


    // Left hand
    const left_hand_width = left_hand_pose.width * 3;
    const left_hand_height = left_hand_pose.height * 1.5;

    const left_hand_x = left_hand_pose.x - (left_hand_width - left_hand_pose.width) / 2;
    const left_hand_y = left_hand_pose.y - (left_hand_height - left_hand_pose.height) / 2;

    const left_hand_processed = { x: left_hand_x, y: left_hand_y, width: left_hand_width, height: left_hand_height, keypoints: left_hand_pose.keypoints,
        keypoints3D: left_hand_pose.keypoints3D,
        label: 'left_hand_processed' };

    context.boundingBoxesProcessed.push(left_hand_processed);

    // right leg
    
    const keypoints_right_leg_hip = right_leg_pose.keypoints.find(keypoint => keypoint.name === 'right_hip');
    const keypoints_right_leg_knee = right_leg_pose.keypoints.find(keypoint => keypoint.name === 'right_knee');
    const keypoints_right_leg_ankle = right_leg_pose.keypoints.find(keypoint => keypoint.name === 'right_ankle');
    const keypoints_right_leg_foot_index = right_leg_pose.keypoints.find(keypoint => keypoint.name === 'right_foot_index');

    const right_leg_width = right_leg_pose.width * 1.35;
    const right_leg_height = Math.abs(keypoints_right_leg_hip.y - keypoints_right_leg_knee.y) + Math.abs(keypoints_right_leg_knee.y - keypoints_right_leg_ankle.y) * 1.35;

    const right_leg_x = right_leg_pose.x - (right_leg_width - right_leg_pose.width) / 2;
    const right_leg_y = right_leg_pose.y - (right_leg_height - right_leg_pose.height) / 2;

    const right_leg_processed = { x: right_leg_x, y: right_leg_y, width: right_leg_width, height: right_leg_height, keypoints: right_leg_pose.keypoints,
            keypoints3D: right_leg_pose.keypoints3D,
        label: 'right_leg_processed' };

    context.boundingBoxesProcessed.push(right_leg_processed);


    // left leg
    const keypoints_left_leg_hip = left_leg_pose.keypoints.find(keypoint => keypoint.name === 'left_hip');
    const keypoints_left_leg_knee = left_leg_pose.keypoints.find(keypoint => keypoint.name === 'left_knee');
    const keypoints_left_leg_ankle = left_leg_pose.keypoints.find(keypoint => keypoint.name === 'left_ankle');
    const keypoints_left_leg_foot_index = left_leg_pose.keypoints.find(keypoint => keypoint.name === 'left_foot_index');

    const left_leg_width = left_leg_pose.width * 1.35;
    const left_leg_height = Math.abs(keypoints_left_leg_hip.y - keypoints_left_leg_knee.y) + Math.abs(keypoints_left_leg_knee.y - keypoints_left_leg_ankle.y) * 1.35;

    const left_leg_x = left_leg_pose.x - (left_leg_width - left_leg_pose.width) / 2;
    const left_leg_y = left_leg_pose.y - (left_leg_height - left_leg_pose.height) / 2;

    const left_leg_processed = { x: left_leg_x, y: left_leg_y, width: left_leg_width, height: left_leg_height, keypoints: left_leg_pose.keypoints,
        keypoints3D: left_leg_pose.keypoints3D,
        label: 'left_leg_processed' };

    context.boundingBoxesProcessed.push(left_leg_processed);



    // right foot
    const right_foot_width = right_foot_pose.width * 1.5;
    const right_foot_height = right_foot_pose.height * 1.5;

    const right_foot_x = right_foot_pose.x - (right_foot_width - right_foot_pose.width) / 2;
    const right_foot_y = right_foot_pose.y - (right_foot_height - right_foot_pose.height) / 2;

    const right_foot_processed = { x: right_foot_x, y: right_foot_y, width: right_foot_width, height: right_foot_height, keypoints: right_foot_pose.keypoints,
        keypoints3D: right_foot_pose.keypoints3D,
        label: 'right_foot_processed' };

    context.boundingBoxesProcessed.push(right_foot_processed);

    // left foot
    const left_foot_width = left_foot_pose.width * 1.5;
    const left_foot_height = left_foot_pose.height * 1.5;

    const left_foot_x = left_foot_pose.x - (left_foot_width - left_foot_pose.width) / 2;
    const left_foot_y = left_foot_pose.y - (left_foot_height - left_foot_pose.height) / 2;

    const left_foot_processed = { x: left_foot_x, y: left_foot_y, width: left_foot_width, height: left_foot_height, keypoints: left_foot_pose.keypoints,
        keypoints3D: left_foot_pose.keypoints3D,
        label: 'left_foot_processed' };

    context.boundingBoxesProcessed.push(left_foot_processed);



}