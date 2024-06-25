import { CameraProcessor } from "@/Lib/CameraProcessor";

export const shareImage = async (context: CameraProcessor) => {


    const userUsesMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    if (!userUsesMobile) {
        context.downloadImage(true);
        return;
    }

    if (context.processingDownload) {
        return;
    }
    context.processingDownload = true;

    if (context.running) {
        context.running = false;
        await context.loop();
        await context.draw();
        // wait for the last draw to finish
        await new Promise((resolve) => {
            setTimeout(() => {
                resolve(true);
            }, 2000);
        });

    }


    if (!context.canvas_render) {
        console.error('No rendering canvas');
        return;
    }

    const canvas_render = context.canvas_render as HTMLCanvasElement;

    const dataUrl = canvas_render.toDataURL();

    const currentTime = context.getCurrentTime();

    // share as file
    const blob = await fetch(dataUrl).then(res => res.blob());
    const filesArray = [new File([blob], `image ${currentTime}.png`, { type: 'image/png' })];

    const shareData = {
        files: filesArray,
        title: `image ${currentTime}`,
        text: `image ${currentTime}`,
        url: import.meta.env.VITE_APP_URL
    };

    try {
        if (navigator.share && userUsesMobile) {
            await navigator.share(shareData);
            console.log('Shared successfully');
        } else {
            console.error('Sharing is not supported (on desktop)');
            context.downloadImage();
        }
    } catch (err) {
        console.error('Error sharing', err);
    }

    context.processingDownload = false;

}