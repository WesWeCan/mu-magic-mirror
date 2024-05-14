<script setup lang="ts">

import { nextTick, onMounted, onUnmounted, ref } from 'vue';
import { Link, usePage } from '@inertiajs/vue3';

import Camera from '@/Components/Morphing/Camera.vue';

import { MagicMirror } from '@/Lib/Mirror'

const mirror = new MagicMirror();


const collage_container = ref<HTMLDivElement | null>(null);

import { CreateCollage } from '@/Lib/CreateCollage';
import { CutoutRaw } from '@/types/PoolTypes';
import { BoundingBox } from '@/types';
import { createCollageBoundingBoxes } from '@/Lib/createCollageBoundingBoxes';


const page = usePage();

const maxSlices = 3;
const slices = ref<CutoutRaw[]>([]);
const currentScreen = ref("camera")




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


const collageProcessing = ref(false);

const makeCollage = async () => {

    if (collageProcessing.value) {
        return;
    }

    collageProcessing.value = true;

    if (!collage_container.value) {
        console.error('no collage container');
        return;
    }

    if (!page.props.corpse) {
        console.error('no corpse');
        return;
    }


    let container = document.getElementById('canvas_process');

    if (!container) {
        console.error('no container');
        return;
    }

    let startingSize = {
        x: container.offsetWidth,
        y: container.offsetHeight
    }

    await CreateCollage(page.props.corpse, collage_container.value, slices.value, startingSize);
    currentScreen.value = 'collage';

    collageProcessing.value = false;

}


const addSlice = (slice: CutoutRaw) => {

    slices.value.unshift(slice);

    if (slices.value.length > maxSlices) {
        slices.value.pop();
    }
}


const reload = () => {
    window.location.reload();
}



const pictureTaken = async (boundingBoxes : BoundingBox[]) => {

    console.log('picture taken', boundingBoxes);

    if (collageProcessing.value) {
        return;
    }

    collageProcessing.value = true;

    if (!collage_container.value) {
        console.error('no collage container');
        return;
    }

    if (!page.props.corpse) {
        console.error('no corpse');
        return;
    }


    let container = document.getElementById('canvas_process');

    if (!container) {
        console.error('no container');
        return;
    }

    let startingSize = {
        x: container.offsetWidth,
        y: container.offsetHeight
    }

    await createCollageBoundingBoxes(page.props.corpse, collage_container.value, boundingBoxes, startingSize);
    currentScreen.value = 'collage';

    collageProcessing.value = false;

}


</script>


<template>

    <div class="morphing-mirror-layout">

        <header>
            <h1>MU - Morphing Mirror</h1>
        </header>

        <main>
            <div class="screen" :hidden="currentScreen != 'camera'">

                <span class="hint">
                    Click on the video to capture a slice
                </span>

                <Camera @new-slice="addSlice" @picture-taken="pictureTaken"></Camera>

                <div class="slices" v-if="slices.length">
                    <div v-for="slice in slices" :key="slice.part" class="slice"
                        :style="`background-image: url('${slice.img}')`">
                    </div>
                </div>

                <button v-if="slices.length" class="collage-button" @click="makeCollage">Make Collage</button>

            </div>




            <div class="screen" :hidden="currentScreen != 'collage'">
                <div ref="collage_container" class="collage collage-container"></div>

                <!-- <button v-if="slices.length" class="redo-button" @click="currentScreen = 'camera'">Start Over</button> -->

                <button v-if="slices.length" class="redo-button" @click="currentScreen = 'camera'">Go back</button>

                <button v-if="slices.length" class="start-over-button" @click="reload()">Start over with new corpse</button>

                <button v-if="slices.length" class="list-button" @click="currentScreen = 'list'">List</button>
            </div>
            <div class="screen" :hidden="currentScreen != 'list'">

                <div class="list-container">
                    <h2>Used slices</h2>

                    <div v-for="corpse in page.props.corpse" :key="corpse.id" v-if="page.props.corpse" class="list-item">
                        <span>
                            Name:<br />
                            {{ corpse.base_image.name ?? 'no name' }}
                        </span>
                        <span>
                            Link:
                            {{ corpse.base_image.link ?? 'no link' }}
                        </span>
                    </div>
                </div>


                <button v-if="slices.length" class="list-button" @click="currentScreen = 'collage'">Go Back</button>

            </div>


        </main>



        <footer>(alpha test)</footer>

    </div>





</template>