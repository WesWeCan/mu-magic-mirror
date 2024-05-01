<script setup lang="ts">


import { onMounted, onUnmounted, ref } from 'vue';

import PoolLayout from '@/Layouts/PoolLayout.vue';

import { ImageProcessor } from '@/Lib/Processor';
import { usePage } from '@inertiajs/vue3';

import axios from 'axios';

const fileName = (path: string) => {
    return path.split('/').pop() ?? '';
};


const processor = new ImageProcessor();



const page = usePage();


interface BaseImage {

    id: number;
    link: string | null;
    name: string | null;
    path: string;
    error?: string;
    created_at: string;
    updated_at: string;

}

interface Cutout {
    img: string;
    part: string;
    included: boolean;
}

type CutoutRaw = {
    part: string,
    img: string
}


interface ProcesImage {

    baseImage: BaseImage;
    isProcessed: boolean;
    isUploaded: boolean;
    cutouts: Cutout[];

}


const procesImages = ref<ProcesImage[]>([]);
const modelsLoaded = ref(false);



onMounted(async () => {

    console.log('page', page.props.baseImages)

    procesImages.value = page.props.baseImages.map((baseImage: BaseImage) => {

        return {
            baseImage,
            isProcessed: false,
            isUploaded: false,
            cutouts: []
        }

    });


    modelsLoaded.value = await processor.init();
});


const cutouts = ref([]);

const processImage = async (path: string) => {

    // create a new image
    const image = new Image();
    image.src = path;


    let cutouts_processed = await processor.processImage(image);

    if (!cutouts_processed) {
        return new Promise((resolve, reject) => {
            reject('Image not processed');
        });
    }


    const procesImage = procesImages.value.find((procesImage) => procesImage.baseImage.path === path);

    if (!procesImage) {
        return new Promise((resolve, reject) => {
            reject('Image not found');
        });
    }

    procesImage.cutouts = await Promise.all(cutouts_processed.map(async (cutout: CutoutRaw) => {

        let shouldInclude = true;

        // check the size if the img, if it is not bigger than 40x40, do not include
        const img = new Image();
        img.src = cutout.img;


        // wait for the image to load
        await new Promise((resolve) => {
            img.onload = () => {
                resolve(true);
            }
        });



        if (img.width < 40 || img.height < 40) {
            shouldInclude = false;
        }

        return new Promise((resolve) => {
            resolve({
                img: cutout.img,
                part: cutout.part,
                included: shouldInclude
            });
        });

    })
    );

    procesImage.isProcessed = true;


    console.log('cutouts', cutouts_processed);

    return new Promise((resolve, reject) => {
        resolve(true);
    });


};


const upload = async (processedImage: ProcesImage) => {

    console.log('uploading', processedImage);

    
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

}






const ProcessAll = async () => {

    if(confirm('Are you sure you want to process all images? Wait for the alert to come when it is finished.') === false) {
        return;
    }

    for (let i = 0; i < procesImages.value.length; i++) {

        if (!procesImages.value[i].isProcessed) {
            await processImage(procesImages.value[i].baseImage.path);
        }

        await upload(procesImages.value[i]);

        procesImages.value[i].isUploaded = true;

    }

    alert('All images processed and uploaded');

}


</script>

<template>

    <PoolLayout>

        <div>
            <h1>Pool Processor</h1>
        </div>

        <div v-if="modelsLoaded">
            <h2>Models Loaded</h2>
        </div>
        <div v-else>
            <h2>Loading Models...</h2>
        </div>
        <!-- 
        <div class="cutouts">
            <div v-for="cutout in cutouts" :key="cutout.id" class="cutout">
                <img :src="cutout.img" alt="cutout.title">
                {{ cutout.part }}
            </div>
        </div> -->

        <div class="processor" v-if="modelsLoaded">

            <button @click="ProcessAll">Process All</button>

            <div class="processor-images">
                <div v-for="image in procesImages" :key="image.baseImage.id" class="processor-image" >

                    <template v-if="!image.isUploaded">
                    <div class="base-img">
                        <img :src="image.baseImage.path" alt="image.title" loading="lazy">
                        <span>{{ fileName(image.baseImage.path) }}</span>
                        <span>{{ image.baseImage.name ?? "No Title" }}</span>
                        <span>{{ image.baseImage.link ?? "No Link" }}</span>
                    </div>
                    <!--  -->


                    <div class="cutouts">
                        <div v-for="cutout in image.cutouts" :key="cutout.part" class="cutout"
                            :class="{ 'included': cutout.included }"
                            :hint="`${cutout.included ? 'Included' : 'Not Included'}`"
                            @click="cutout.included = !cutout.included">
                            <div class="cutout-img">
                                <img :src="cutout.img" alt="cutout.title">
                            </div>
                            <span>{{ cutout.part }}</span>
                        </div>
                        <strong v-if="!image.cutouts.length && image.isProcessed">AI didn't find cutouts</strong>
                        <em v-if="!image.isProcessed">Not processed yet</em>
                    </div>

                    <div class="actions">
                        <button @click="upload(image)" v-if="image.isProcessed" class="success">Upload</button>
                        <button @click="processImage(image.baseImage.path)" v-else>Process</button>
                    </div>

                </template>
                </div>

            </div>


        </div>


    </PoolLayout>

</template>