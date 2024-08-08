<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import PoolLayout from '@/Layouts/PoolLayout.vue';
import BaseImageDetails from '@/Components/Pool/BaseImageDetails.vue';
import { usePage } from '@inertiajs/vue3';
import axios from 'axios';
import { Head } from "@inertiajs/vue3";

import { BaseImage, Cutout, CutoutRaw, ProcesImage, MaskImage } from '@/types/PoolTypes';
import { toast } from 'vue3-toastify';

const page = usePage();
const procesImages = ref<ProcesImage[]>([]);

onMounted(async () => {
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

});


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



const deleteMask = (id: number, index: number) => {
    const url = route('pool.mask.destroy', {id: id});

    axios.delete(url).then(() => {
        toast.success('Mask deleted');

        if (page.props.baseImages && page.props.baseImages[index]) {
            page.props.baseImages[index].mask_images = page.props.baseImages[index].mask_images?.filter((mask : MaskImage) => mask.id !== id);
        }
    })
    .catch(() => {
        toast.error('Failed to delete mask');
    });

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
                    <baseImageDetails :showReprocess="true" :baseImage="image" @deleted="($page.props.baseImages ?? []).splice(index, 1)"></baseImageDetails>
                
                    <div class="masks">
                        <div v-for="mask in image.mask_images" :key="mask.id + mask.label" class="mask"
                            :class="{ 'included': mask.included }"
                            :hint="`${mask.included ? 'Included' : 'Not Included'}`"
                            @click="setIncluded(mask)"
                            
                            v-if="image.mask_images"
                            >
                            <button @click="()=>{deleteMask(mask.id, index)}" class="danger">Delete</button>
                            <div class="mask-img">
                                <img :src="mask.path" alt="mask.title">
                            </div>
                            <span>{{ mask.label == 'head' ? 'face' : mask.label }} {{ mask.included ? '' : '(Not Included)' }}</span>
                        </div>
                        <strong v-else>No masks for this base image</strong>
   
                    </div>

                    <div class="actions"></div>

                </template>
                </div>
                </template>
            </div>

            <br/>
            <button @click="loadMore" v-if="canLoadMore">Load more</button>

        </div>


    </PoolLayout>

</template>