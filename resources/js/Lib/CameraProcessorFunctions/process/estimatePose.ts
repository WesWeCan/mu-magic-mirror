import { CameraProcessor } from "@/Lib/CameraProcessor";
import { PixelInput } from '@tensorflow-models/body-segmentation/dist/shared/calculators/interfaces/common_interfaces';

import * as poseDetection from '@tensorflow-models/pose-detection';

export const estimatePose = async (context: CameraProcessor, input: PixelInput) => {
    if (!input || !context.inference.blazePose) {
        console.error('No video or inference');
        return;
    }

    const estimationConfig :poseDetection.BlazePoseMediaPipeEstimationConfig = {
        flipHorizontal: false,
        maxPoses: 1, // in blaze pose, only single pose is supported
    }

    const timestamp = performance.now();
    const blazePose = context.inference.blazePose as poseDetection.PoseDetector;

    const poses = await blazePose.estimatePoses(input, estimationConfig, timestamp);

    // scale the poses based on the resolutionScaling
    poses.forEach(pose => {
        pose.keypoints.forEach(keypoint => {
            keypoint.x = keypoint.x * context.resolutionScaling;
            keypoint.y = keypoint.y * context.resolutionScaling;
        })
    });



    context.inferenceData.poses = poses;

    return poses;
}