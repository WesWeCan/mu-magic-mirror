import { CameraProcessor } from "@/Lib/CameraProcessor";

import * as bodySegmentation from '@tensorflow-models/body-segmentation';
import * as poseDetection from '@tensorflow-models/pose-detection';
import * as cocoSsd from '@tensorflow-models/coco-ssd';
// Register WebGL backend.
import '@tensorflow/tfjs-backend-webgl';
import * as tf from '@tensorflow/tfjs';
import '@tensorflow/tfjs-backend-webgl';





export const setupInferences = async (context: CameraProcessor) => {

    await tf.ready();
    console.log('Tensorflow ready');

    console.log('Setting up inferences')

    console.log(cv.getBuildInformation());




    // COCO-SSD
    context.inference.cocoSsd = undefined;
    const modelConfig : cocoSsd.ModelConfig = {
        base: 'lite_mobilenet_v2',
        modelUrl: undefined,
    }
    const cocoSsdModel = await cocoSsd.load(modelConfig);
    context.inference.cocoSsd = cocoSsdModel;
    console.log('CocoSsd ready');



    // Selfie Segmentation
    context.inference.selfieSegmentation = undefined;
    const selfieSegmenterConfig : bodySegmentation.MediaPipeSelfieSegmentationMediaPipeModelConfig = {
        runtime: 'mediapipe',
        solutionPath: 'https://cdn.jsdelivr.net/npm/@mediapipe/selfie_segmentation'
    }
    const selfieSegmentation = await bodySegmentation.createSegmenter(bodySegmentation.SupportedModels.MediaPipeSelfieSegmentation, selfieSegmenterConfig);
    context.inference.selfieSegmentation = selfieSegmentation;
    console.log('SelfieSegmentation ready');




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