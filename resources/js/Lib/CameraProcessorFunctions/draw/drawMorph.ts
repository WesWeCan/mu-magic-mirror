import { CameraProcessor } from "@/Lib/CameraProcessor";
import { BoundingBox } from "@/types";

import { BaseImage, CutoutRaw } from "@/types/PoolTypes";

export interface CorpsPart {

    base_image_id: number;
    base_image: BaseImage;
    created_at: string;
    id: number;
    included: boolean;
    label: string;
    path: string;
    updated_at: string;

}


export interface CorpseObject {
    [key: string]: CorpsPart;
}


export const drawMorph = async (context: CameraProcessor) => {


    if (!context.canvas_process || !context.boundingBoxesProcessed) {
        console.error('No canvas or bounding boxes');
        return;
    }

    const canvas = context.canvas_process as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');

    if (!ctx) {
        console.error('No context');
        return;
    }


    let boundingBoxes = context.boundingBoxesProcessed;
    let pieces = context.pieces;

    const timeInterval = 500; // change order every milliseconds
    const now = new Date().getTime();
    const timeDifference = now - context.lastDraw;

    if (timeDifference > timeInterval) {
        pieces = pieces.sort(() => Math.random() - 0.5);
        context.lastDraw = now;
        context.lastDraw = now;
    }

    boundingBoxes = boundingBoxes.sort(() => {
        const now = performance.now();
        return Math.sin(now / timeInterval) - 0.5;
    });

    // filter out the bounding boxes
    // if one of the x, y wid or heigt is infinity (or -infinity), it means that the bounding box is not set
    const filteredBoundingBoxes = boundingBoxes.filter((box) => {
        return box.x !== Infinity && box.y !== Infinity && box.width !== Infinity && box.height !== Infinity;
    });

    // console.log('filteredBoundingBoxes', filteredBoundingBoxes);


    interface Alignments {
        [key: string]: string;
      }

    const alignments : Alignments =
    {
        'head_processed': "bottom",
        'torso_processed': "center",
        'right_arm_processed': "right",
        'left_arm_processed': "left",
        'right_leg_processed': "top",
        'left_leg_processed': "top",
        'right_foot_processed': "top",
        'left_foot_processed': "top",
        'right_hand_processed': "top",
        'left_hand_processed': "top",
        "hair_processed": "bottom",
        "legs": "top",
    };


    let positions : any = {};

    let tempPiece = {
        img: new Image(),
        baseImage: { name: 'YOU!', link: '#' },
        width: 0,
        height: 0
    };

    // draw the bounding boxes on the canvas
    for (let i = 0; i < filteredBoundingBoxes.length; i++) {
        const box = filteredBoundingBoxes[i];

        let pieceLabel: string | boolean = false;
        let piece = null;

        ctx.strokeStyle = 'blue';
        // ctx.strokeRect(box.x, box.y, box.width, box.height);


        pieceLabel = box.label.replace('_processed', '');

        // get the piece
        piece = pieces.find((p: any) => p.label === pieceLabel);


        // based on the label, get the alignment and fill the positions object
        if (piece) {           

            let usingTempPiece = false;

            // there is a X% chance that the piece is not drawn
            // but a cutout from the video is drawn instead
            // get the cutout and replace the piece img with the cutout
            // for this loop only
            // make sure that the piece is not the torso
            // also make sure the bounding box is not outside the canvas
            if (Math.random() < 0.05 && piece && pieceLabel !== 'torso') {
                usingTempPiece = true;

                const cutout = await cutOutFromVideo(context, box);

                if (cutout) {
                    tempPiece.img = cutout;
                    tempPiece.width = box.width;
                    tempPiece.height = box.height;
                }
            }

            let alignment : string = alignments[box.label];

            switch (alignment) {

                case "top":
                    const scaleTop = Math.min(box.width / piece.width, box.height / piece.height);
                    const pieceWidthTop = piece.width * scaleTop;
                    const pieceHeightTop = piece.height * scaleTop;
                    const pieceXTop = box.x + (box.width - pieceWidthTop) / 2;
                    const pieceYTop = box.y;
                    positions[box.label] = { x: pieceXTop, y: pieceYTop, width: pieceWidthTop, height: pieceHeightTop };
                    break;

                case "bottom":
                    const scale = Math.min(box.width / piece.width, box.height / piece.height);
                    const pieceWidth = piece.width * scale;
                    const pieceHeight = piece.height * scale;
                    const pieceX = box.x + (box.width - pieceWidth) / 2;
                    const pieceY = box.y + box.height - pieceHeight;
                    positions[box.label] = { x: pieceX, y: pieceY, width: pieceWidth, height: pieceHeight };
                    break;

                case "center":
                    const scaleCenter = Math.min(box.width / piece.width, box.height / piece.height);
                    const pieceWidthCenter = piece.width * scaleCenter;
                    const pieceHeightCenter = piece.height * scaleCenter;
                    const pieceXCenter = box.x + (box.width - pieceWidthCenter) / 2;
                    const pieceYCenter = box.y + (box.height - pieceHeightCenter) / 2;
                    positions[box.label] = { x: pieceXCenter, y: pieceYCenter, width: pieceWidthCenter, height: pieceHeightCenter };
                    break;

                case "right":
                    const scaleRight = Math.min(box.width / piece.width, box.height / piece.height);
                    const pieceWidthRight = piece.width * scaleRight;
                    const pieceHeightRight = piece.height * scaleRight;
                    const pieceXRight = box.x + box.width - pieceWidthRight;
                    const pieceYRight = box.y + (box.height - pieceHeightRight) / 2;
                    positions[box.label] = { x: pieceXRight, y: pieceYRight, width: pieceWidthRight, height: pieceHeightRight };
                    break;

                case "left":
                    const scaleLeft = Math.min(box.width / piece.width, box.height / piece.height);
                    const pieceWidthLeft = piece.width * scaleLeft;
                    const pieceHeightLeft = piece.height * scaleLeft;
                    const pieceXLeft = box.x;
                    const pieceYLeft = box.y + (box.height - pieceHeightLeft) / 2;
                    positions[box.label] = { x: pieceXLeft, y: pieceYLeft, width: pieceWidthLeft, height: pieceHeightLeft };
                    break;
            }

            if(usingTempPiece) {
                positions[box.label].img = tempPiece.img;
                positions[box.label].baseImage = tempPiece.baseImage;
            } else {
                positions[box.label].img = piece.img;
                positions[box.label].baseImage = piece.baseImage;
            }          
           
        }
    }



    context.currentlyShownPieces = positions;

    // draw the bounding boxes and images on the canvas
    Object.keys(positions).forEach((key) => {
        const piece = positions[key];
        const pieceX = piece.x;
        const pieceY = piece.y;
        const pieceWidth = piece.width;
        const pieceHeight = piece.height;

        ctx.drawImage(piece.img, pieceX, pieceY, pieceWidth, pieceHeight);
        drawDash(ctx, pieceX, pieceY, pieceWidth, pieceHeight);
    });

    Object.keys(positions).forEach((key) => {
        const piece = positions[key];

        const pieceX = piece.x;
        const pieceY = piece.y;
        const pieceWidth = piece.width;
        const pieceHeight = piece.height;

        let fontSize = 12 * context.resolutionScaling;
        
        ctx.font = `${fontSize}px Arial`;
        ctx.fillStyle = 'blue';
        ctx.fillText(piece.baseImage.name, pieceX, pieceY + pieceHeight + (fontSize * 1.01));
    });


}




const drawDash = (ctx: CanvasRenderingContext2D, x: number, y: number, width: number, height: number) => {
    const lineWidth = 2;
    const lineDash = [2, 4];
    ctx.beginPath();
    ctx.setLineDash(lineDash);
    ctx.strokeStyle = 'blue';
    ctx.lineWidth = lineWidth;
    ctx.rect(x, y, width, height);
    ctx.stroke();
    ctx.setLineDash([]);
}


const cutOutFromVideo = async (context: CameraProcessor, boundingBox : BoundingBox) => {


    if (!context.video || !context.canvas_process) {
        console.error('No video or canvas');
        return;
    }

    const canvas = context.canvas_process as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');

    if (!ctx) {
        console.error('No context');
        return;
    }

const video = context.video as HTMLVideoElement;

// check if the bounding box is outside the canvas
if (boundingBox.x < 0 || boundingBox.y < 0 || boundingBox.width < 0 || boundingBox.height < 0) {
    return;
}

let imgCanvas = document.createElement('canvas');
imgCanvas.width = boundingBox.width;
imgCanvas.height = boundingBox.height;

let imgContext = imgCanvas.getContext('2d');

if (!imgContext) {
    console.error('No context');
    return;
}

// Draw the current frame of the video onto the canvas
imgContext.drawImage(video, boundingBox.x, boundingBox.y, boundingBox.width, boundingBox.height, 0, 0, boundingBox.width, boundingBox.height);

// Get the image data from the canvas
const imageData = imgContext.getImageData(0, 0, boundingBox.width, boundingBox.height);

let img = new Image();
img.src = imgCanvas.toDataURL();

await new Promise((resolve) => {
    img.onload = () => {
        resolve(true);
    }
});


// destroy the canvas to free up memory
imgCanvas = null;
imgContext = null;





    return img;

}