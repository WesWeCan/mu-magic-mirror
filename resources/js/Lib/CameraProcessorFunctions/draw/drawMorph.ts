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



/**
 * Draws the morphing effect onto a given canvas context.
 *
 * This function handles several tasks related to drawing:
 * 1. Shuffling pieces and bounding boxes at specific intervals.
 * 2. Filtering out invalid bounding boxes.
 * 3. Inserting and positioning "you" piece into the processed bounding boxes.
 * 4. Drawing processed bounding boxes and their related images onto the canvas.
 *
 * @param {CameraProcessor} context - The context containing details such as canvas, bounding boxes, and drawing pieces.
 *
 * @throws {Error} Will log errors if the necessary canvas or context is not available.
 *
 * The context parameter should include the following properties:
 * - canvas_process: HTMLCanvasElement - The canvas where the drawing is performed.
 * - boundingBoxesProcessed: Array - Array of processed bounding boxes.
 * - lastDraws: Object - Timestamps of the last shuffle operations for pieces, bounding boxes, and "you" piece.
 * - pieces: Array - Array of available pieces to be drawn.
 * - showLegsSeparately: boolean - Flag to determine whether to show legs separately.
 * - currentlyShownPieces: Object - Container for the currently shown pieces, keyed by their labels.
 */
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

    const now = new Date().getTime();

    // Shuffle pieces at regular intervals
    const timeIntervalPieces = 100;
    const timeDifferencePieces = now - context.lastDraws.shufflePieces;

    if (timeDifferencePieces > timeIntervalPieces) {
        context.pieces = context.pieces.sort(() => Math.random() - 0.5);
        context.lastDraws.shufflePieces = now;
        context.showLegsSeparately = Math.random() > 0.5;
    }

    // Shuffle bounding boxes at regular intervals
    const timeIntervalBox = timeIntervalPieces / 2;
    const timeDifferenceBoundingBoxes = now - context.lastDraws.shuffleBoundingBoxes;

    context.boundingBoxesProcessed = context.boundingBoxesProcessed.sort(() => {
        const nowBox = performance.now();
        return Math.sin(nowBox / timeIntervalBox) - 0.5;
    });

    // Filter out invalid bounding boxes
    const filteredBoundingBoxes = context.boundingBoxesProcessed.filter((box) => {
        return box.x !== Infinity && box.y !== Infinity && box.width !== Infinity && box.height !== Infinity;
    });

    // Insert and shuffle "you" piece at regular intervals
    const timeIntervalYou = timeIntervalBox * 2;
    const timeDifferenceYou = now - context.lastDraws.shuffleYou;

    if (timeDifferenceYou > timeIntervalYou) {
        await insertYouPiece(context, filteredBoundingBoxes);
        context.lastDraws.shuffleYou = now;
    }

    // Define piece alignment logic
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

    let positions: Record<string, any> = {};

    // Compute positions for each bounding box and draw the piece
    filteredBoundingBoxes.forEach((box) => {
        let pieceLabel = box.label.replace('_processed', '');
        if ((!context.showLegsSeparately && (pieceLabel === 'right_leg' || pieceLabel === 'left_leg')) ||
            (context.showLegsSeparately && pieceLabel === 'legs')) {
            return;
        }

        let piece = context.pieces.find((p: any) => p.label === pieceLabel);
        if (!piece) return;

        let alignment = alignments[box.label];
        let scale, pieceWidth, pieceHeight, pieceX, pieceY;
        
        switch (alignment) {
            case "top":
                scale = Math.min(box.width / piece.width, box.height / piece.height);
                pieceWidth = piece.width * scale;
                pieceHeight = piece.height * scale;
                pieceX = box.x + (box.width - pieceWidth) / 2;
                pieceY = box.y;
                break;
            case "bottom":
                scale = Math.min(box.width / piece.width, box.height / piece.height);
                pieceWidth = piece.width * scale;
                pieceHeight = piece.height * scale;
                pieceX = box.x + (box.width - pieceWidth) / 2;
                pieceY = box.y + box.height - pieceHeight;
                break;
            case "center":
                scale = Math.min(box.width / piece.width, box.height / piece.height);
                pieceWidth = piece.width * scale;
                pieceHeight = piece.height * scale;
                pieceX = box.x + (box.width - pieceWidth) / 2;
                pieceY = box.y + (box.height - pieceHeight) / 2;
                break;
            case "right":
                scale = Math.min(box.width / piece.width, box.height / piece.height);
                pieceWidth = piece.width * scale;
                pieceHeight = piece.height * scale;
                pieceX = box.x + box.width - pieceWidth;
                pieceY = box.y + (box.height - pieceHeight) / 2;
                break;
            case "left":
                scale = Math.min(box.width / piece.width, box.height / piece.height);
                pieceWidth = piece.width * scale;
                pieceHeight = piece.height * scale;
                pieceX = box.x;
                pieceY = box.y + (box.height - pieceHeight) / 2;
                break;
        }

        positions[box.label] = {
            x: pieceX,
            y: pieceY,
            width: pieceWidth,
            height: pieceHeight,
            img: piece.img,
            baseImage: piece.baseImage
        };
    });

    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;

    // Filter positions to fit within canvas dimensions
    const filteredPositions = Object.keys(positions).reduce((acc: Record<string, any>, key: string) => {
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

    // Draw pieces on the canvas
    Object.keys(filteredPositions).forEach((key) => {
        const piece = filteredPositions[key];
        ctx.drawImage(piece.img, piece.x, piece.y, piece.width, piece.height);
    });

    // Uncomment the following block if you need to add text labels to the images in the future
    // Object.keys(positions).forEach((key) => {
    //     const piece = positions[key];
    //     const pieceX = piece.x;
    //     const pieceY = piece.y;
    //     const pieceWidth = piece.width;
    //     const pieceHeight = piece.height;
    //     let fontSize = 18;
    //     ctx.font = `${fontSize}px Arial`;
    //     ctx.fillStyle = 'blue';
    //     ctx.fillText(piece.baseImage.name, pieceX, pieceY + pieceHeight + (fontSize * 1.01));
    // });
};


/**
 * Draw a dashed line around the bounding box.
 * 
 * @param {CanvasRenderingContext2D} ctx - The canvas rendering context.
 * @param {number} x - The x coordinate of the line.
 * @param {number} y - The y coordinate of the line.
 * @param {number} width - The width of the line.
 * @param {number} height - The height of the line.
 * @returns {void}
 */
// const drawDash = (ctx: CanvasRenderingContext2D, x: number, y: number, width: number, height: number) => {
//     const lineWidth = 2;
//     const lineDash = [2, 4];
//     ctx.beginPath();
//     ctx.setLineDash(lineDash);
//     ctx.strokeStyle = 'blue';
//     ctx.lineWidth = lineWidth;
//     ctx.rect(x, y, width, height);
//     ctx.stroke();
//     ctx.setLineDash([]);
// }


/**
 * Cut out the image from the video.
 * 
 * @param {CameraProcessor} context - The camera processor.
 * @param {BoundingBox} boundingBox - The bounding box.
 * @returns {Promise<void>}
 */
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

/**
 * Insert the YOU! piece into the corpse.
 * 
 * @param {CameraProcessor} context - The camera processor.
 * @param {BoundingBox[]} boundingBoxes - The bounding boxes.
 * @returns {Promise<void>}
 */
async function insertYouPiece(context: CameraProcessor, boundingBoxes: BoundingBox[]) {


    if (!context.pieces || context.pieces.length === 0) {
        console.error('No pieces');
        return;
    }

    const currentFirstPiece = context.pieces[0];
    const currentFirstPieceLabel = currentFirstPiece.label;

    const boundingBox = boundingBoxes.find((box) => box.label === currentFirstPieceLabel + "_processed");

    if (!boundingBox) {
        console.error('No bounding box, continue');
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
