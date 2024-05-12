
import { CameraProcessor } from '@/Lib/CameraProcessor';
import * as poseDetection from '@tensorflow-models/pose-detection';

export const drawSkeleton = async (context: CameraProcessor, ctx: CanvasRenderingContext2D, keypoints: poseDetection.Keypoint[], poseId: number) => {

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