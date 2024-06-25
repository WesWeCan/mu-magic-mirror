
import { CameraProcessor } from '@/Lib/CameraProcessor';
import * as poseDetection from '@tensorflow-models/pose-detection';


/**
 * Draw the keypoints on the canvas.
 * 
 * @param {CameraProcessor} context - The camera processor.
 * @param {CanvasRenderingContext2D} ctx - The canvas rendering context.
 * @param {poseDetection.Keypoint[]} keypoints - The keypoints.
 * @returns {Promise<void>}
 */
export const drawKeypoints = async (context: CameraProcessor, ctx: CanvasRenderingContext2D, keypoints: poseDetection.Keypoint[]) => {

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
        drawKeypoint(context, ctx, keypoints[i]);
    }

    ctx.fillStyle = 'Green';
    for (const i of keypointInd.left) {
        ctx.strokeStyle = (keypoints[i].score ?? 0 >= .5) ? 'rgba(0,255,0,1)' : 'rgba(0,0,255)';
        drawKeypoint(context, ctx, keypoints[i]);
    }

    ctx.fillStyle = 'Orange';
    for (const i of keypointInd.right) {
        ctx.strokeStyle = (keypoints[i].score ?? 0 >= .5) ? 'rgba(0,255,0,1)' : 'rgba(0,0,255)';
        drawKeypoint(context, ctx, keypoints[i]);
    }

}

/**
 * Draw a keypoint on the canvas.
 * 
 * @param {CameraProcessor} context - The camera processor.
 * @param {CanvasRenderingContext2D} ctx - The canvas rendering context.
 * @param {poseDetection.Keypoint} keypoint - The keypoint.
 * @returns {Promise<void>}
 */
export const drawKeypoint = async (context: CameraProcessor, ctx: CanvasRenderingContext2D, keypoint: poseDetection.Keypoint) => {
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