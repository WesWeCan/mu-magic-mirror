<script setup lang="ts">


import { computed, onMounted, onUnmounted, ref } from 'vue';

import { BaseImage, Cutout, CutoutRaw, ProcesImage } from '@/types/PoolTypes';


import PoolLayout from '@/Layouts/PoolLayout.vue';

import BaseImageDetails from '@/Components/Pool/BaseImageDetails.vue';

import ImageSlicer from '@/Components/Pool/ImageSlicer.vue';
import { usePage } from '@inertiajs/vue3';

import axios from 'axios';



const page = usePage();


const allowedLabels = [
            "head",
            "torso",
            "right_arm",
            "left_arm",
            "right_leg",
            "left_leg",
            "right_hand",
            "left_hand",
            "right_foot",
            "left_foot",
            "legs",
            "hair"
        ];


const procesImages = ref<ProcesImage[]>([]);

const readyForProcessing = ref(false);


onMounted(async () => {

    console.log('page', page.props.baseImages)

    if (!page.props.baseImages) {
        return;
    }

    procesImages.value = page.props.baseImages.map((baseImage: BaseImage) => {

        return {
            baseImage,
            isProcessed: false,
            isUploaded: false,
            cutouts: []
        }

    });

    readyForProcessing.value = true;


});



const upload = async (processedImage: ProcesImage) => {

    console.log('uploading', processedImage);

    if(!canProcessBecauseOfLabels.value) {
        
        if (confirm('This image does not have any slices yet, do you still want to process it?') === true) {

            markAsProcessed(processedImage);
            return;
        }
        else {
            return;
        }

        return;
        
    }


    for (let i = 0; i < processedImage.cutouts.length; i++) {

        // if (!processedImage.cutouts[i].included) {
        //     continue;
        // }
        const cutout = processedImage.cutouts[i];

        const formData = new FormData();
        formData.append('base_image_id', processedImage.baseImage.id.toString());
        formData.append('label', cutout.part);



        const file = await fetch(cutout.img)
            .then((response) => {
                return response.blob();
            })
            .then((blob) => {
                return new File([blob], `${cutout.part}.png`, {
                    type: 'image/png'
                });
            });

        formData.append('image', file);
        formData.append('included', cutout.included ? '1' : '0');

        try {
            await axios.post(route('pool.mask.upload'), formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
                .then((response) => {
                    console.log(response.data);
                });


            // await 100ms
            await new Promise((resolve) => {
                setTimeout(() => {
                    resolve(true);
                }, 100);
            });

        } catch (error) {
            console.error(error);
        }

    }

    markAsProcessed(processedImage);


}


const markAsProcessed = async (processedImage: ProcesImage) => {

    axios.post(route('pool.markasprocessed', processedImage.baseImage.id))
        .then((response) => {
            console.log(response.data);
        });

    processedImage.isProcessed = true;

    // remove the image from the list
    procesImages.value.splice(procesImages.value.indexOf(processedImage), 1);

}


const UploadAll = async () => {
    if (confirm('Are you sure you want to process all images? Wait for the alert to come when it is finished.') === false) {
        return;
    }

    for (let i = 0; i < procesImages.value.length; i++) {
        await upload(procesImages.value[i]);
        procesImages.value[i].isUploaded = true;
    }
    alert('All images processed and uploaded');
}


const addCutout = (cutout: CutoutRaw) => {

    console.log('cutout', cutout);

    const currentImage = procesImages.value[currentIndexOfImage.value];

    currentImage.cutouts.push({
        part: cutout.part,
        img: cutout.img,
        included: true
    });


}



const currentIndexOfImage = ref(0);



const canProcess = computed(() => {
    const currentImage = procesImages.value[currentIndexOfImage.value];
    return currentImage.cutouts.length > 0 && currentImage.cutouts.every((cutout) => {
        return allowedLabels.includes(cutout.part);
    });
});

const canProcessBecauseOfLabels = computed(() => {
    const currentImage = procesImages.value[currentIndexOfImage.value];
    return currentImage.cutouts.length > 0 && currentImage.cutouts.every((cutout) => {
        return allowedLabels.includes(cutout.part);
    });
});

const canProcessBecauseOfCutouts = computed(() => {
    const currentImage = procesImages.value[currentIndexOfImage.value];
    return currentImage.cutouts.length > 0;
});


</script>

<template>

    <PoolLayout>

        <div>
            <h1>Pool Slicer</h1>
            <span>{{ procesImages.length }} to be processed</span>
        </div>

        
        <ImageSlicer

        v-if="readyForProcessing && procesImages.length > 0"
        
        :base-image="procesImages[currentIndexOfImage].baseImage"

        @cutout="addCutout($event)"

        ></ImageSlicer>

        <div class="processor">
            <div class="processor-images">

                <template v-for="(image, index) in procesImages" :key="image.baseImage.id">
                    <div class="processor-image" v-if="index == currentIndexOfImage">

                        <baseImageDetails :baseImage="image.baseImage"
                        @deleted="(procesImages).splice(index, 1)"
                        ></baseImageDetails>

                        <div class="cutouts">
                            <h2>Cutouts</h2>
                            <div v-for="cutout in image.cutouts" :key="cutout.part" class="cutout"
                                :class="{ 'included': cutout.included }"
                                :hint="`${cutout.included ? 'Included' : 'Not Included'}`"
                               >
                                <div class="cutout-img">
                                    <img :src="cutout.img" alt="cutout.title">
                                </div>

                                <div class="cutout-actions">
                                    
                                    <div class="label-wrap">
                                    <label>Label</label>
                                    <select v-model="cutout.part">
                                        <option v-for="label in allowedLabels" :key="label" :value="label">{{ label }}</option>
                                    </select>
                                    </div>


                                    <button @click="image.cutouts.splice(image.cutouts.indexOf(cutout), 1)" class="danger"
                                    >Remove Slice</button>

                                </div>
                                
                            </div>
                            <strong v-if="!image.cutouts.length">No slices yet</strong>
                            
                        </div>

                        <div class="actions">
                            <button @click="upload(image)" class="success" v-if="!canProcessBecauseOfCutouts">Process as empty</button>
                            <button @click="upload(image)" class="success" v-if="canProcessBecauseOfCutouts" :disabled="!canProcessBecauseOfLabels">Process Slices</button>

                            <br/><br/>

                            <button @click="currentIndexOfImage = index - 1" v-if="index > 0" class="prev">Prev
                            </button>

                            <br/>
                            <button @click="currentIndexOfImage = index + 1" v-if="index < procesImages.length - 1"
                                class="next">Next</button>
                        </div>
                    </div>
                </template>
            </div>
        </div>
    </PoolLayout>

</template>