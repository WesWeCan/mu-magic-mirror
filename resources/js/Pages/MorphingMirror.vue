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

    // empty the collage container first
    collage_container.value.innerHTML = '';
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



    if (false) {

        // randomize the labels of the pieces, 
        // but make sure each label is only used once
        let labels = ['middle', 'top', 'left', 'right', 'low', 'lowlow'];

        let shuffledLabels = labels.sort(() => Math.random() - 0.5);

        for (let i = 0; i < pieces.length; i++) {
            pieces[i].label = shuffledLabels[i];
        }

    }








    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;

    const center = {
        x: canvasWidth / 2,
        y: canvasHeight / 2
    };


    type AllowedLabels = 'middle' | 'top' | 'left' | 'right' | 'low' | 'lowlow' | 'empty';



    let collagePieces: Record<string, { img: HTMLImageElement, width: number, height: number, label: string }> = {};

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
    let currentLabel: AllowedLabels = 'empty';

    let margin = 0.05;

    let scalingConstraints = {
        min: 0.9,
        max: 1.1
    }

    let scaling = 1;


    let dummyWidth = 0;
    let dummyHeight = 0;



    let boundingBoxes: Record<string, { x: number, y: number, width: number, height: number }> = {};
    let aspectRatio = 1;

    let maxTests = 10;
    let testCount = 0;
    let validPosition = false;

    let maxOverlapY = 0.15;
    let maxOverlapX = 0.15;

    // MIDDLE
    currentLabel = 'middle'
    aspectRatio = collagePieces[currentLabel].height / collagePieces[currentLabel].width;

    dummyWidth = canvasWidth * (Math.random() * (0.65 - 0.45) + 0.45);
    dummyHeight = dummyWidth * aspectRatio;

    newWidth = dummyWidth * scaling;
    newHeight = dummyHeight * (newWidth / dummyWidth);

    x = center.x - newWidth / 2;
    y = center.y - newHeight / 2;

    // put a rect in the centre
    ctx.fillStyle = 'red';
    ctx.fillRect(x, y, newWidth, newHeight);

    boundingBoxes[currentLabel] = {
        x: x,
        y: y,
        width: newWidth,
        height: newHeight
    }


    // TOP

    currentLabel = 'top'
    aspectRatio = collagePieces[currentLabel].height / collagePieces[currentLabel].width;


    let distBetweenCanvasTopAndMiddle = boundingBoxes['middle'].y - 0 - (canvasHeight * margin);

    dummyHeight = distBetweenCanvasTopAndMiddle;
    dummyWidth = dummyHeight / aspectRatio;

    newHeight = dummyHeight * scaling;
    newWidth = dummyWidth * (newHeight / dummyHeight);

    // x is random between the x of the middle and the x + width of the middle
    validPosition = false;
    testCount = 0;

    maxOverlapX = 0;
    maxOverlapY = 0.35;

    scalingConstraints = {
        min: 0.65,
        max: 0.85
    }

    while (!validPosition && testCount < maxTests) {


        newWidth = boundingBoxes['middle'].width * (Math.random() * (scalingConstraints.max - scalingConstraints.min) + scalingConstraints.min);

        newHeight = newWidth * (dummyHeight / dummyWidth);

        x = Math.random() * (boundingBoxes['middle'].width - newWidth) + boundingBoxes['middle'].x;

        y = boundingBoxes['middle'].y - newHeight;
        y += (newHeight * maxOverlapY * Math.random());

        // Check if the position is valid
        validPosition = true; // Replace this with your validation logic
        testCount++;
    }

    if (!validPosition) {
        console.error('Could not find a valid position');
        return;
    }

    // put a rect in the centre
    ctx.fillStyle = 'blue';
    ctx.fillRect(x, y, newWidth, newHeight);

    boundingBoxes[currentLabel] = {
        x: x,
        y: y,
        width: newWidth,
        height: newHeight
    }

    // LEFT

    currentLabel = 'left'
    aspectRatio = collagePieces[currentLabel].height / collagePieces[currentLabel].width;

    let distBetweenCanvasLeftAndMiddle = boundingBoxes['middle'].x - 0 - (canvasWidth * margin);

    dummyWidth = distBetweenCanvasLeftAndMiddle;
    dummyHeight = dummyWidth * aspectRatio;

    newWidth = dummyWidth * scaling;
    newHeight = dummyHeight * (newWidth / dummyWidth);


    validPosition = false;
    testCount = 0;

    maxOverlapX = 0.35;

    scalingConstraints = {
        min: 0.65,
        max: 0.85
    }

    while (!validPosition && testCount < maxTests) {

        newHeight = boundingBoxes['middle'].height * (Math.random() * (scalingConstraints.max - scalingConstraints.min) + scalingConstraints.min);

        newWidth = newHeight * (dummyWidth / dummyHeight);

        y = Math.random() * (boundingBoxes['middle'].height - newHeight) + boundingBoxes['middle'].y;

        x = boundingBoxes['middle'].x - newWidth;
        x += (newWidth * maxOverlapX * Math.random());

        // Check if the position is valid
        validPosition = true; // Replace this with your validation logic
        testCount++;
    }

    if (!validPosition) {
        console.error('Could not find a valid position');
        return;
    }


    // put a rect in the centre
    ctx.fillStyle = 'green';
    ctx.fillRect(x, y, newWidth, newHeight);

    boundingBoxes[currentLabel] = {
        x: x,
        y: y,
        width: newWidth,
        height: newHeight
    }



    // RIGHT

    currentLabel = 'right'
    aspectRatio = collagePieces[currentLabel].height / collagePieces[currentLabel].width;


    let distBetweenCanvasRightAndMiddle = canvasWidth - boundingBoxes['middle'].x - boundingBoxes['middle'].width - (canvasWidth * margin);

    dummyWidth = distBetweenCanvasRightAndMiddle;
    dummyHeight = dummyWidth * aspectRatio;

    newWidth = dummyWidth * scaling;
    newHeight = dummyHeight * (newWidth / dummyWidth);

    validPosition = false;
    testCount = 0;

    maxOverlapX = 0.65;

    scalingConstraints = {
        min: 0.65,
        max: 0.85
    }

    while (!validPosition && testCount < maxTests) {

        newHeight = boundingBoxes['middle'].height * (Math.random() * (scalingConstraints.max - scalingConstraints.min) + scalingConstraints.min);

        newWidth = newHeight * (dummyWidth / dummyHeight);

        y = Math.random() * (boundingBoxes['middle'].height - newHeight) + boundingBoxes['middle'].y;

        x = boundingBoxes['middle'].x + boundingBoxes['middle'].width;
        x -= (newWidth * maxOverlapX * Math.random());

        // Check if the position is valid
        validPosition = true; // Replace this with your validation logic
        testCount++;
    }

    if (!validPosition) {
        console.error('Could not find a valid position');
        return;
    }


    // put a rect in the centre
    ctx.fillStyle = 'purple';
    ctx.fillRect(x, y, newWidth, newHeight);

    boundingBoxes[currentLabel] = {
        x: x,
        y: y,
        width: newWidth,
        height: newHeight
    }



    // LOW

    currentLabel = 'low'
    aspectRatio = collagePieces[currentLabel].height / collagePieces[currentLabel].width;


    let distBetweenCanvasLowAndMiddle = (canvasHeight - boundingBoxes['middle'].y - boundingBoxes['middle'].height - ((canvasHeight * margin) / 2)) / 2;


    dummyHeight = distBetweenCanvasLowAndMiddle;
    dummyWidth = dummyHeight / aspectRatio;

    newHeight = dummyHeight * scaling;
    newWidth = dummyWidth * (newHeight / dummyHeight);

    validPosition = false;
    testCount = 0;

    maxOverlapY = 0.55;

    scalingConstraints = {
        min: 0.65,
        max: 0.85
    }

    while (!validPosition && testCount < maxTests) {

        newWidth = boundingBoxes['middle'].width * (Math.random() * (scalingConstraints.max - scalingConstraints.min) + scalingConstraints.min);

        newHeight = newWidth * (dummyHeight / dummyWidth);

        x = Math.random() * (boundingBoxes['middle'].width - newWidth) + boundingBoxes['middle'].x;

        y = boundingBoxes['middle'].y + boundingBoxes['middle'].height;
        y -= (newHeight * maxOverlapY * Math.random());

        // Check if the position is valid
        validPosition = true; // Replace this with your validation logic
        testCount++;
    }

    if (!validPosition) {
        console.error('Could not find a valid position');
        return;
    }

    // put a rect in the centre
    ctx.fillStyle = 'yellow';
    ctx.fillRect(x, y, newWidth, newHeight);

    boundingBoxes[currentLabel] = {
        x: x,
        y: y,
        width: newWidth,
        height: newHeight
    }



    // LOWLOW

    currentLabel = 'lowlow'
    aspectRatio = collagePieces[currentLabel].height / collagePieces[currentLabel].width;

    dummyHeight = distBetweenCanvasLowAndMiddle;
    dummyWidth = dummyHeight / aspectRatio;

    newHeight = dummyHeight * scaling;
    newWidth = dummyWidth * (newHeight / dummyHeight);


    validPosition = false;
    testCount = 0;

    maxOverlapY = 0.50;

    scalingConstraints = {
        min: 0.65,
        max: 0.85
    }

    while (!validPosition && testCount < maxTests) {

        newWidth = boundingBoxes['low'].width * (Math.random() * (scalingConstraints.max - scalingConstraints.min) + scalingConstraints.min);

        newHeight = newWidth * (dummyHeight / dummyWidth);

        x = Math.random() * (boundingBoxes['low'].width - newWidth) + boundingBoxes['low'].x;

        y = boundingBoxes['low'].y + boundingBoxes['low'].height;

        y -= (newHeight * maxOverlapY * Math.random());

        // Check if the position is valid
        validPosition = true; // Replace this with your validation logic
        testCount++;
    }



    // put a rect in the centre
    ctx.fillStyle = 'orange';
    ctx.fillRect(x, y, newWidth, newHeight);

    boundingBoxes[currentLabel] = {
        x: x,
        y: y,
        width: newWidth,
        height: newHeight
    }






    // move all the bounding boxes to 0,0 of the canvas
    // but keep the relative positions
    let boundingBoxesKeys = Object.keys(boundingBoxes);

    // get the lowest x and y
    let lowestX = Infinity;
    let lowestY = Infinity;

    for (let i = 0; i < boundingBoxesKeys.length; i++) {
        const key = boundingBoxesKeys[i];
        const boundingBox = boundingBoxes[key];

        if (boundingBox.x < lowestX) {
            lowestX = boundingBox.x;
        }

        if (boundingBox.y < lowestY) {
            lowestY = boundingBox.y;
        }
    }


    // move all the bounding boxes to 0,0 of the canvas
    // but keep the relative positions

    for (let i = 0; i < boundingBoxesKeys.length; i++) {
        const key = boundingBoxesKeys[i];
        const boundingBox = boundingBoxes[key];

        boundingBox.x -= lowestX;
        boundingBox.y -= lowestY;
    }


    let bufferCanvas = document.createElement('canvas');

    // calculate the total width and height of the bounding boxes
    // base this on the x and y of the bounding boxes in combination with the width and height
    let totalWidth = 0;
    let totalHeight = 0;

    let distanceBetweenLeftAndClosestImage = 0; // for translation
    let distanceBetweenTopRightAndClosestImage = 0; // for translation

    for (let i = 0; i < boundingBoxesKeys.length; i++) {
        const key = boundingBoxesKeys[i];
        const boundingBox = boundingBoxes[key];

        if (boundingBox.x + boundingBox.width > totalWidth) {
            totalWidth = boundingBox.x + boundingBox.width;
        }

        if (boundingBox.y + boundingBox.height > totalHeight) {
            totalHeight = boundingBox.y + boundingBox.height;
        }
    }

    bufferCanvas.width = totalWidth;
    bufferCanvas.height = totalHeight;

    console.log('totalWidth', totalWidth);
    console.log('totalHeight', totalHeight);

    let bufferCtx = bufferCanvas.getContext('2d');

    if (!bufferCtx) {
        console.error('no buffer ctx');
        return;
    }

    // draw the bounding boxes on the buffer canvas
    // but first make the background blue
    // also translate the x and y so the pieces are perfectly tight to the canvas
    // bufferCtx.fillStyle = 'blue';
    // bufferCtx.fillRect(0, 0, totalWidth, totalHeight);


    let order = ['middle', 'top', 'left', 'right', 'low', 'lowlow'];
    
    // shuffle
    order = order.sort(() => Math.random() - 0.5);

    for (let i = 0; i < order.length; i++) {
        const key = order[i];
        const boundingBox = boundingBoxes[key];

        let x = boundingBox.x;
        let y = boundingBox.y;

        bufferCtx.drawImage(collagePieces[key].img, x, y, boundingBox.width * scaling, boundingBox.height * scaling);
    }


    // // draw the buffer to an image and append to body
    // let img = new Image();
    // img.src = bufferCanvas.toDataURL();

    // collage_container.value?.appendChild(img);


    // scale the buffer canvas to the canvas
    // the max width or height should not cross the margin
    // scalle proportionally
    // center the buffer canvas in the canvas

    let scale = 1;
    margin = 0.05;
    if (totalWidth > canvasWidth - (canvasWidth * margin) || totalHeight > canvasHeight - (canvasHeight * margin)) {
        scale = Math.min((canvasWidth - (canvasWidth * margin)) / totalWidth, (canvasHeight - (canvasHeight * margin)) / totalHeight);
    }

    let scaledWidth = totalWidth * scale;
    let scaledHeight = totalHeight * scale;
    let scaledX = (canvasWidth - scaledWidth) / 2;
    let scaledY = (canvasHeight - scaledHeight) / 2;


    // clear the canvas
    ctx.fillStyle = 'gray';
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
    ctx.drawImage(bufferCanvas, scaledX, scaledY, scaledWidth, scaledHeight);



    return;


    // // draw the pieces on the canvas
    // // do that withing the bounding boxes
    // // scale them to fit the bounding boxes
    // // center them in the bounding boxes
    // // were starting with drawing the pieces on the x and y of the bounding boxes
    // // we need to scale them to fit the bounding boxes later
    // ctx.fillStyle = 'gray';
    // ctx.fillRect(0, 0, canvasWidth, canvasHeight);


    //     const order = ['middle', 'top', 'left', 'right', 'low', 'lowlow'];

    //     const sortedPieces = pieces.sort((a, b) => {
    //         return order.indexOf(a.label) - order.indexOf(b.label);
    //     });

    //     for (let i = 0; i < sortedPieces.length; i++) {
    //         const piece = sortedPieces[i];

    //         console.log('piece', piece, boundingBoxes[piece.label]);

    //         if (!boundingBoxes[piece.label]) {
    //             console.error('no bounding box for', piece.label);
    //             continue;
    //         }

    //         let pWidth = boundingBoxes[piece.label].width;
    //         let pHeight = piece.height * (pWidth / piece.width);

    //         if (pHeight > boundingBoxes[piece.label].height) {
    //             pHeight = boundingBoxes[piece.label].height;
    //             pWidth = piece.width * (pHeight / piece.height);
    //         }

    //         let x = boundingBoxes[piece.label].x;
    //         let y = boundingBoxes[piece.label].y;

    //         // put in the centre of the bounding box
    //         x += (boundingBoxes[piece.label].width - pWidth) / 2;
    //         y += (boundingBoxes[piece.label].height - pHeight) / 2;

    //         ctx.drawImage(piece.img, x, y, pWidth, pHeight);
    //     }




}









</script>


<template>

    <button @click="makeCollage">Make Collage</button>
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