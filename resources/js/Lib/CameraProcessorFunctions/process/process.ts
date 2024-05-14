import { CameraProcessor } from "@/Lib/CameraProcessor";
import { PixelInput } from '@tensorflow-models/body-segmentation/dist/shared/calculators/interfaces/common_interfaces';

import { detectHumans } from './detectHumans';
import { segmentBodyPix } from './segmentBodyPix';
import { estimatePose } from './estimatePose';
import { convertImageDataToPixels } from './convertImageDataToPixels';
import { getBoundingBoxes } from './getBoundingBoxes';



export const process = async (context: CameraProcessor, input: PixelInput) => {

    // console.log('process');

    // await detectHumans(context, input as ImageData | HTMLImageElement | HTMLCanvasElement | HTMLVideoElement);

    await segmentBodyPix(context, input);
    await estimatePose(context, input);
    await convertImageDataToPixels(context, context.inferenceData.maskData as ImageData);

    if (context.inferenceData.poses && context.inferenceData.coloredPartImage) {
        await getBoundingBoxes(context, context.inferenceData.poses, context.inferenceData.coloredPartImage);
    }


    // console.log(this.inferenceData);


}