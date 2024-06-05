<script setup lang="ts">

import { CameraProcessor } from '@/Lib/CameraProcessor';
import { CutoutRaw } from '@/types/PoolTypes';
import { usePage } from '@inertiajs/vue3';
import { onMounted, ref } from 'vue';


const page = usePage();
const cp = new CameraProcessor();


const video_container = ref<HTMLDivElement | null>(null);
const div_process = ref<HTMLDivElement | null>(null);
const div_render= ref<HTMLDivElement | null>(null);


const emit = defineEmits(['newSlice', 'pictureTaken', "updateList"]);


onMounted(async () => {

    console.log('mounted Camera.vue', page.props.corpses);


    if (video_container.value && div_process.value && div_render.value && page.props.corpses) {
        await cp.init(video_container.value, div_process.value, div_render.value, page.props.corpses);

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

        if(cp.running){
            emit('updateList', cp.currentlyShownPieces);
        }

        requestAnimationFrame(loop);
    }
}

const cutOuts = ref<CutoutRaw[]>([]);

const switchDevice = () => {
    cp.switchVideoDevice();
}


const takePhoto = () => {
    console.log('take photo');


    cp.togglePicture();

    // console.log('making collage with ', cp.boundingBoxesProcessed);
    // emit('pictureTaken', cp.boundingBoxesProcessed);
}


const downloadImage = () => {
    cp.downloadImage();
}

const shareImage = () => {
    cp.shareImage();
}


defineExpose({
    takePhoto,
    switchDevice,
    downloadImage,
    shareImage
});


</script>


<template>

    <div ref="video_container" class="video-container"></div>
    <div ref="div_process" class="div-process"></div>

    <div ref="div_render" class="div-render">
        <span class="loading">Loading...</span>
    </div>

    <!-- <button class="switch-device-button" @click="switchDevice">Switch Device</button> -->

    <!-- <div class="take-photo-button" @click="takePhoto">Take Photo</div> -->

    <div v-for="cutOut in cutOuts" :key="cutOut.part">
        <img :src="cutOut.img" :alt="cutOut.part" />
    </div>

</template>
