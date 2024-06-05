import { CameraProcessor } from "@/Lib/CameraProcessor";




// NOTE: I am keeping the previous inference models commented out for now, so the CameraProcessor class can be easily reused if needed.

// import * as bodySegmentation from '@tensorflow-models/body-segmentation';
import * as poseDetection from '@tensorflow-models/pose-detection';
// import * as cocoSsd from '@tensorflow-models/coco-ssd';
// Register WebGL backend.
import '@tensorflow/tfjs-backend-webgl';
import * as tf from '@tensorflow/tfjs';

export const setupInferences = async (context: CameraProcessor) => {

    console.info('Setting up inferences')

    await tf.ready();
    console.info('Tensorflow ready');

    
    // // OpenCV
    // console.info(cv.getBuildInformation());


    // // COCO-SSD
    // context.inference.cocoSsd = undefined;
    // const modelConfig : cocoSsd.ModelConfig = {
    //     base: 'lite_mobilenet_v2',
    //     modelUrl: undefined,
    // }
    // const cocoSsdModel = await cocoSsd.load(modelConfig);
    // context.inference.cocoSsd = cocoSsdModel;
    // console.info('CocoSsd ready');



    // // Selfie Segmentation
    // context.inference.selfieSegmentation = undefined;
    // const selfieSegmenterConfig : bodySegmentation.MediaPipeSelfieSegmentationMediaPipeModelConfig = {
    //     runtime: 'mediapipe',
    //     solutionPath: 'https://cdn.jsdelivr.net/npm/@mediapipe/selfie_segmentation'
    // }
    // const selfieSegmentation = await bodySegmentation.createSegmenter(bodySegmentation.SupportedModels.MediaPipeSelfieSegmentation, selfieSegmenterConfig);
    // context.inference.selfieSegmentation = selfieSegmentation;
    // console.info('SelfieSegmentation ready');

    // // BodyPix Segmentation
    // context.inference.bodyPix = undefined;
    // const bodyPixSegmenter = await bodySegmentation.createSegmenter(bodySegmentation.SupportedModels.BodyPix);
    // context.inference.bodyPix = bodyPixSegmenter;
    // console.info('BodyPix ready');

    // BlazePose
    context.inference.blazePose = undefined;
    const detectorConfig = {
        runtime: 'tfjs',
        enableSmoothing: true,
        modelType: "lite",
    };
    const blazePose = await poseDetection.createDetector(poseDetection.SupportedModels.BlazePose, detectorConfig);
    context.inference.blazePose = blazePose;
    console.info('BlazePose ready');

}