import { CameraProcessor } from "@/Lib/CameraProcessor";

import * as bodySegmentation from '@tensorflow-models/body-segmentation';
import * as poseDetection from '@tensorflow-models/pose-detection';
import * as cocoSsd from '@tensorflow-models/coco-ssd';
// Register WebGL backend.
import '@tensorflow/tfjs-backend-webgl';
import * as tf from '@tensorflow/tfjs';

export const setupInferences = async (context: CameraProcessor) => {

    await tf.ready();
    console.log('Tensorflow ready');


    // COCO-SSD
    context.inference.cocoSsd = undefined;
    const modelConfig : cocoSsd.ModelConfig = {
        base: 'lite_mobilenet_v2',
        modelUrl: undefined,
    }
    const cocoSsdModel = await cocoSsd.load(modelConfig);
    context.inference.cocoSsd = cocoSsdModel;
    console.log('CocoSsd ready');



    // BodyPix Segmentation
    context.inference.bodyPix = undefined;
    const bodyPixSegmenter = await bodySegmentation.createSegmenter(bodySegmentation.SupportedModels.BodyPix);
    context.inference.bodyPix = bodyPixSegmenter;
    console.log('BodyPix ready');

    // BlazePose
    context.inference.blazePose = undefined;
    const detectorConfig = {
        runtime: 'tfjs',
        enableSmoothing: true,
        modelType: "full",
    };
    const blazePose = await poseDetection.createDetector(poseDetection.SupportedModels.BlazePose, detectorConfig);
    context.inference.blazePose = blazePose;
    console.log('BlazePose ready');

}