import { CameraProcessor } from "@/Lib/CameraProcessor";

export const clearCanvas = async (context: CameraProcessor) => {
    if (!context.canvas_process) {
        console.error('No canvas');
        return;
    }

    const canvas = context.canvas_process as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');

    if (!ctx) {
        console.error('No context');
        return;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);


}