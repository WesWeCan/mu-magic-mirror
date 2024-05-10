import * as tf from '@tensorflow/tfjs';
import * as poseDetection from '@tensorflow-models/pose-detection';
// import { COCOKeypoints, COCOKeypointsCombinations } from './Tables';



type DrawCorpse = {

    // part: "head" | "left_arm" | "right_arm" | "torso" | "left_leg" | "right_leg";
    part: string;
    imgUrl: string;

}



export class MagicMirror {

    tensorFlowBackend: "webgpu" | "cpu";

    model: poseDetection.SupportedModels = poseDetection.SupportedModels.MoveNet;

    detector: poseDetection.PoseDetector | null = null;

    detectorConfig: poseDetection.MoveNetModelConfig = {
        modelType: poseDetection.movenet.modelType.SINGLEPOSE_LIGHTNING,
        enableSmoothing: false,
        modelUrl: undefined,
        minPoseScore: undefined,
        enableTracking: true,
        trackerType: poseDetection.TrackerType.BoundingBox,
    };

    estimationConfig: poseDetection.MoveNetEstimationConfig = {
        maxPoses: 1,
        flipHorizontal: false
    };

    div_video: HTMLDivElement | null = null;
    video: HTMLVideoElement | null = null;



    div_process: HTMLDivElement | null = null;
    div_result: HTMLDivElement | null = null;

    canvas_process: HTMLCanvasElement | null = null;
    canvas_result: HTMLCanvasElement | null = null;



    corpse = {
        head: null,
        left_arm: null,
        right_arm: null,
        torso: null,
        left_leg: null,
        right_leg: null
    }


    constructor() {
        console.log('MagicMirror');

        this.tensorFlowBackend = "webgpu";

    }

    async init(videoDiv : HTMLDivElement, div_process : HTMLDivElement, div_result : HTMLDivElement) {
        console.log('MagicMirror init');

        await tf.setBackend(this.tensorFlowBackend);
        console.log('TensorFlow backend', tf.getBackend());

        
        await this.loadModel();
        console.log('Model loaded');

        await this.getMediaStream(videoDiv);
        console.log('Got media stream');


        await this.createCanvasses(div_process, div_result);
        console.log('Canvasses created');

        return new Promise((resolve) => {
            resolve(true);
        });

    }


    async loadCorpse(corpse : any){


        // head, left_arm, right_arm, torso, left_leg, right_leg

        Object.keys(corpse).forEach((key) => {
            console.log('key', key);
            console.log('value', corpse[key]);

            // load the image to a new Image object taht can be drawn on the canvas
            const img = new Image();
            img.src = corpse[key].path;

            this.corpse[key] = img;


        });

        console.log('Corpse loaded', this.corpse);

        return new Promise((resolve) => {
            resolve(true);
        });


    }




    async getMediaStream(videoDiv : HTMLDivElement) {

        if(!videoDiv){
            console.error('No video div');
            return;
        }

        this.div_video = videoDiv;

        const video = document.createElement('video');       
        video.width = 640;
        video.height = 480;

        video.muted = true;

        navigator.mediaDevices.getUserMedia({ video: true })
            .then((stream) => {
                video.srcObject = stream;
            });

        await new Promise((resolve) => {
            video.onloadedmetadata = () => {
                console.log('Video metadata loaded');
                resolve(true);
            };
        }        );

        video.play();



        if (!video) {
            console.error('No video');
            return;
        }

        videoDiv.appendChild(video);
        this.video = video;

        await new Promise((resolve) => {
            video.addEventListener('loadeddata', () => {
                console.log('Video loaded');
                resolve(true);
            });
        });
        
    


        return new Promise((resolve) => {
            resolve(true);
        });

    }






    async loadModel() {


        this.detector = await poseDetection.createDetector(
            this.model,
            this.detectorConfig
        );


        return new Promise((resolve) => {
            resolve(this.detector);
        });

    }


    async createCanvasses(div_process : HTMLDivElement, div_result : HTMLDivElement) {

        if(!div_process){
            console.error('No div process');
            return;
        }

        if(!div_result){
            console.error('No div result');
            return;
        }

        this.div_process = div_process;
        this.div_result = div_result;


        const canvas_process = document.createElement('canvas');
        canvas_process.id = 'canvas_process';
        canvas_process.width = 640;
        canvas_process.height = 480;

        this.canvas_process = canvas_process;

        const canvas_result = document.createElement('canvas');
        canvas_result.id = 'canvas_result';
        canvas_result.width = 640;
        canvas_result.height = 480;

        this.canvas_result = canvas_result;

        this.div_process.appendChild(canvas_process);
        this.div_result.appendChild(canvas_result);

        return new Promise((resolve) => {
            resolve(true);
        });


    }


    async readAndDrawPose() {

        // console.log('reading and drawing pose');

        if(!this.detector){
            console.error('No detector');
            return;
        }

        if(!this.video){
            console.error('No video');
            return;
        }

        // console.log('video', this.video);

        const poses = await this.detector.estimatePoses(this.video, this.estimationConfig);

        // console.log('poses', poses);

        if(!this.canvas_process){
            console.error('No canvas process');
            return;
        }

        if(this.canvas_process.width != this.video.width){
            this.canvas_process.width = this.video.width;
        }

        if(this.canvas_process.height != this.video.height){
            this.canvas_process.height = this.video.height;
        }

        const ctx = this.canvas_process.getContext('2d');

        if(!ctx){
            console.error('No context');
            return;
        }

        // draw the poses on the canvas

        // draw the current image
        ctx.drawImage(this.video, 0, 0, this.video.width, this.video.height);

        poses.forEach((pose) => {

            pose.keypoints.forEach((keypoint) => {
                const { x, y } = keypoint;
                ctx.beginPath();
                ctx.arc(x, y, 5, 0, 2 * Math.PI);
                ctx.fillStyle = 'red';
                ctx.fill();
            });

            this.drawLines(pose.keypoints, ctx);

            this.drawBoundingBoxes(pose.keypoints, ctx);

        });

        requestAnimationFrame(() => this.readAndDrawPose());


    }



    drawBoundingBoxes = (keypoints: poseDetection.Keypoint[], ctx: CanvasRenderingContext2D) => {

        // from the keypoints, get the bounding box
        // it can be that not all keypoints are visible

        if(!this.canvas_result){
            console.error('No canvas result');
            return;
        }

        const ctx_result = this.canvas_result.getContext('2d');

        if(!ctx_result){
            console.error('No context result');
            return;
        }

        ctx_result.clearRect(0, 0, this.canvas_result.width, this.canvas_result.height);


        // Draw other keypoint combinations
        const otherCombinations = Object.values(COCOKeypointsCombinations);

        otherCombinations.forEach((combination, index) => {
            const points = combination.map(point => keypoints[point]);
            const visiblePoints = points.filter(point => point.score > 0.1);
            if (visiblePoints.length > 0) {
                const boundingBox = this.getBoundingBox(visiblePoints);

                boundingBox.x -= 50;
                boundingBox.y -= 50;
                boundingBox.width += 75;
                boundingBox.height += 75;
                ctx.strokeStyle = 'blue';
                ctx.strokeRect(boundingBox.x, boundingBox.y, boundingBox.width, boundingBox.height);


                // draw the corpse part
                // just put the image on the canvas, do not stretch it

                // console.log('bounding box', boundingBox);

                // get the image
                const img = this.corpse[Object.keys(this.corpse)[index]];

                // calculate the width of the image
                const width = boundingBox.width;
                const height = img.height * (width / img.width);

                // draw the image
                // ctx.drawImage(img, boundingBox.x, boundingBox.y, width, height);


                // clear the result canvas

                
                // draw the image on the result canvas
                ctx_result.drawImage(img, boundingBox.x, boundingBox.y, width, height);
              


            }
        });


    }


    getBoundingBox = (points: poseDetection.Keypoint[]) => {

        const xValues = points.map((point) => {
            return point.x;
        });

        const yValues = points.map((point) => {
            return point.y;
        });

        const xMin = Math.min(...xValues);
        const xMax = Math.max(...xValues);

        const yMin = Math.min(...yValues);
        const yMax = Math.max(...yValues);

        return {
            x: xMin,
            y: yMin,
            width: xMax - xMin,
            height: yMax - yMin
        };

    }





    drawLines = (keypoints: poseDetection.Keypoint[], ctx: CanvasRenderingContext2D) => {
        // Draw face keypoints
      
        const lines = [
          [0, 1],
          [1, 3],
          [0, 2],
          [2, 4],
          [5, 6],
          [5, 7],
          [7, 9],
          [6, 8],
          [8, 10],
          [5, 11],
          [6, 12],
          [11, 12],
          [11, 13],
          [13, 15],
          [12, 14],
          [14, 16]

        ];
      
        lines.forEach((line) => {
          const [start, end] = line;
          if (keypoints[start].score > 0.1 && keypoints[end].score > 0.1) {
            ctx.beginPath();
            ctx.moveTo(keypoints[start].x, keypoints[start].y);
            ctx.lineTo(keypoints[end].x, keypoints[end].y);
            ctx.lineWidth = 2;
            ctx.strokeStyle = 'red';
            ctx.stroke();
          }
        });
      
      }







}