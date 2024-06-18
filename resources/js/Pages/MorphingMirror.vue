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
const currentScreen = ref("welcome")

const cameraRef = ref<null | InstanceType<typeof Camera>>(null);


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



const pictureTaken = async (boundingBoxes: BoundingBox[]) => {

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




const takePicture = () => {
    console.log('take picture');


    if (cameraRef.value) {
        cameraRef.value.takePhoto();
    }

}

const switchDevice = () => {
    console.log('switch device');

    if (cameraRef.value) {
        cameraRef.value.switchDevice();
    }
}


const downloadImage = () => {
    console.log('download image');

    if (cameraRef.value) {
        cameraRef.value.downloadImage();
    }
}

const shareImage = () => {
    console.log('share image');

    if (cameraRef.value) {
        cameraRef.value.shareImage();
    }
}


const start = () => {
    currentScreen.value = 'camera';
}


const showList = ref(false);

interface listItem {
    id: number;
    random: number;
    name: string;
    link: string;
}

const piecesList = ref<listItem[]>([]);

const updateList = (list: any) => {
    piecesList.value = [];

    Object.keys(list).forEach((key) => {
        let item = list[key].baseImage;

        let randomId = Math.floor(Math.random() * 10000000);

        piecesList.value.push({
            id: item.id,
            random: randomId,
            name: item.name,
            link: item.link
        });
    });
}



const options = { weekday: 'long', day: 'numeric', month: 'long', hour: '2-digit', minute: '2-digit' };

const currentTime = ref(new Date().toLocaleString('en-GB', options));

setInterval(() => {
    currentTime.value = new Date().toLocaleString('en-GB', options);
}, 1000);


</script>


<template>

    <div class="morphing-mirror-layout">

        <header>
            <!-- <h1>MU - Morphing Mirror</h1> -->
        </header>

        <main>
            <div class="screen welcome" :hidden="currentScreen != 'welcome'">

                <p>Welcome!</p>
                <p>Use your body to explore our archive.</p>
                <p>The Magic MUrror will match your pose with images of our archive</p>
                <p>Love, MU.</p>

                <button @click="start">Start</button>

                <br/><br/>
                <small>
                    We won't store any images of you without your permission.
                </small>
            </div>


            <div class="screen" :hidden="currentScreen != 'camera'" v-if="currentScreen == 'camera'">

                <Camera ref="cameraRef" @update-list="updateList" @picture-taken="pictureTaken"></Camera>

                <div class="slices" v-if="slices.length">
                    <div v-for="slice in slices" :key="slice.part" class="slice"
                        :style="`background-image: url('${slice.img}')`">
                    </div>
                </div>

                <button v-if="slices.length" class="collage-button" @click="makeCollage">Make Collage</button>

            </div>




            <div class="screen" :hidden="currentScreen != 'collage'">
                <div ref="collage_container" class="collage collage-container"></div>

                <button v-if="slices.length" class="redo-button" @click="currentScreen = 'camera'">Start Over</button>

                <button v-if="slices.length" class="redo-button" @click="currentScreen = 'camera'">Go back</button>

                <button v-if="slices.length" class="start-over-button" @click="reload()">Start over with new
                    corpse</button>

                <button v-if="slices.length" class="list-button" @click="currentScreen = 'list'">List</button>
            </div>


            <div class="screen" :hidden="!showList">

                <div class="list-container">
                    
                    <div v-for="listItem in piecesList" :key="listItem.random" v-if="piecesList">
                        <a :href="listItem.link" target="_blank">{{ listItem.name }}</a>
                    </div>
                </div>


                <button v-if="slices.length" class="list-button" @click="currentScreen = 'collage'">Go Back</button>

            </div>


        </main>



        <footer>

            <div class="nav">
                <div class="group" v-if="currentScreen != 'welcome'">
                    <button @click="takePicture" class="icon_photo">&nbsp;</button>
                    <button @click="switchDevice" class="icon_switch">&nbsp;</button>
                </div>
                <div class="group" v-if="currentScreen != 'welcome'">
                    <button @click="showList = false" class="icon_image" :class="{'light' : showList}">&nbsp;</button>
                    <button @click="showList = !showList" class="icon_list" :class="{'light' : !showList}">&nbsp;</button>
                </div>
                <div class="group" v-if="currentScreen != 'welcome'">
                    <button @click="downloadImage" class="icon_download">&nbsp;</button>
                    <button @click="shareImage" class="icon_share">&nbsp;</button>
                </div>
            </div>

            <span class="title">
                <strong>Magical Morphing MUrror</strong>
                <span>{{ currentTime }}</span>
            </span>

        </footer>

    </div>





</template>