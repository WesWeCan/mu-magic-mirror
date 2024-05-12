import { CameraProcessor } from "@/Lib/CameraProcessor";
import { PixelInput } from "@tensorflow-models/body-segmentation/dist/shared/calculators/interfaces/common_interfaces";
import * as bodySegmentation from '@tensorflow-models/body-segmentation';

export const segmentBodyPix = async (context: CameraProcessor, input: PixelInput) => {

    if (!input || !context.inference.bodyPix) {
        console.error('No video or inference');
        return;
    }

    const bodyPix = context.inference.bodyPix as bodySegmentation.BodySegmenter;

    const segmentationConfig: bodySegmentation.BodyPixSegmentationConfig = {
        multiSegmentation: false,
        segmentBodyParts: true,
        maxDetections: 1,
        // nmsRadius: 20,
    }

    const segmentation = await bodyPix.segmentPeople(input, segmentationConfig);

    context.inferenceData.bodyPixSegmentation = segmentation;

    const coloredPartImage = await bodySegmentation.toColoredMask(segmentation, bodySegmentation.bodyPixMaskValueToRainbowColor, { r: 255, g: 255, b: 255, a: 255 });

    context.inferenceData.coloredPartImage = coloredPartImage;
    context.inferenceData.maskData = await segmentation[0].mask.toImageData();

    return segmentation;
}