<script setup lang="ts">

import { nextTick, onMounted, onUnmounted, ref } from 'vue';
import { Link, usePage } from '@inertiajs/vue3';


import { MagicMirror } from '@/Lib/Mirror'

const mirror = new MagicMirror();

const video_container = ref<HTMLDivElement | null>(null);
const div_process = ref<HTMLDivElement | null>(null);
const div_result = ref<HTMLDivElement | null>(null);

const page = usePage();

onMounted(async () => {

    // add class to body 'mirror'
    document.body.classList.add('mirror');


    console.log(page.props.corpse);


    await nextTick();

    if (video_container.value && div_process.value && div_result.value){
       await mirror.init(video_container.value, div_process.value, div_result.value);
       await mirror.loadCorpse(page.props.corpse);

       requestAnimationFrame(draw);
    }



});

onUnmounted(() => {
    // remove class from body 'mirror'
    document.body.classList.remove('mirror');
});



const draw = async () => {
    if (video_container.value && div_process.value && div_result.value){
        await mirror.readAndDrawPose();
    }


    requestAnimationFrame(draw);
}


</script>


<template>


<div class="video_containter" ref="video_container"></div>
<div class="process_containter" ref="div_process"></div>
<div class="result_containter" ref="div_result"></div>
    



<div v-for="corpse in page.props.corpse" :key="corpse.id">
    Name:
    {{ corpse.base_image.name }}

    <br />
    Link:
    {{ corpse.base_image.link }}

    <br />
    <br />

</div>



</template>