import { CameraProcessor } from "@/Lib/CameraProcessor";

/**
 * Draw the segmentation on the canvas.
 * 
 * @param {CameraProcessor} context - The camera processor.
 * @returns {Promise<void>}
 */
export const drawSegmentation = async (context: CameraProcessor) => {

    if (!context.canvas_process || !context.inferenceData.coloredPartImage) {
        return;
    }

    const canvas = context.canvas_process as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');

    if (!ctx) {
        console.error('No context');
        return;
    }

    const coloredPartImage = context.inferenceData.coloredPartImage as ImageData;

    ctx.putImageData(coloredPartImage, 0, 0);

}