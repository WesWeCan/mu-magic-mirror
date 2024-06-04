import { CameraProcessor } from "@/Lib/CameraProcessor";

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

    // shuffle pieces
    pieces = pieces.sort(() => Math.random() - 0.5);

    const timeInterval = 500; // change order every milliseconds

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



    // draw the bounding boxes on the canvas
    for (let i = 0; i < filteredBoundingBoxes.length; i++) {
        const box = filteredBoundingBoxes[i];

        let pieceLabel: string | boolean = false;
        let piece = null;

        ctx.strokeStyle = 'blue';
        // ctx.strokeRect(box.x, box.y, box.width, box.height);

     
        // paste the image on the canvas
        switch (box.label) {

            case 'head_processed':
                pieceLabel = 'head';

                piece = pieces.find((p : any) => p.label === pieceLabel);

                if (piece) {
                    const scale = Math.min(box.width / piece.width, box.height / piece.height);
                    const pieceWidth = piece.width * scale;
                    const pieceHeight = piece.height * scale;
                    const pieceX = box.x + (box.width - pieceWidth) / 2;
                    const pieceY = box.y + box.height - pieceHeight;

                    ctx.drawImage(piece.img, pieceX, pieceY, pieceWidth, pieceHeight);
                    drawDash(ctx, pieceX, pieceY, pieceWidth, pieceHeight);
                }
            break;



            case 'torso_processed':
                pieceLabel = 'torso';

                piece = pieces.find((p : any) => p.label === pieceLabel);

                if (piece) {
                    const scale = Math.min(box.width / piece.width, box.height / piece.height);
                    const pieceWidth = piece.width * scale;
                    const pieceHeight = piece.height * scale;
                    const pieceX = box.x + (box.width - pieceWidth) / 2;
                    const pieceY = box.y + (box.height - pieceHeight) / 2;

                    ctx.drawImage(piece.img, pieceX, pieceY, pieceWidth, pieceHeight);
                    drawDash(ctx, pieceX, pieceY, pieceWidth, pieceHeight);
                }
                break;

            
            case 'right_arm_processed':
                pieceLabel = 'right_arm';

                piece = pieces.find((p : any) => p.label === pieceLabel);

                if (piece) {
                    const scale = Math.min(box.width / piece.width, box.height / piece.height);
                    const pieceWidth = piece.width * scale;
                    const pieceHeight = piece.height * scale;
                    const pieceX = box.x + box.width - pieceWidth;
                    const pieceY = box.y + (box.height - pieceHeight) / 2;

                    ctx.drawImage(piece.img, pieceX, pieceY, pieceWidth, pieceHeight);
                    drawDash(ctx, pieceX, pieceY, pieceWidth, pieceHeight);
                }
                break;


            case 'left_arm_processed':
                pieceLabel = 'left_arm';

                piece = pieces.find((p : any) => p.label === pieceLabel);

                if (piece) {
                    const scale = Math.min(box.width / piece.width, box.height / piece.height);
                    const pieceWidth = piece.width * scale;
                    const pieceHeight = piece.height * scale;
                    const pieceX = box.x;
                    const pieceY = box.y + (box.height - pieceHeight) / 2;

                    ctx.drawImage(piece.img, pieceX, pieceY, pieceWidth, pieceHeight);
                    drawDash(ctx, pieceX, pieceY, pieceWidth, pieceHeight);
                }
                break;

        
            case 'right_leg_processed':
                pieceLabel = 'right_leg';

                piece = pieces.find((p : any) => p.label === pieceLabel);

                if (piece) {
                    const scale = Math.min(box.width / piece.width, box.height / piece.height);
                    const pieceWidth = piece.width * scale;
                    const pieceHeight = piece.height * scale;
                    const pieceX = box.x + box.width - pieceWidth;
                    const pieceY = box.y;

                    ctx.drawImage(piece.img, pieceX, pieceY, pieceWidth, pieceHeight);
                    drawDash(ctx, pieceX, pieceY, pieceWidth, pieceHeight);
                }
                break;

            case 'left_leg_processed':
                pieceLabel = 'left_leg';

                piece = pieces.find((p : any) => p.label === pieceLabel);

                if (piece) {
                    const scale = Math.min(box.width / piece.width, box.height / piece.height);
                    const pieceWidth = piece.width * scale;
                    const pieceHeight = piece.height * scale;
                    const pieceX = box.x;
                    const pieceY = box.y;

                    ctx.drawImage(piece.img, pieceX, pieceY, pieceWidth, pieceHeight);
                    drawDash(ctx, pieceX, pieceY, pieceWidth, pieceHeight);
                }
                break;


            case 'right_foot_processed':
                pieceLabel = 'right_foot';

                piece = pieces.find((p : any) => p.label === pieceLabel);

                if (piece) {
                    const scale = Math.min(box.width / piece.width, box.height / piece.height);
                    const pieceWidth = piece.width * scale;
                    const pieceHeight = piece.height * scale;
                    const pieceX = box.x + (box.width - pieceWidth) / 2;
                    const pieceY = box.y + (box.height - pieceHeight) / 2;

                    ctx.drawImage(piece.img, pieceX, pieceY, pieceWidth, pieceHeight);
                    drawDash(ctx, pieceX, pieceY, pieceWidth, pieceHeight);
                }
                break;

            case 'left_foot_processed':
                pieceLabel = 'left_foot';

                piece = pieces.find((p : any) => p.label === pieceLabel);

                if (piece) {
                    const scale = Math.min(box.width / piece.width, box.height / piece.height);
                    const pieceWidth = piece.width * scale;
                    const pieceHeight = piece.height * scale;
                    const pieceX = box.x + (box.width - pieceWidth) / 2;
                    const pieceY = box.y + (box.height - pieceHeight) / 2;

                    ctx.drawImage(piece.img, pieceX, pieceY, pieceWidth, pieceHeight);
                    drawDash(ctx, pieceX, pieceY, pieceWidth, pieceHeight);
                }
                break;

            
            case 'right_hand_processed':
                pieceLabel = 'right_hand';

                piece = pieces.find((p : any) => p.label === pieceLabel);

                if (piece) {
                    const scale = Math.min(box.width / piece.width, box.height / piece.height);
                    const pieceWidth = piece.width * scale;
                    const pieceHeight = piece.height * scale;
                    const pieceX = box.x + (box.width - pieceWidth) / 2;
                    const pieceY = box.y + (box.height - pieceHeight) / 2;

                    ctx.drawImage(piece.img, pieceX, pieceY, pieceWidth, pieceHeight);
                    drawDash(ctx, pieceX, pieceY, pieceWidth, pieceHeight);
                }
                break;


            case 'left_hand_processed':
                pieceLabel = 'left_hand';

                piece = pieces.find((p : any) => p.label === pieceLabel);

                if (piece) {
                    const scale = Math.min(box.width / piece.width, box.height / piece.height);
                    const pieceWidth = piece.width * scale;
                    const pieceHeight = piece.height * scale;
                    const pieceX = box.x + (box.width - pieceWidth) / 2;
                    const pieceY = box.y + (box.height - pieceHeight) / 2;

                    ctx.drawImage(piece.img, pieceX, pieceY, pieceWidth, pieceHeight);
                    drawDash(ctx, pieceX, pieceY, pieceWidth, pieceHeight);


                    


                }
                break;          

            default:
                pieceLabel = false;
        }


    }


    
    
   






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