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

const page = usePage();

const procesImages = ref<ProcesImage[]>([]);


onMounted(async () => {


});


const maxLoaded = ref(10);

</script>

<template>
    <Head title="Pool Gallery"></Head>

    <PoolLayout>

        <div>
            <h1>Corpse Gallery</h1>
        </div>

        <div class="gallery" v-if="page.props.corpseArchive">
            <div class="corpse_image" v-for="(corpse, index) in page.props.corpseArchive">
                <img :src="corpse.path" alt="Corpse Image" />
                <div class="corpse_image_details">
                    <span>
                        <a :href="corpse.path" download>Download</a>
                    </span>
                    <span class="corpse_image_detail" v-for="(corpseBase) in corpse.base_images">
                        <a :href="corpseBase.link" target="_blank">{{ corpseBase.name }}</a>
                    </span>
                </div>
            </div>

        </div>


    </PoolLayout>

</template>