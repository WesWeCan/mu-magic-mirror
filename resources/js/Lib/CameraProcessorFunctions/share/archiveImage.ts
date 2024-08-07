import { CameraProcessor } from "@/Lib/CameraProcessor";
import axios from 'axios';

/**
     * Archive the user generated corpse.
     * 
     * @param  {string} dataUrl - The data URL of the image to be archived.
     * @returns {Promise<void>}
     */
export const archiveImage = async (context: CameraProcessor, dataUrl: string) => {

    if (confirm('Do you consent that we archive this image?')) {

        // console.log('Archiving image');
        console.info('Archiving image');
        const formData = new FormData();

        const currentTime = context.getCurrentTime();

        const file = await fetch(dataUrl).then(res => res.blob())
            .then(blob => new File([blob], `image ${currentTime}.png`, { type: 'image/png' }));


        // Append the File to FormData
        formData.append('image', file);



        const usedPiecesList = Object.keys(context.currentlyShownPieces).map((key) => {
            const piece = context.currentlyShownPieces[key];

            if (piece.baseImage.name === 'YOU!') {
                return -1;
            }
            else {
                return piece.baseImage.id;
            }
        });

        formData.append('usedPieces', JSON.stringify(usedPiecesList));

        // get the list of used pieces
        console.info('Used pieces', usedPiecesList);

        try {
            const response = await axios.post('/archive', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            console.log('Image archived', response);
        } catch (error) {
            console.error('Error archiving image', error);
        }
    }
}