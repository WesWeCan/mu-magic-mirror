<script setup lang="ts">

import { defineProps, PropType } from 'vue';
import { BaseImage } from '@/types/PoolTypes';

import axios from 'axios';
import { toast } from 'vue3-toastify';


import { ref } from 'vue';


const emit = defineEmits(['deleted']);

const props = defineProps({

    baseImage: {
        type: Object as PropType<BaseImage>,
        required: true
    },

    showReprocess: {
        type: Boolean,
        default: false
    }

});

const fileName = (path: string) => {
    return path.split('/').pop() ?? '';
};


const setProcessed = (newBool: boolean) => {
    const url = route('baseimage.setprocessed');
    const data = { id: props.baseImage.id,
        processed: newBool };

    axios.patch(url, data).then(() => {
        props.baseImage.processed = newBool;
        toast.success('Image status updated');
    })
    .catch(() => {
        toast.error('Failed to update processed status');
    });
};

const destroy = () => {
    const url = route('baseimage.destroy', { id: props.baseImage.id });
    axios.delete(url).then(() => {
        toast.success('Image deleted');
        props.baseImage.processed = false;
        emit('deleted');
    })
    .catch(() => {
        toast.error('Failed to delete image');
    });
};

const setTitle = (event : Event) => {

    const title = (event.target as HTMLInputElement).value;

    if (title.length < 1) {
        return;
    }


    const url = route('baseimage.settitle');
    axios.patch(url, {  id: props.baseImage.id, title })
    .then(() => {
        toast.success('Title updated');
    })
    .catch((error) => {
        toast.error('Invalid title');
    });
};

const setLink = (event : Event) => {

    const link = (event.target as HTMLInputElement).value;

    if (link.length < 1) {
        return;
    }

    const url = route('baseimage.setlink');
    axios.patch(url, { id: props.baseImage.id, link })
    .then(() => {
        toast.success('Link updated');
    })
    .catch((error) => {
        toast.error('Invalid URL');
    });
};




</script>



<template>




    <div class="base-img-details">
        <img :src="props.baseImage.path" alt="props.baseImage.title" loading="lazy">
        <small><em>{{ fileName(props.baseImage.path) }}</em></small>
       
       
        <label for="title">Title</label>
        <input v-model="props.baseImage.name" :placeholder="props.baseImage.name ?? 'No Title'" @change="($e) => setTitle($e)"></input>
       
        <label for="link">Link</label>
        <input v-model="props.baseImage.link" :placeholder="props.baseImage.link ?? 'No Link'" @change="($e) => setLink($e)"></input>

        <button @click="setProcessed(false)" v-if="props.showReprocess">Reprocess in slicer</button>
        <button class="danger" @click="destroy">Delete</button>
    </div>



</template>