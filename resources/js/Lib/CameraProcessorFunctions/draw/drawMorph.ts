import { CameraProcessor } from "@/Lib/CameraProcessor";
import { BoundingBox } from "@/types";
import { BaseImage, CutoutRaw } from "@/types/PoolTypes";
import { Mat } from "mirada";

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

    // let pieces = context.pieces;

    const now = new Date().getTime();



    const timeIntervalPieces = 1000;
    const timeDifferencePieces = now - context.lastDraws.shufflePieces;

    if (timeDifferencePieces > timeIntervalPieces) {
        context.pieces = context.pieces.sort(() => Math.random() - 0.5);
        context.lastDraws.shufflePieces = now;

        context.showLegsSeparately = Math.random() > 0.5;
    }


    console.info("context.showLegsSeparately", context.showLegsSeparately);

    const timeIntervalBox = timeIntervalPieces / 2;
    const timeDifferenceBoundingBoxes = now - context.lastDraws.shuffleBoundingBoxes;

    context.boundingBoxesProcessed = context.boundingBoxesProcessed.sort(() => {
        const nowBox = performance.now();
        return Math.sin(nowBox / timeIntervalBox) - 0.5;
    });

    const filteredBoundingBoxes = context.boundingBoxesProcessed.filter((box) => {
        return box.x !== Infinity && box.y !== Infinity && box.width !== Infinity && box.height !== Infinity;
    });

    const timeIntervalYou = timeIntervalBox * 2;
    const timeDifferenceYou = now - context.lastDraws.shuffleYou;

    if (timeDifferenceYou > timeIntervalYou) {
        await insertYouPiece(context, filteredBoundingBoxes);
        context.lastDraws.shuffleYou = now;
    }

    interface Alignments {
        [key: string]: string;
    }

    const alignments: Alignments = {
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

    let positions: any = {};

    // Draw the bounding boxes on the canvas
    for (let i = 0; i < filteredBoundingBoxes.length; i++) {
        const box = filteredBoundingBoxes[i];

        let pieceLabel: string | boolean = false;
        let piece = null;

        ctx.strokeStyle = 'blue';

        pieceLabel = box.label.replace('_processed', '');


        if(context.showLegsSeparately && pieceLabel === 'legs') {
            continue;
        }

        if(!context.showLegsSeparately && (pieceLabel === 'right_leg' || pieceLabel === 'left_leg')) {
            continue;
        }

        // Get the piece
        piece = context.pieces.find((p: any) => p.label === pieceLabel);

        // Based on the label, get the alignment and fill the positions object
        if (piece) {
            let alignment: string = alignments[box.label];

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

            positions[box.label].img = piece.img;
            positions[box.label].baseImage = piece.baseImage;
        }
    }

    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;

    const filteredPositions = Object.keys(positions).reduce((acc, key) => {
        const piece = positions[key];
        const pieceX = piece.x;
        const pieceY = piece.y;
        const pieceWidth = piece.width;
        const pieceHeight = piece.height;

        if (
            pieceX + pieceWidth >= 0 &&
            pieceY + pieceHeight >= 0 &&
            pieceX <= canvasWidth &&
            pieceY <= canvasHeight
        ) {
            acc[key] = piece;
        }

        return acc;
    }, {});

    context.currentlyShownPieces = filteredPositions;

    // Draw the bounding boxes and images on the canvas
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

        let fontSize = 18;

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

async function cutOutFromVideo(context: CameraProcessor, boundingBox: BoundingBox) {
    if (!context.video || !context.canvas_process) {
        console.error('No video or canvas');
        return null;
    }

    const canvas = context.canvas_process;
    const ctx = canvas.getContext('2d');

    if (!ctx) {
        console.error('No context');
        return null;
    }

    const video = context.video;

    if (boundingBox.x < 0 || boundingBox.y < 0 || boundingBox.width <= 0 || boundingBox.height <= 0) {
        return null;
    }

    // Create a temporary canvas to draw the scaled video
    const tempCanvas = document.createElement('canvas');
    // tempCanvas.width = video.videoWidth * context.resolutionScaling;
    // tempCanvas.height = video.videoHeight * context.resolutionScaling;
    tempCanvas.width = video.videoWidth;
    tempCanvas.height = video.videoHeight;

    const tempContext = tempCanvas.getContext('2d');

    if (!tempContext) {
        console.error('No context');
        return null;
    }

    tempContext.drawImage(video, 0, 0, video.videoWidth, video.videoHeight, 0, 0, tempCanvas.width, tempCanvas.height);

// Create imgCanvas to draw the bounding box from the scaled video
const imgCanvas = document.createElement('canvas');
imgCanvas.id = 'imgCanvas';
imgCanvas.width = boundingBox.width;
imgCanvas.height = boundingBox.height;

const imgContext = imgCanvas.getContext('2d');

if (!imgContext) {
    console.error('No context');
    return null;
}

/// Draw the bounding box from the scaled video onto imgCanvas
imgContext.drawImage(
    tempCanvas,
    boundingBox.x,
    boundingBox.y,
    boundingBox.width,
    boundingBox.height,
    0,
    0,
    imgCanvas.width,
    imgCanvas.height
);

    const img = new Image();
    img.src = imgCanvas.toDataURL();

    await new Promise((resolve) => {
        img.onload = () => resolve(true);
        img.onerror = () => resolve(false); // Handle image loading error
    });



    // // For debugging purposes
    // // remove the canvas if it exists
    // const existingCanvas = document.getElementById('imgCanvas');
    // if (existingCanvas) {
    //     existingCanvas.remove();
    // }

    // // append the canvas to the body and draw the image on it
    // document.body.appendChild(imgCanvas);
    // imgContext.drawImage(img, 0, 0);



    // Clean up the canvas to free up memory
    imgCanvas.width = 0;
    imgCanvas.height = 0;

    return img;
}

async function insertYouPiece(context: CameraProcessor, boundingBoxes: BoundingBox[]) {


    if (!context.pieces || context.pieces.length === 0) {
        console.error('No pieces');
        return;
    }

    const currentFirstPiece = context.pieces[0];
    const currentFirstPieceLabel = currentFirstPiece.label;

    const boundingBox = boundingBoxes.find((box) => box.label === currentFirstPieceLabel + "_processed");

    if (!boundingBox) {
        console.error('No bounding box');
        return;
    }

    const cutout = await cutOutFromVideo(context, boundingBox);

    if (!cutout) return;

    // Limit the number of pieces to avoid memory issues

    context.pieces = context.pieces.filter((p: any) => p.baseImage.name !== "YOU!");

    const tempPiece = {
        img: cutout,
        baseImage: { name: 'YOU!', link: '#' },
        width: boundingBox.width,
        height: boundingBox.height,
        label: currentFirstPieceLabel
    };

    context.pieces.unshift(tempPiece);

}
