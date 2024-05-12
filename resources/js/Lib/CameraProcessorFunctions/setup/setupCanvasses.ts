import { CameraProcessor } from "@/Lib/CameraProcessor";

export const createCanvasses = async (context: CameraProcessor, div_process: HTMLDivElement, div_render: HTMLDivElement) => {

    if (!div_process) {
        console.error('No div process');
        return;
    }

    context.div_process = div_process  ;

    const canvas_process = document.createElement('canvas');
    canvas_process.id = 'canvas_process';

    canvas_process.width = context.video?.videoWidth || 0;
    canvas_process.height = context.video?.videoHeight || 0;

    context.canvas_process = canvas_process;

    context.div_process.appendChild(canvas_process);




    if (!div_render) {
        console.error('No div render');
        return;
    }

    context.div_render = div_render;

    const canvas_render = document.createElement('canvas');
    canvas_render.id = 'canvas_render';

    canvas_render.width = context.div_render.clientWidth;
    canvas_render.height = context.div_render.clientHeight;

    context.canvas_render = canvas_render;

    context.div_render.appendChild(canvas_render);



    return new Promise((resolve) => {
        resolve(true);
    });


}