
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

export const createCollageBoundingBoxes = async (corpse : CorpseObject, collage_container : HTMLDivElement, boundingBoxes : BoundingBox[], startingSize : {x: number, y : number}) => {


    console.log('createCollageBoundingBoxes');

    console.log('corpse', corpse);

    console.log('collage_container', collage_container);

    console.log('boundingBoxes', boundingBoxes);

    console.log('startingSize', startingSize);

    const canvas = document.createElement('canvas');
    canvas.width = startingSize.x;
    canvas.height = startingSize.y;
    canvas.id = 'collage-canvas';

    // empty the container
    collage_container.innerHTML = '';
    collage_container.appendChild(canvas);

    const ctx = canvas.getContext('2d');

    if (!ctx) {
        console.error('No context');
        return;
    }

    let keys = Object.keys(corpse);

    console.log('keys', keys);

    let pieces = [];

    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        const corpsePart = corpse[key];

        const img = new Image();
        img.src = corpsePart.path;

        // wait until image is loaded
        await new Promise<void>((resolve) => {
            img.onload = () => {
                resolve();
            }
        });

        const width = img.width;
        const height = img.height;
        const label = key;

        pieces.push({
            img: img,
            width: width,
            height: height,
            label: label
        });

    }

    // shuffle pieces
    pieces = pieces.sort(() => Math.random() - 0.5);
    console.log('pieces', pieces);

    // filter out the bounding boxes
    // if one of the x, y wid or heigt is infinity (or -infinity), it means that the bounding box is not set

    const filteredBoundingBoxes = boundingBoxes.filter((box) => {
        return box.x !== Infinity && box.y !== Infinity && box.width !== Infinity && box.height !== Infinity;
    });

    console.log('filteredBoundingBoxes', filteredBoundingBoxes);

    // draw the bounding boxes on the canvas
    for (let i = 0; i < filteredBoundingBoxes.length; i++) {
        const box = filteredBoundingBoxes[i];

        let pieceLabel: string | boolean = false;
        let piece = null;

        ctx.strokeStyle = 'blue';
        ctx.strokeRect(box.x, box.y, box.width, box.height);

     
        // paste the image on the canvas
        switch (box.label) {

            case 'head_processed':
                pieceLabel = 'head';

                piece = pieces.find((p) => p.label === pieceLabel);

                if (piece) {
                    const scale = Math.min(box.width / piece.width, box.height / piece.height);
                    const pieceWidth = piece.width * scale;
                    const pieceHeight = piece.height * scale;
                    const pieceX = box.x + (box.width - pieceWidth) / 2;
                    const pieceY = box.y + box.height - pieceHeight;

                    ctx.drawImage(piece.img, pieceX, pieceY, pieceWidth, pieceHeight);
                }
            break;



            case 'torso_processed':
                pieceLabel = 'torso';

                piece = pieces.find((p) => p.label === pieceLabel);

                if (piece) {
                    const scale = Math.min(box.width / piece.width, box.height / piece.height);
                    const pieceWidth = piece.width * scale;
                    const pieceHeight = piece.height * scale;
                    const pieceX = box.x + (box.width - pieceWidth) / 2;
                    const pieceY = box.y + (box.height - pieceHeight) / 2;

                    ctx.drawImage(piece.img, pieceX, pieceY, pieceWidth, pieceHeight);
                }
                break;

            
            case 'right_arm_processed':
                pieceLabel = 'right_arm';

                piece = pieces.find((p) => p.label === pieceLabel);

                if (piece) {
                    const scale = Math.min(box.width / piece.width, box.height / piece.height);
                    const pieceWidth = piece.width * scale;
                    const pieceHeight = piece.height * scale;
                    const pieceX = box.x + box.width - pieceWidth;
                    const pieceY = box.y + (box.height - pieceHeight) / 2;

                    ctx.drawImage(piece.img, pieceX, pieceY, pieceWidth, pieceHeight);
                }
                break;


            case 'left_arm_processed':
                pieceLabel = 'left_arm';

                piece = pieces.find((p) => p.label === pieceLabel);

                if (piece) {
                    const scale = Math.min(box.width / piece.width, box.height / piece.height);
                    const pieceWidth = piece.width * scale;
                    const pieceHeight = piece.height * scale;
                    const pieceX = box.x;
                    const pieceY = box.y + (box.height - pieceHeight) / 2;

                    ctx.drawImage(piece.img, pieceX, pieceY, pieceWidth, pieceHeight);
                }
                break;

        
            case 'right_leg_processed':
                pieceLabel = 'right_leg';

                piece = pieces.find((p) => p.label === pieceLabel);

                if (piece) {
                    const scale = Math.min(box.width / piece.width, box.height / piece.height);
                    const pieceWidth = piece.width * scale;
                    const pieceHeight = piece.height * scale;
                    const pieceX = box.x + box.width - pieceWidth;
                    const pieceY = box.y;

                    ctx.drawImage(piece.img, pieceX, pieceY, pieceWidth, pieceHeight);
                }
                break;

            case 'left_leg_processed':
                pieceLabel = 'left_leg';

                piece = pieces.find((p) => p.label === pieceLabel);

                if (piece) {
                    const scale = Math.min(box.width / piece.width, box.height / piece.height);
                    const pieceWidth = piece.width * scale;
                    const pieceHeight = piece.height * scale;
                    const pieceX = box.x;
                    const pieceY = box.y;

                    ctx.drawImage(piece.img, pieceX, pieceY, pieceWidth, pieceHeight);
                }
                break;


            case 'right_foot_processed':
                pieceLabel = 'right_foot';

                piece = pieces.find((p) => p.label === pieceLabel);

                if (piece) {
                    const scale = Math.min(box.width / piece.width, box.height / piece.height);
                    const pieceWidth = piece.width * scale;
                    const pieceHeight = piece.height * scale;
                    const pieceX = box.x + (box.width - pieceWidth) / 2;
                    const pieceY = box.y + (box.height - pieceHeight) / 2;

                    ctx.drawImage(piece.img, pieceX, pieceY, pieceWidth, pieceHeight);
                }
                break;

            case 'left_foot_processed':
                pieceLabel = 'left_foot';

                piece = pieces.find((p) => p.label === pieceLabel);

                if (piece) {
                    const scale = Math.min(box.width / piece.width, box.height / piece.height);
                    const pieceWidth = piece.width * scale;
                    const pieceHeight = piece.height * scale;
                    const pieceX = box.x + (box.width - pieceWidth) / 2;
                    const pieceY = box.y + (box.height - pieceHeight) / 2;

                    ctx.drawImage(piece.img, pieceX, pieceY, pieceWidth, pieceHeight);
                }
                break;

            
            case 'right_hand_processed':
                pieceLabel = 'right_hand';

                piece = pieces.find((p) => p.label === pieceLabel);

                if (piece) {
                    const scale = Math.min(box.width / piece.width, box.height / piece.height);
                    const pieceWidth = piece.width * scale;
                    const pieceHeight = piece.height * scale;
                    const pieceX = box.x + (box.width - pieceWidth) / 2;
                    const pieceY = box.y + (box.height - pieceHeight) / 2;

                    ctx.drawImage(piece.img, pieceX, pieceY, pieceWidth, pieceHeight);
                }
                break;


            case 'left_hand_processed':
                pieceLabel = 'left_hand';

                piece = pieces.find((p) => p.label === pieceLabel);

                if (piece) {
                    const scale = Math.min(box.width / piece.width, box.height / piece.height);
                    const pieceWidth = piece.width * scale;
                    const pieceHeight = piece.height * scale;
                    const pieceX = box.x + (box.width - pieceWidth) / 2;
                    const pieceY = box.y + (box.height - pieceHeight) / 2;

                    ctx.drawImage(piece.img, pieceX, pieceY, pieceWidth, pieceHeight);
                }
                break;          

            default:
                pieceLabel = false;
        }


    }




}