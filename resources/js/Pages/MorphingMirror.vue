<script setup lang="ts">

import { nextTick, onMounted, onUnmounted, ref } from 'vue';
import { Link, usePage } from '@inertiajs/vue3';


import { MagicMirror } from '@/Lib/Mirror'

const mirror = new MagicMirror();

const video_container = ref<HTMLDivElement | null>(null);
const div_process = ref<HTMLDivElement | null>(null);
const div_result = ref<HTMLDivElement | null>(null);


const collage_container = ref<HTMLDivElement | null>(null);


const page = usePage();

onMounted(async () => {

    // add class to body 'mirror'
    document.body.classList.add('mirror');

    await nextTick();

    console.log('page.props.corpse', page.props.corpse);

    makeCollage();

 
});

onUnmounted(() => {
    // remove class from body 'mirror'
    document.body.classList.remove('mirror');
});



const makeCollage = async () => {
    

    if (!collage_container.value) {
        console.error('no collage container');
        return;
    }

    if (!page.props.corpse) {
        console.error('no corpse');
        return;
    }
    
    const canvas = document.createElement('canvas');
    canvas.width = 600;
    canvas.height = 900;

    collage_container.value?.appendChild(canvas);

    const ctx = canvas.getContext('2d');

    if (!ctx) {
        console.error('no ctx');
        return;
    }


    let keys = Object.keys(page.props.corpse);

    console.log('keys', keys);

    let pieces = [];

    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        const corpse = page.props.corpse[key];

        const img = new Image();
        img.src = corpse.path;

        // wait until image is loaded
        await new Promise((resolve) => {
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

    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;

    const center = {
        x: canvasWidth / 2,
        y: canvasHeight / 2
    };




    let collagePieces = {};

    for (let i = 0; i < pieces.length; i++) {
        const piece = pieces[i];

        let tempWidth = piece.width;

        piece.width = canvasWidth;
        piece.height = piece.height * (piece.width / tempWidth);

        collagePieces[piece.label] = piece;
        
    }
  

    console.log('pieces', pieces);

    // get canvas size
    

    // make canvas background gray
    ctx.fillStyle = 'gray';
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);

    // draw the pieces on the canvas





    


    let x = 0;
    let y = 0;
    let newWidth = 0;
    let newHeight = 0;
    let currentLabel = 'empty';

    let margin = 50;

    let scalingConstraints = {
        min: 0.25,
        max: 0.75
    }

    let scaling = 1;


    let dummyWidth = 0;
    let dummyHeight = 0;


    
    let boundingBoxes = {}


    // MIDDLE
    dummyWidth = canvasWidth * 0.55;
    dummyHeight = dummyWidth * 1;

    newWidth = dummyWidth * scaling;
    newHeight = dummyHeight * (newWidth / dummyWidth);

    x = center.x - newWidth / 2;
    y = center.y - newHeight / 2;

    
    x -= newWidth * 0.1;
    y -= newHeight * 0.15;

    // put a rect in the centre
    ctx.fillStyle = 'red';
    ctx.fillRect(x, y, newWidth, newHeight);

    boundingBoxes['middle'] = {
        x: x,
        y: y,
        width: newWidth,
        height: newHeight
    }


    // TOP
    dummyWidth = canvasWidth * 0.45;
    dummyHeight = dummyWidth * 1;

    newWidth = dummyWidth * scaling;
    newHeight = dummyHeight * (newWidth / dummyWidth);

    x = center.x - newWidth / 2;
    y = center.y - newHeight / 2;

    y -= newHeight * 1;
    x += newWidth * 0.1;

    // put a rect in the centre
    ctx.fillStyle = 'blue';
    ctx.fillRect(x, y, newWidth, newHeight);

    boundingBoxes['top'] = {
        x: x,
        y: y,
        width: newWidth,
        height: newHeight
    }



    // LEFT
    dummyWidth = canvasWidth * 0.37;
    dummyHeight = dummyWidth * 1;

    newWidth = dummyWidth * scaling;
    newHeight = dummyHeight * (newWidth / dummyWidth);

    x = center.x - newWidth / 2;
    y = center.y - newHeight / 2;

    y += newHeight * 0;
    x -= newWidth * 0.75;

    // put a rect in the centre
    ctx.fillStyle = 'green';
    ctx.fillRect(x, y, newWidth, newHeight);

    boundingBoxes['left'] = {
        x: x,
        y: y,
        width: newWidth,
        height: newHeight
    }



    // RIGHT
    dummyWidth = canvasWidth * 0.37;
    dummyHeight = dummyWidth * 1;

    newWidth = dummyWidth * scaling;
    newHeight = dummyHeight * (newWidth / dummyWidth);

    x = center.x - newWidth / 2;
    y = center.y - newHeight / 2;

    y += newHeight * 0.12;
    x += newWidth * 0.75;

    // put a rect in the centre
    ctx.fillStyle = 'purple';
    ctx.fillRect(x, y, newWidth, newHeight);

    boundingBoxes['right'] = {
        x: x,
        y: y,
        width: newWidth,
        height: newHeight
    }



    // LOW
    dummyWidth = canvasWidth * 0.42;
    dummyHeight = dummyWidth * 1;

    newWidth = dummyWidth * scaling;
    newHeight = dummyHeight * (newWidth / dummyWidth);

    x = center.x - newWidth / 2;
    y = center.y - newHeight / 2;

    y += newHeight * 0.869;
    x -= newWidth * 0.16;

    // put a rect in the centre
    ctx.fillStyle = 'yellow';
    ctx.fillRect(x, y, newWidth, newHeight);

    boundingBoxes['low'] = {
        x: x,
        y: y,
        width: newWidth,
        height: newHeight
    }



    // LOWLOW
    dummyWidth = canvasWidth * 0.42;
    dummyHeight = dummyWidth * 1;

    newWidth = dummyWidth * scaling;
    newHeight = dummyHeight * (newWidth / dummyWidth);

    x = center.x - newWidth / 2;
    y = center.y - newHeight / 2;

    y += newHeight * 1.15;
    x += newWidth * 0.26;

    // put a rect in the centre
    ctx.fillStyle = 'orange';
    ctx.fillRect(x, y, newWidth, newHeight);

    boundingBoxes['lowlow'] = {
        x: x,
        y: y,
        width: newWidth,
        height: newHeight
    }



    



    // draw the pieces on the canvas
    // do that withing the bounding boxes
    // scale them to fit the bounding boxes
    // center them in the bounding boxes


    // were starting with drawing the pieces on the x and y of the bounding boxes

    // we need to scale them to fit the bounding boxes later

    ctx.fillStyle = 'gray';
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);

    for (let i = 0; i < pieces.length; i++) {
        const piece = pieces[i];

        console.log('piece', piece, boundingBoxes[piece.label]);

        if (!boundingBoxes[piece.label]) {
            console.error('no bounding box for', piece.label);
            continue;
        }

        let pWidth = boundingBoxes[piece.label].width;
        let pHeight = piece.height * (pWidth / piece.width);

        if (pHeight > boundingBoxes[piece.label].height) {
            pHeight = boundingBoxes[piece.label].height;
            pWidth = piece.width * (pHeight / piece.height);
        }


        let x = boundingBoxes[piece.label].x;
        let y = boundingBoxes[piece.label].y;


        // put in the centre of the bounding box
        x += (boundingBoxes[piece.label].width - pWidth) / 2;
        y += (boundingBoxes[piece.label].height - pHeight) / 2;

        ctx.drawImage(piece.img, x, y, pWidth, pHeight);
        
    }
    
    
}









</script>


<template>


<div class="video_containter" ref="video_container"></div>
<div class="process_containter" ref="div_process"></div>
<div class="result_containter" ref="div_result"></div>


<div ref="collage_container" class="collage"></div>
    



<div v-for="corpse in page.props.corpse" :key="corpse.id" v-if="page.props.corpse">
    Name:
    {{ corpse.base_image.name }}

    <br />
    Link:
    {{ corpse.base_image.link }}

    <br />
    <br />

</div>



</template>