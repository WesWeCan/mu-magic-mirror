<script setup lang="ts">

import { CameraProcessor } from '@/Lib/CameraProcessor';
import { CutoutRaw } from '@/types/PoolTypes';




import { onMounted, ref } from 'vue';

const cp = new CameraProcessor();


const video_container = ref<HTMLDivElement | null>(null);
const div_process = ref<HTMLDivElement | null>(null);


const emit = defineEmits(['newSlice']);


onMounted(async () => {


    if (video_container.value && div_process.value) {
        await cp.init(video_container.value, div_process.value);

        div_process.value.addEventListener('click', (e) => {
            const slice = cp.takePictureAndSlice()
                .then((res) => {

                    if (res != null) {
                        emit('newSlice', res);
                    }

                })

        });

        requestAnimationFrame(draw);
    }

});


const draw = async () => {
    if (video_container.value && div_process.value) {
        // cp.readAndDrawSegmented();
        await cp.loop();
        requestAnimationFrame(draw);
    }
}






const cutOuts = ref<CutoutRaw[]>([]);

const takePicture = () => {
    // cp.takePictureAndProcess()
    //     .then((res) => {
    //         console.log(res);

    //         cutOuts.value = res;

    //     })
    //     .catch((err) => {
    //         console.log(err);
    //     });
}




</script>


<template>

    <div ref="video_container" class="video-container"></div>
    <div ref="div_process" class="div-process"></div>

    <div v-for="cutOut in cutOuts" :key="cutOut.part">
        <img :src="cutOut.img" :alt="cutOut.part" />
    </div>

</template>
