import { CameraProcessor } from "@/Lib/CameraProcessor";

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