import { CorpseObject } from '@/Lib/CreateCollage';
import { BaseImage } from './BaseImage';

export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at: string;
}

export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    auth: {
        user: User;
    };
    baseImages?: BaseImage[];
    corpse? : CorpseObject;
    corpses? : CorpsesObject;
};


type Pixel = {
    x: number,
    y: number,
    color: {
        r: number,
        g: number,
        b: number,
        a: number
    }
}

type cutOut = {
    part: string,
    img: string
}

type BoundingBox = {

    x: number,
    y: number,
    width: number,
    height: number,
    label: string,
    keypoints: poseDetection.Keypoint[],
    keypoints3D: poseDetection.Keypoint[]

}


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

export interface CorpsesObject {
    [key: string]: CorpsPart[];
}