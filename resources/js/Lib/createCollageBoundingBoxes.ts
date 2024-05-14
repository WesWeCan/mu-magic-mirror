
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

    // map the labels of the bounding boxes to the pieces
    const pieceLabels = filteredBoundingBoxes.map((box) => {

        switch (box.label) {

            case 'head_mask':
                return 'top';

            case 'torso_mask':
                return 'middle';

            case 'right_arm_mask':
                return 'right';

            case 'left_arm_mask':
                return 'left';

            case 'left_leg_mask':
            case 'right_leg_mask':
            case 'left_foot_mask':
            case 'right_foot_mask':
            case 'left_hand_mask':
            case 'right_hand_mask':
                return false;

            default:
                return false;
        }
    });

    console.log('pieceLabels', pieceLabels);

    // draw the bounding boxes on the canvas
    for (let i = 0; i < filteredBoundingBoxes.length; i++) {
        const box = filteredBoundingBoxes[i];

        let pieceLabel: string | boolean = false;
        let piece = null;

        ctx.strokeStyle = 'blue';
        ctx.strokeRect(box.x, box.y, box.width, box.height);


        // paste the image on the canvas
        switch (box.label) {

            case 'head_mask':
                pieceLabel = 'top';

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



            case 'torso_mask':
                pieceLabel = 'middle';

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



            case 'right_arm_mask':
                pieceLabel = 'right';


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

                break;

            case 'left_arm_mask':
                pieceLabel = 'left';

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
                

            case 'left_leg_mask':
            case 'right_leg_mask':
            case 'left_foot_mask':
            case 'right_foot_mask':
            case 'left_hand_mask':
            case 'right_hand_mask':
                pieceLabel = false;

            default:
                pieceLabel = false;
        }


    }




}