<script setup lang="ts">

import { CameraProcessor } from '@/Lib/CameraProcessor';
import { CutoutRaw } from '@/types/PoolTypes';




import { onMounted, ref } from 'vue';

const cp = new CameraProcessor();


const video_container = ref<HTMLDivElement | null>(null);
const div_process = ref<HTMLDivElement | null>(null);
const div_render= ref<HTMLDivElement | null>(null);


const emit = defineEmits(['newSlice', 'pictureTaken']);


onMounted(async () => {


    if (video_container.value && div_process.value && div_render.value) {
        await cp.init(video_container.value, div_process.value, div_render.value);

        // div_process.value.addEventListener('click', (e) => {
        //     const slice = cp.takePictureAndSlice()
        //         .then((res) => {

        //             if (res != null) {
        //                 emit('newSlice', res);
        //             }

        //         })

        // });

        requestAnimationFrame(loop);
    }

});


const loop = async () => {
    if (video_container.value && div_process.value) {
        await cp.loop();
        requestAnimationFrame(loop);
    }
}

const cutOuts = ref<CutoutRaw[]>([]);

const switchDevice = () => {
    cp.switchVideoDevice();
}


const takePhoto = () => {
    console.log('take photo');

    console.log(cp.boundingBoxes);
    emit('pictureTaken', cp.boundingBoxes);
}

</script>


<template>

    <div ref="video_container" class="video-container"></div>
    <div ref="div_process" class="div-process"></div>

    <div ref="div_render" class="div-render"></div>

    <button class="switch-device-button" @click="switchDevice">Switch Device</button>

    <div class="take-photo-button" @click="takePhoto">Take Photo</div>

    <div v-for="cutOut in cutOuts" :key="cutOut.part">
        <img :src="cutOut.img" :alt="cutOut.part" />
    </div>

</template>
