<script setup lang="ts">

import { nextTick, onMounted, onUnmounted, ref } from 'vue';
import { Link, usePage } from '@inertiajs/vue3';

import MorphingCamera from '@/Components/Morphing/MorphingCamera.vue';

import { CutoutRaw } from '@/types/PoolTypes';
import { Head } from "@inertiajs/vue3";

const page = usePage();

const slices = ref<CutoutRaw[]>([]);
const currentScreen = ref("welcome")

const cameraRef = ref<null | InstanceType<typeof MorphingCamera>>(null);

onMounted(async () => {
    document.body.classList.add('mirror');

    await nextTick();
});

onUnmounted(() => {
    // remove class from body 'mirror'
    document.body.classList.remove('mirror');
});


const reload = () => {
    window.location.reload();
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



        if (item.name == null || item.name.length <= 0) {
            item.name = "[Unknown Base Image]";
        }

        piecesList.value.push({
            id: item.id,
            random: randomId,
            name: item.name,
            link: item.link
        });
    });
}



const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    hour: '2-digit',
    minute: '2-digit'
};

const currentTime = ref<string>(new Date().toLocaleString('en-GB', options));

setInterval(() => {
    currentTime.value = new Date().toLocaleString('en-GB', options);
}, 1000);


const showCameraSelector = ref(false);
const cameraSelector = ref<HTMLDivElement | null>(null);

/**
 * Removes ID information from a given device label string.
 *
 * The ID information is expected to be in the format (id:id) and will
 * be removed from the input label string.
 *
 * @param {string} label - The label string from which the ID information will be removed.
 * @returns {string} - The modified label string with the ID information removed.
 */
const removeIdFromLabel = (label: string): string => {
    return label.replace(/\(\w+:\w+\)/, '').trim();
}


</script>


<template>

    <Head title="Morphing Mirror"></Head>

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
                <br /><br />
                <small>
                    We won't store any images of you without your permission.
                </small>
            </div>


            <div class="screen" :hidden="currentScreen != 'camera'" v-if="currentScreen == 'camera'">
                <MorphingCamera ref="cameraRef" @update-list="updateList"></MorphingCamera>
                <div class="camera-selector" v-if="showCameraSelector" ref="cameraSelector">
                    <select :value="cameraRef?.currentVideoDeviceId" @change="($event : any) => {cameraRef?.switchDeviceTo( $event.target.value ); showCameraSelector = false }" v-if="cameraRef?.availableVideoDevices">
                        <option v-for="device in cameraRef?.availableVideoDevices" :key="device.device.deviceId" :value="device.device.deviceId">
                            {{ removeIdFromLabel(device.device.label) }}
                        </option>
                    </select>
                </div>
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
                    <button @click="()=>{showCameraSelector = !showCameraSelector; cameraSelector?.click()}"
                        :onblur="(event : any) => {event.preventDownshiftDefault = true; }"
                        class="icon_switch">&nbsp;</button>
                    <!-- <button @click="switchDevice" class="icon_switch">&nbsp;</button>  -->
                    <button @click="takePicture" class="icon_photo">&nbsp;</button>
                </div>
                <div class="group" v-if="currentScreen != 'welcome'">
                    <button @click="showList = !showList" class="icon_list" :class="{ 'light': !showList }">&nbsp;</button>
                    <button @click="showList = false" class="icon_image" :class="{ 'light': showList }">&nbsp;</button>
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