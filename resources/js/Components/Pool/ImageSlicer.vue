<script setup lang="ts">

import { BaseImage, Cutout, CutoutRaw, ProcesImage } from '@/types/PoolTypes';
import { onMounted, ref, watch } from 'vue';

const props = defineProps<{
    baseImage: BaseImage
}>();

const canvas = ref<HTMLCanvasElement | null>(null);
const image = ref<HTMLImageElement | null>(null);

type CurrentMask = {

    start: {
        x: number | null,
        y: number | null,
    },
    end: {
        x: number | null,
        y: number | null,
    }

}

const currentMask = ref<CurrentMask>({
    start: {
        x: null,
        y: null
    },
    end: {
        x: null,
        y: null
    }
});

const emit = defineEmits(['cutout']);

onMounted(() => {
    init();
});

watch(() => props.baseImage, () => {
    console.info('base image changed', props.baseImage);
    init();
});


const init = () => {
    loadImage(props.baseImage.path);

    if (!canvas.value) {
        console.error('no canvas');
        return;
    }

    // remove all event listeners
    canvas.value.removeEventListener('mousemove', drawCurrentMask);
    canvas.value.removeEventListener('click', setCurrentMask);
    canvas.value.removeEventListener('contextmenu', (e) => {
        e.preventDefault();
        resetCurrentMask();
    });

    canvas.value.addEventListener('mousemove', drawCurrentMask);
    canvas.value.addEventListener('click', setCurrentMask);
    canvas.value.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        resetCurrentMask();
    });
}

const loadImage = (src: string) => {

    const tempImage = new Image();
    tempImage.src = src;
    tempImage.onload = () => {
        console.warn('Image loaded', tempImage);

        image.value = tempImage;

        if (!canvas.value) {
            return;
        }

        canvas.value.width = image.value.width;
        canvas.value.height = image.value.height;
        canvas.value.getContext('2d')?.drawImage(image.value, 0, 0);
    }
}

// Unused
// const followMouse = (e: MouseEvent) => {
//     if (!canvas.value) {
//         console.error('no canvas');
//         return;
//     }

//     if (!image.value) {
//         console.error('no image');
//         return;
//     }

//     const rect = canvas.value.getBoundingClientRect();

//     const x = e.clientX - rect.left;
//     const y = e.clientY - rect.top;

//     const ctx = canvas.value.getContext('2d');

//     if (!ctx) {
//         return;
//     }

//     ctx.clearRect(0, 0, canvas.value.width, canvas.value.height);


//     ctx.drawImage(image.value, 0, 0);

//     ctx.beginPath();
//     ctx.strokeStyle = 'red';
//     ctx.lineWidth = 4;
//     ctx.fillStyle = 'white';
//     ctx.beginPath();
//     ctx.arc(x, y, 10, 0, 2 * Math.PI);
//     ctx.fill();
//     ctx.stroke();

// }

const resetCurrentMask = () => {
    currentMask.value.start.x = null;
    currentMask.value.start.y = null;
    currentMask.value.end.x = null;
    currentMask.value.end.y = null;

    drawCurrentMask(new MouseEvent('mousemove'));
}

const drawCurrentMask = (e: MouseEvent) => {

    if (!canvas.value) {
        console.error('no canvas');
        return;
    }

    if (!image.value) {
        console.error('no image');
        return;
    }

    const ctx = canvas.value.getContext('2d');

    if (!ctx) {
        return;
    }

    ctx.clearRect(0, 0, canvas.value.width, canvas.value.height);

    ctx.drawImage(image.value, 0, 0);


    if (currentMask.value.start.x === null && currentMask.value.start.y === null) {
        return;
    }

    if (
        currentMask.value.start.x != null && currentMask.value.start.y != null &&
        currentMask.value.end.x === null && currentMask.value.end.y === null
    ) {

        const rect = canvas.value.getBoundingClientRect();

        // set the current mask with tempY
        const x = currentMask.value.start.x;
        const y = currentMask.value.start.y;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;



        // draw a rect from x,y to mouseX, mouseY
        ctx.beginPath();
        ctx.strokeStyle = 'red';
        ctx.lineWidth = 4;
        ctx.fillStyle = 'white';
        ctx.rect(x, y, mouseX - x, mouseY - y);

        ctx.stroke();

        return;
    }

}


const setCurrentMask = (e: MouseEvent) => {
    console.log('set current mask', e);

    if (!canvas.value) {
        console.error('no canvas');
        return;
    }

    const rect = canvas.value.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (currentMask.value.start.x === null && currentMask.value.start.y === null) {

        currentMask.value.start.x = x;
        currentMask.value.start.y = y;

        return;
    }
    else {

        currentMask.value.end.x = x;
        currentMask.value.end.y = y;

        cutOutMask();

        currentMask.value.start.x = null;
        currentMask.value.start.y = null;
        currentMask.value.end.x = null;
        currentMask.value.end.y = null;
    }

}


const cutOutMask = () => {
    console.log('cut out mask');


    if (!canvas.value) {
        console.error('no canvas');
        return;
    }

    if (!image.value) {
        console.error('no image');
        return;
    }

    if (currentMask.value.start.x === null || currentMask.value.start.y === null) {
        console.error('no start');
        return;
    }

    if (currentMask.value.end.x === null || currentMask.value.end.y === null) {
        console.error('no end');
        return;
    }


    // clear and draw the image
    const ctx = canvas.value.getContext('2d');

    if (!ctx) {
        console.error('no ctx');
        return;
    }

    ctx.clearRect(0, 0, canvas.value.width, canvas.value.height);
    ctx.drawImage(image.value, 0, 0);

    // define the bounding box of the mask
    const minX = Math.min(currentMask.value.start.x, currentMask.value.end.x);
    const minY = Math.min(currentMask.value.start.y, currentMask.value.end.y);
    const maxX = Math.max(currentMask.value.start.x, currentMask.value.end.x);
    const maxY = Math.max(currentMask.value.start.y, currentMask.value.end.y);

    console.table({
        minX,
        minY,
        maxX,
        maxY
    });

    const img = new Image();
    img.src = canvas.value.toDataURL();

    img.onload = () => {

        const cutOutCanvas = document.createElement('canvas');
        cutOutCanvas.width = maxX - minX;
        cutOutCanvas.height = maxY - minY;

        const cutOutCtx = cutOutCanvas.getContext('2d');

        if (!cutOutCtx) {
            console.error('no cutout ctx');
            return;
        }

        cutOutCtx.drawImage(img, minX, minY, maxX - minX, maxY - minY, 0, 0, maxX - minX, maxY - minY);

        const cutOut = {
            part: "unknown",
            img: cutOutCanvas.toDataURL()
        }

        emit('cutout', cutOut);
    }
}

</script>


<template>
    <div class="image-processor">
        <canvas class="slice-canvas" ref="canvas"></canvas>
    </div>
</template>
