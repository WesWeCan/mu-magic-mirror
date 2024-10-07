<script setup lang="ts">

import { nextTick, onMounted, onUnmounted, provide, ref, watch } from 'vue';
import { Link, usePage } from '@inertiajs/vue3';

import MorphingCamera from '@/Components/Morphing/MorphingCamera.vue';

import { CutoutRaw } from '@/types/PoolTypes';
import { Head } from "@inertiajs/vue3";

import ChangingTitle from '@/Components/Morphing/ChangingTitle.vue';

const page = usePage();

const slices = ref<CutoutRaw[]>([]);
const currentScreen = ref("welcome")

const cameraRef = ref<null | InstanceType<typeof MorphingCamera>>(null);

const language = ref('en');

provide('language', language);

const changeLanguage = () => {
    if (language.value === 'en') {
        language.value = 'nl';
    }
    else {
        language.value = 'en';
    }
}

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

const currentTime = ref<string>(new Date().toLocaleString(language.value, options));

declare global {
    interface Window {
        morphingLanguage: string;
    }
}

watch(language, (newLang) => {
    currentTime.value = new Date().toLocaleString(newLang, options);
    window.morphingLanguage = newLang;
});

setInterval(() => {
    currentTime.value = new Date().toLocaleString(language.value, options);
    window.morphingLanguage = language.value;
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


const creditsModal = ref(false);

const closeCredits = () => {
    creditsModal.value = false;
}




</script>


<template>

    <Head title="Magic MUrror"></Head>

    <div class="morphing-mirror-layout">

        <header>
            <button @click="changeLanguage">{{ language.toUpperCase() }}</button>
        </header>

        <main>
            <div class="screen welcome" :hidden="currentScreen != 'welcome'">

                <div class="content">


                    <template v-if="language === 'en'">
                        <p>Hi there!</p>

                        <p>Welcome to MU Hybrid Art House and to the <ChangingTitle :titles="['MU', 'Magic', 'Mirror']">
                            </ChangingTitle> app!</p>
                        <p>Pose to compose - use your phone's camera (front or back doesn't matter) to take a posed
                            portrait
                            of yourself or someone else, preferably full-length. Press the button and within seconds the
                            photo is mirrored exquisitely with poses of people and non-people in the extensive MU Hybrid
                            ArcHive.</p>
                        <p>Play alone or with friends, take pronounced poses and get your hybrid mirror image back in
                            your
                            Magic MU Mirror. Freeze the collage and view the original context of the retrieved images.
                        </p>

                        <p>We invite you to share your collages on Instagram with the tag #MUMagicMirror to create a
                            collective online exhibition of exhibits - a phantasmagoric gallery of hybrid creatures.</p>

                        <p>Thanks for mirroring at MU!</p>
                        <p>Love, MU.</p>
                    </template>
                    <template v-else-if="language === 'nl'">
                        <p>Hi there!</p>
                        <p>Welkom bij MU Hybrid Art House en bij de <ChangingTitle :titles="['MU', 'Magic', 'Mirror']">
                            </ChangingTitle>
                        </p>
                        <p>Poseer om te componeren - maak met de camera van je telefoon (voor of achter maakt niet uit)
                            een geposeerd portret van jezelf of iemand anders, bij voorkeur ten voeten uit. Druk op de
                            knop en binnen een paar tellen wordt de foto gespiegeld met poses van mensen en niet-mensen
                            in het uitgebreide MU Hybrid ArcHive.</p>
                        <p>Speel alleen of met vrienden, neem uitgesproken poses aan en krijg je hybride spiegelbeeld
                            terug in je Magic MU Mirror. Bevries de collage en bekijk de originele context van de
                            opgehaalde afbeeldingen.</p>

                        <p>We nodigen jullie uit om jullie collages te delen op Instagram met de tag #MUMagicMirror om
                            zo een collectieve online expositie van exposities te maken - een fantasmagorische galerie
                            van hybride wezens.</p>

                        <p>Bedankt voor het spiegelen bij MU!</p>
                        <p>Liefs, MU.</p>




                    </template>
                    <button @click="start">Start</button>

                    <button class="credits-button" @click="creditsModal = true">Credits</button>

                    <div class="credits-modal" :class="{ 'active': creditsModal }">
                        <h2>Credits</h2>
                        <template v-if="language === 'en'">

                            <p>
                                <ChangingTitle :titles="['MU', 'Magic', 'Mirror']"></ChangingTitle> is commissioned by
                                MU Hybrid Art House to be part of the digital extension of their physical space and
                                connecting to the living MU Hybrid ArcHive.
                            </p>
                            <p>The project is creatively developed by Alice Wong and Arthur Roeloffzen, and technically
                                programmed by Wesley Hartogs.</p>
                            <p>
                                <ChangingTitle :titles="['MU', 'Magic', 'Mirror']"></ChangingTitle> is funded with the
                                generous support of FONDS21 EXTRA
                            </p>
                            <button @click="creditsModal = false">Close</button>
                        </template>
                        <template v-else-if="language === 'nl'">
                            <p>
                                <ChangingTitle :titles="['MU', 'Magic', 'Mirror']"></ChangingTitle> is gemaakt in
                                opdracht van MU Hybrid Art House om deel uit te maken van de digitale uitbreiding van
                                hun fysieke ruimte en verbinding te maken met het levende MU Hybrid ArcHive.
                            </p>
                            <p>Het project is creatief ontwikkeld door Alice Wong en Arthur Roeloffzen en technisch
                                geprogrammeerd door Wesley Hartogs.</p>
                            <p>
                                <ChangingTitle :titles="['MU', 'Magic', 'Mirror']"></ChangingTitle> is mede mogelijk
                                gemaakt met de genereuze steun van FONDS21 EXTRA.
                            </p>
                            <button @click="creditsModal = false">Sluit</button>
                        </template>
                    </div>

                </div>
            </div>


            <div class="screen" :hidden="currentScreen != 'camera'" v-if="currentScreen == 'camera'">
                <MorphingCamera ref="cameraRef" @update-list="updateList"></MorphingCamera>
                <div class="camera-selector" v-if="showCameraSelector" ref="cameraSelector">
                    <select :value="cameraRef?.currentVideoDeviceId"
                        @change="($event: any) => { cameraRef?.switchDeviceTo($event.target.value); showCameraSelector = false }"
                        v-if="cameraRef?.availableVideoDevices">
                        <option v-for="device in cameraRef?.availableVideoDevices" :key="device.device.deviceId"
                            :value="device.device.deviceId">
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
                    <button @click="() => { showCameraSelector = !showCameraSelector; cameraSelector?.click() }"
                        :onblur="(event: any) => { event.preventDownshiftDefault = true; }"
                        class="icon_switch">&nbsp;</button>
                    <!-- <button @click="switchDevice" class="icon_switch">&nbsp;</button>  -->
                    <button @click="takePicture" class="icon_photo">&nbsp;</button>
                </div>
                <div class="group" v-if="currentScreen != 'welcome'">
                    <button @click="showList = false" class="icon_image" :class="{ 'light': !showList }">&nbsp;</button>
                    <button @click="showList = !showList" class="icon_list"
                        :class="{ 'light': showList }">&nbsp;</button>
                </div>
                <div class="group" v-if="currentScreen != 'welcome'">
                    <button @click="downloadImage" class="icon_download" :class="{ 'light': showList }"
                        :disabled="showList">&nbsp;</button>
                    <button @click="shareImage" class="icon_share" :class="{ 'light': showList }"
                        :disabled="showList">&nbsp;</button>
                </div>
            </div>

            <span class="title">
                <strong>
                    <ChangingTitle :titles="['MU', 'Magic', 'Mirror']"></ChangingTitle>
                </strong>
                <span>{{ currentTime }}</span>
            </span>
        </footer>
    </div>
</template>