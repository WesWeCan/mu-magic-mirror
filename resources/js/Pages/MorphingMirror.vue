<script setup lang="ts">

import { nextTick, onMounted, onUnmounted, ref } from 'vue';
import { Link, usePage } from '@inertiajs/vue3';

import Camera from '@/Components/Morphing/Camera.vue';

import { MagicMirror } from '@/Lib/Mirror'

const mirror = new MagicMirror();

const video_container = ref<HTMLDivElement | null>(null);
const div_process = ref<HTMLDivElement | null>(null);
const div_result = ref<HTMLDivElement | null>(null);


const collage_container = ref<HTMLDivElement | null>(null);

import { CreateCollage } from '@/Lib/CreateCollage';
import { CutoutRaw } from '@/types/PoolTypes';


const page = usePage();

const maxSlices = 3;
const slices = ref<CutoutRaw[]>([]);



onMounted(async () => {

    // add class to body 'mirror'
    document.body.classList.add('mirror');

    await nextTick();

    // console.log('page.props.corpse', page.props.corpse);

    // makeCollage();


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

    CreateCollage(page.props.corpse, collage_container.value, slices.value);

}


const addSlice = (slice: CutoutRaw) => {

    slices.value.unshift(slice);

    if (slices.value.length > maxSlices) {
        slices.value.pop();
    }
}





</script>


<template>


    <Camera @new-slice="addSlice" ></Camera>
    <div v-for="slice in slices" :key="slice.part">
        <img :src="slice.img" alt="slice.part" loading="lazy">
    </div>


    <button @click="makeCollage">Make Collage</button>


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