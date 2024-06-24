<script setup lang="ts">


import { onMounted, onUnmounted, ref } from 'vue';

import PoolLayout from '@/Layouts/PoolLayout.vue';
import BaseImageDetails from '@/Components/Pool/BaseImageDetails.vue';

import { ImageProcessor } from '@/Lib/Processor';
import { usePage } from '@inertiajs/vue3';

import axios from 'axios';
import { Head } from "@inertiajs/vue3";
import { toast } from 'vue3-toastify';

import { BaseImage, Cutout, CutoutRaw, ProcesImage, MaskImage } from '@/types/PoolTypes';
import { max } from 'mirada';

const fileName = (path: string) => {
    return path.split('/').pop() ?? '';
};

const page = usePage();

const procesImages = ref<ProcesImage[]>([]);


onMounted(async () => {
    loadMore();
});


const maxLoaded = ref(0);
const canLoadMore = ref(true);

const loadMore = async () => {
    maxLoaded.value += 10;

    if(page.props.corpseArchive?.length && maxLoaded.value > page.props.corpseArchive.length) {
        maxLoaded.value = page.props.corpseArchive.length;
        canLoadMore.value = false;
    }

}


const deleteCorpse = (id: number) => {

    const url = route('pool.gallery.destroy', {id: id});

    axios.delete(url).then(() => {
        toast.success('Corpse deleted');

        page.props.corpseArchive = page.props?.corpseArchive?.filter((corpse) => corpse.id !== id);

    })
    .catch(() => {
        toast.error('Failed to delete corpse');
    });

}

</script>

<template>

    <Head title="Pool Gallery"></Head>

    <PoolLayout>
        <div>
            <h1>Corpse Gallery</h1>
        </div>

        <div class="gallery" v-if="page.props.corpseArchive">

            <template v-for="(corpse, index) in page.props.corpseArchive">

            <div class="corpse_image" v-if="index < maxLoaded">
                <img :src="corpse.path" alt="Corpse Image" />
                <div class="corpse_image_details">
                    <span>
                        <a :href="corpse.path" download>Download</a>
                    </span>
                    <span class="corpse_image_detail" v-for="(corpseBase) in corpse.base_images">
                        <a :href="corpseBase.link" target="_blank">{{ corpseBase.name }}</a>
                    </span>
                </div>
        
                <button @click="deleteCorpse(corpse.id)" class="danger">Delete</button>
            </div>

            </template>

        </div>
        <button v-if="canLoadMore" @click="loadMore">Load More</button>

    </PoolLayout>

</template>