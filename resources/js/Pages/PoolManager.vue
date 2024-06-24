<script setup lang="ts">


import { onMounted, onUnmounted, ref } from 'vue';

import PoolLayout from '@/Layouts/PoolLayout.vue';
import BaseImageDetails from '@/Components/Pool/BaseImageDetails.vue';

import { ImageProcessor } from '@/Lib/Processor';
import { usePage } from '@inertiajs/vue3';

import axios from 'axios';
import { Head } from "@inertiajs/vue3";

import { BaseImage, Cutout, CutoutRaw, ProcesImage, MaskImage } from '@/types/PoolTypes';





const fileName = (path: string) => {
    return path.split('/').pop() ?? '';
};


const processor = new ImageProcessor();



const page = usePage();



const procesImages = ref<ProcesImage[]>([]);


onMounted(async () => {

    console.log('page', page.props.baseImages)


    if(!page.props.baseImages) {
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


    // modelsLoaded.value = await processor.init();
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



const setIncluded = (mask: MaskImage) => {

    let newStatus = !mask.included;

    axios.patch(route('maskimage.setincluded'), {
        id: mask.id,
        included: newStatus
    })
    .then(() => {
        mask.included = newStatus;
    })
    .catch(() => {
        console.error('Failed to update included status');
    });
}



const maxLoaded = ref(10);
const canLoadMore = ref(true);


const loadMore = () => {
   maxLoaded.value += 10;   

   if(page.props.baseImages?.length && maxLoaded.value > page.props.baseImages.length) {
       maxLoaded.value = page.props.baseImages.length;
       canLoadMore.value = false;
   }
}


</script>

<template>

    <Head title="Pool Manager"></Head>

    <PoolLayout>

        <div>
            <h1>Pool Manager</h1>
            <span>Total {{ page.props.baseImages?.length  ?? 0 }} base images / Loaded {{ maxLoaded }}</span>
        </div>

        <div class="manager" >

            <div class="manager-images" v-if="page.props.baseImages">


                <template v-for="(image, index) in (page.props.baseImages as BaseImage[])" :key="image.id">
                <div  class="manager-image" v-if="index < maxLoaded">

                    <template v-if="image.processed">
                    <baseImageDetails :baseImage="image" @deleted="($page.props.baseImages ?? []).splice(index, 1)"></baseImageDetails>
                
                    <div class="masks">
                        <div v-for="mask in image.mask_images" :key="mask.id + mask.label" class="mask"
                            :class="{ 'included': mask.included }"
                            :hint="`${mask.included ? 'Included' : 'Not Included'}`"
                            @click="setIncluded(mask)"
                            
                            v-if="image.mask_images"
                            >
                            <div class="mask-img">
                                <img :src="mask.path" alt="mask.title">
                            </div>
                            <span>{{ mask.label }}</span>
                        </div>
                        <strong v-else>No masks for this base image</strong>
   
                    </div>

                    <div class="actions">
                        <!-- <button @click="upload(image)" v-if="image.isProcessed" class="success">Upload</button>
                        <button @click="processImage(image.baseImage.path)" v-else>Process</button> -->
                    </div>

                </template>
                </div>
                </template>
            </div>

            <br/>
            <button @click="loadMore" v-if="canLoadMore">Load more</button>

        </div>


    </PoolLayout>

</template>