import { CameraProcessor } from "@/Lib/CameraProcessor";
import * as poseDetection from '@tensorflow-models/pose-detection';
import { drawKeypoints } from "./drawKeypoints";
import { drawSkeleton } from "./drawSkeleton";

export const drawPose = async (context: CameraProcessor) => {


    if (!context.canvas_process || !context.inferenceData.poses) {
        console.error('No canvas or poses');
        return;
    }

    const canvas = context.canvas_process as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');

    if (!ctx) {
        console.error('No context');
        return;
    }

    const poses = context.inferenceData.poses as poseDetection.Pose[];

    if (poses.length > 0) {
        drawKeypoints(context, ctx, poses[0].keypoints);
        drawSkeleton(context, ctx, poses[0].keypoints, 0);
    }

}