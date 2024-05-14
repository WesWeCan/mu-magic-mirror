
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


}