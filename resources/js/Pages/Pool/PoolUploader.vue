<script setup lang="ts">


import { nextTick, onMounted, onUnmounted, ref } from 'vue';

import PoolLayout from '@/Layouts/PoolLayout.vue';
import axios from 'axios';
import { Head } from "@inertiajs/vue3";
import { toast } from 'vue3-toastify';

interface Image {
    url: string;
    fileName: string;
    extension: string;
    title: string;
    link: string;
    uploaded: boolean;
    error?: string;
}


const images = ref<Image[]>([]);

const onFileChange = (e : Event) => {
    const files = (e.target as HTMLInputElement).files;
    if (files) {
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const reader = new FileReader();
            reader.onload = (e) => {
                images.value.push({
                    url: e.target?.result as string,
                    fileName: file.name,
                    extension: file.name.split('.').pop() ?? '',
                    title: '',
                    link: '',
                    uploaded: false,
                });
            };
            reader.readAsDataURL(file);
        }
    }
};


const sameTitleTitle = ref('');

const changeAllTitles = () => {
    images.value.forEach((image) => {
        image.title = sameTitleTitle.value;
    });
};

const sameLinkLink = ref('');

const changeAllLinks = () => {
    images.value.forEach((image) => {
        image.link = sameLinkLink.value;
    });
};



const uploading = ref(false);


const uploadImage = (image: Image): Promise<void> => {
    return new Promise(async (resolve, reject) => {
        try {
            const formData = new FormData();

            const response = await fetch(image.url);
            const blob = await response.blob();
            const file = new File([blob], `${image.fileName}`, {
                type: `image/${image.extension}`
            });

            formData.append('image', file);
            formData.append('title', image.title);
            formData.append('link', image.link);

            await axios.post(route('pool.base.upload'), formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            // remove the image from the list
            images.value = images.value.filter((img) => img.url !== image.url);

            resolve();
        } catch (error) {
            console.error(error);
            image.error = (error as any).response.data.message;
            toast.error((error as any).response.data.message);
            reject((error as any).response.data.message);
        }
    });
};



const uploadAll = async () => {

    uploading.value = true;

    if (true) {
        // do one by one
        for (let i = 0; i < images.value.length; i++) {

            if (images.value[i].uploaded) {
                console.log('already uploaded');
                continue;
            }

            if (images.value[i]?.error) {
                console.log('has a error');
                continue;
            }

            try {
                // upload the image
                await uploadImage(images.value[i]);
            } catch (error) {
                console.error(error);
                images.value[i].error = (error as any);
            }
            // wait
            await new Promise((resolve) => setTimeout(resolve, 100));
        }
    }

    uploading.value = false;

    // check if all images have an error visible
    const allImagesHaveError = images.value.every((image) => image.error);
    if (!allImagesHaveError) {
        nextTick(() => {
            uploadAll();
        });
    }
    else {
        console.info('uploaded all images');
        toast.success('All images uploaded, go to 2) Slice to create the pool.');
    }

    
};

</script>

<template>

<Head title="Pool Uploader"></Head>

    <PoolLayout>


        <div class="upload-form">
            <h1>Upload New Batch</h1>
            <span>Select multiple images for upload.</span>
            <input type="file" multiple @change="onFileChange" />
        </div>

        <div class="upload-preview">
            <h2>Preview ({{ images.length }} {{ uploading ? "images left to upload" : "images loaded"}})</h2>
            <h3 v-if="uploading">Uploading...</h3>

            <div class="macro-actions" v-if="images.length">
                <div class="macro-action">
                    <label>Give all images the same title:</label>
                    <input type="text" v-model="sameTitleTitle" />
                    <button @click="changeAllTitles">Change all titles</button>
                </div>

                <div class="macro-action">
                    <label>Give all images the same link:</label>
                    <input type="text" v-model="sameLinkLink" />
                    <button @click="changeAllLinks">Change all links</button>
                </div>

                <div class="macro-action">
                    <button class="success" @click="uploadAll">Upload all</button>
                </div>


            </div>


            <div class="preview-images">
                <div class="preview-image" v-for="(image, index) in (images as Image[])" :key="index">


                    <template v-if="!image.uploaded">
                        <div class="preview">
                            <img :src="image.url" alt="preview" />
                        </div>

                        <div class="details">
                            <label>Title</label>
                            <input type="text" v-model="image.title" placeholder="Title" />
                            <label>Link</label>
                            <input type="text" v-model="image.link" placeholder="link" />

                            <div class="error" v-if="image.error">Error: {{ image.error }}</div>

                            <div class="actions">
                                <button class="danger" @click="images.splice(index, 1)">Remove</button>
                                <button class="success" @click="uploadImage(image)">Upload</button>
                            </div>
                        </div>

                    </template>
                </div>



            </div>
        </div>


    </PoolLayout>

</template>