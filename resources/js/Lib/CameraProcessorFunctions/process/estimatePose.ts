import { CameraProcessor } from "@/Lib/CameraProcessor";
import { PixelInput } from '@tensorflow-models/body-segmentation/dist/shared/calculators/interfaces/common_interfaces';

import * as poseDetection from '@tensorflow-models/pose-detection';


/**
 * Estimate the pose of the human in the image.
 * 
 * @param {CameraProcessor} context - The camera processor.
 * @param {PixelInput} input - The input image.
 * @returns {Promise<poseDetection.Pose[]>}
 */
export const estimatePose = async (context: CameraProcessor, input: PixelInput) => {
    if (!input || !context.inference.blazePose || !context.video) {
        console.error('No video or inference');
        return;
    }

    const estimationConfig :poseDetection.BlazePoseMediaPipeEstimationConfig = {
        flipHorizontal: false,
        maxPoses: 1, // in blaze pose, only single pose is supported
    }

    const timestamp = performance.now();
    const blazePose = context.inference.blazePose as poseDetection.PoseDetector;

    const poses = await blazePose.estimatePoses(context.video, estimationConfig, timestamp);


    const userUsesMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    if (userUsesMobile) {
        
        // shift all keypoints a bit to the left and down
        // base it on the width and height of the video

        if (!context.video) {
            console.error('No video');
            return;
        }

        const shiftLeft = (context.video?.videoWidth || 0) * .19;
        const shiftDown = (context.video?.videoHeight || 0) * .09;

        for (const pose of poses) {
            for (const keypoint of pose.keypoints) {
                keypoint.x -= shiftLeft;
                keypoint.y += shiftDown;
            }
        }
    }



    context.inferenceData.poses = poses;

    return poses;
}