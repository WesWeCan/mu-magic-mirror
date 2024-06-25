import { CameraProcessor } from "@/Lib/CameraProcessor";
import { Pixel } from "@/types";

/**
 * Convert the image data to pixels.
 * 
 * Important: this image data is a .mask.toImageData() from the segmentation, NOT .toColoredMask()
 * 
 * @param {CameraProcessor} context - The camera processor.
 * @param {ImageData} imageData - The image data.
 * @returns {Promise<Pixel[]>}
 */
export const convertImageDataToPixels = async (context: CameraProcessor, imageData: ImageData) => {

    let pixels: Pixel[] = [];

    const data = imageData.data;
    const width = imageData.width;
    const height = imageData.height;

    for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];
        const a = data[i + 3];

        const x = (i / 4) % width;
        const y = Math.floor((i / 4) / width);

        pixels.push({ x: x, y: y, color: { r: r, g: g, b: b, a: a } });
    }

    context.inferenceData.pixels = pixels;

    return pixels;

}