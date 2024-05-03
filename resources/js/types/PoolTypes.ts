export interface BaseImage {

    id: number;
    link: string | null;
    name: string | null;
    path: string;
    error?: string;
    created_at: string;
    updated_at: string;

    processed: boolean;

    mask_images?: MaskImage[];

}

export interface Cutout {
    img: string;
    part: string;
    included: boolean;
}

export interface CutoutRaw {
    part: string,
    img: string
}


export interface ProcesImage {

    baseImage: BaseImage;
    isProcessed: boolean;
    isUploaded: boolean;
    cutouts: Cutout[];

}


export interface MaskImage {
    id: number;
    base_image_id: number;
    included: boolean;
    path: string;
    label: string;
    created_at: string;
    updated_at: string;
}