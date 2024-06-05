import { CameraProcessor } from "@/Lib/CameraProcessor";
import { clearCanvas } from "./clearCanvas";
import { drawVideo } from "./drawVideo";
import { drawSegmentation } from "./drawSegmentation";
import { drawPose } from "./drawPose";
import { drawObjects } from "./drawObjects";
import { drawBoundingBoxes, drawBoundingBoxesProcessed } from "./drawBoundingboxes";
import { drawMorph } from "./drawMorph";



export const draw = async (context: CameraProcessor) => {
        // console.log('draw');
        await clearCanvas(context);
        await drawVideo(context);
        // await drawSegmentation(context);
        // await drawPose(context);
        // await drawObjects(context);
        // await drawBoundingBoxes(context);
        // await drawBoundingBoxesProcessed(context);
        await drawSheet(context, 1);
        await drawMorph(context);
}




const drawSheet = async (context : CameraProcessor, opacity : number) => {


    // draw a transparent white sheet over the canvas
    const ctx_process = context.canvas_process?.getContext('2d');
    if (!ctx_process) {
        console.error('No context');
        return;
    }

    if (!context.canvas_process) {
        console.error('No canvas');
        return;
    }

    ctx_process.fillStyle = `rgba(255, 255, 255, ${opacity})`;
    ctx_process.fillRect(0, 0, context.canvas_process.width, context.canvas_process.height);


}