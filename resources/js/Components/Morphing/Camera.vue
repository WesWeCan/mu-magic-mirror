<script setup lang="ts">

import { CameraProcessor } from '@/Lib/CameraProcessor';

type cutOut = {
    part: string,
    img: string
}


import { onMounted, ref } from 'vue';

const cp = new CameraProcessor();


const video_container = ref<HTMLDivElement | null>(null);
const div_process = ref<HTMLDivElement | null>(null);


onMounted(async () => {


    if (video_container.value && div_process.value){
        await cp.init(video_container.value, div_process.value);

        requestAnimationFrame(draw);
    }

});


const draw = () => {
    if (video_container.value && div_process.value){
        cp.readAndDrawSegmented();
        requestAnimationFrame(draw);
    }

    

}




const cutOuts = ref<cutOut[]>([]);

const takePicture = () => {
    cp.takePictureAndProcess()
    .then((res) => {
        console.log(res);

        cutOuts.value = res;

    })
    .catch((err) => {
        console.log(err);
    });
}




</script>


<template>
 
    <div ref="video_container" class="video-container">
    </div>

    

    <div ref="div_process" class="div-process">
    </div>

    <button @click="takePicture">Make Photo</button>
    <div v-for="cutOut in cutOuts" :key="cutOut.part">
        <img :src="cutOut.img" :alt="cutOut.part" />
    </div>

    

    </template>



<style scoped>
    video {
        display: none!important;
    }


    button {
        margin-top: 20px;
        background-color: #4CAF50;
        border: none;
        color: white;
        padding: 15px 32px;


    }

    </style>