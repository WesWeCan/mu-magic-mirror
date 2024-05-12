import { CameraProcessor } from "@/Lib/CameraProcessor";
import { PixelInput } from '@tensorflow-models/body-segmentation/dist/shared/calculators/interfaces/common_interfaces';

import * as poseDetection from '@tensorflow-models/pose-detection';

export const estimatePose = async (context: CameraProcessor, input: PixelInput) => {
    if (!input || !context.inference.blazePose) {
        console.error('No video or inference');
        return;
    }

    const estimationConfig = {
        flipHorizontal: false,
    }

    const timestamp = performance.now();
    const blazePose = context.inference.blazePose as poseDetection.PoseDetector;

    const poses = await blazePose.estimatePoses(input, estimationConfig, timestamp);
    context.inferenceData.poses = poses;

    return poses;
}