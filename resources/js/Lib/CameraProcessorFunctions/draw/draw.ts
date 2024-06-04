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
        // await drawVideo(context);
        // await drawSegmentation(context);
        // await drawPose(context);
        // await drawObjects(context);
        // await drawBoundingBoxes(context);
        // await drawBoundingBoxesProcessed(context);

        await drawMorph(context);
}