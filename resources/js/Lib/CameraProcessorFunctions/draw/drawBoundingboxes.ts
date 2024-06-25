import { CameraProcessor } from "@/Lib/CameraProcessor";

/**
 * Draw the bounding boxes on the canvas.
 * Based on the labels, draw the bounding boxes in green for the poses and red for the human parts.
 * 
 * @param {CameraProcessor} context - The camera processor.
 * @returns {Promise<void>}
 */
export const drawBoundingBoxes = async (context: CameraProcessor) => {

    if (!context.canvas_process || !context.boundingBoxes) {
        console.error('No canvas or bounding boxes');
        return;
    }

    const canvas = context.canvas_process as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');

    if (!ctx) {
        console.error('No context');
        return;
    }

    for (const boundingBox of context.boundingBoxes) {
        ctx.beginPath();
        ctx.rect(boundingBox.x, boundingBox.y, boundingBox.width, boundingBox.height);
        ctx.strokeStyle = boundingBox.label.includes('_pose') ? 'green' : 'red';
        ctx.lineWidth = 5;
        ctx.stroke();

        ctx.font = '20px Arial';
        ctx.fillStyle = boundingBox.label.includes('_pose') ? 'green' : 'red';
        ctx.fillText(boundingBox.label, boundingBox.x, boundingBox.y - 10);

    }


}

/**
 * Draw the bounding boxes on the canvas for the processed image.
 * 
 * @param {CameraProcessor} context - The camera processor.
 * @returns {Promise<void>}
 */
export const drawBoundingBoxesProcessed = async (context: CameraProcessor) => {
    if (!context.canvas_process || !context.boundingBoxesProcessed) {
        console.error('No canvas or bounding boxes');
        return;
    }

    const canvas = context.canvas_process as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');

    if (!ctx) {
        console.error('No context');
        return;
    }

    for (const boundingBox of context.boundingBoxesProcessed) {
        ctx.beginPath();
        ctx.rect(boundingBox.x, boundingBox.y, boundingBox.width, boundingBox.height);
        ctx.strokeStyle = 'blue';
        ctx.lineWidth = 5;
        ctx.stroke();

        ctx.font = '20px Arial';
        ctx.fillStyle = 'blue';
        ctx.fillText(boundingBox.label, boundingBox.x, boundingBox.y - 10);

    }
}