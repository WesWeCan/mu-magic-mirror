import { CameraProcessor } from "@/Lib/CameraProcessor";
import * as tf from '@tensorflow/tfjs';


/**
 * Use the cocoSsd model to detect humans in the image.
 * 
 * @returns {Promise<cocoSsd.DetectedObject[]>}
 */
export const detectHumans = async (context: CameraProcessor, input: tf.Tensor3D | ImageData | HTMLImageElement |
    HTMLCanvasElement | HTMLVideoElement) => {


    if (!input || !context.inference.cocoSsd) {
        console.error('No video or inference');
        return;
    }


    const maxNumBoxes = 20;
    const minScore = 0.5;

    const predictions = await context.inference.cocoSsd.detect(input, maxNumBoxes, minScore);

    context.inferenceData.detectedOjects = predictions;

    const humans = predictions.filter((prediction) => {
        return prediction.class === 'person';
    });

    context.inferenceData.humans = humans;

    return humans;

    

}