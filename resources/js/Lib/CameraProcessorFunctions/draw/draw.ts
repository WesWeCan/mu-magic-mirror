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

    if ((context.inferenceData.poses?.length ?? 0) > 0) {
        await drawSheet(context, .93);
        await drawMorph(context);
    }
    else {
        await drawSheet(context, .75);
        drawNoPosesDetected(context);
    }
}




const drawSheet = async (context: CameraProcessor, opacity: number) => {

    if(context.running === false) {
        opacity = 1;
    }


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


const drawNoPosesDetected = async (context: CameraProcessor) => {

    const ctx_process = context.canvas_process?.getContext('2d');
    if (!ctx_process) {
        console.error('No context');
        return;
    }

    if (!context.canvas_process) {
        console.error('No canvas');
        return;
    }

    let fontSize = 9 * (context.resolutionScaling);
    ctx_process.font = `${fontSize}px Arial`;
    ctx_process.fillStyle = 'blue';

    const text = '[I do not see you]';
    const textWidth = ctx_process.measureText(text).width;
    const x = (context.canvas_process.width - textWidth) / 2;
    const y = context.canvas_process.height / 2;
    ctx_process.fillText(text, x, y);

}