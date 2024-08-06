<script setup lang="ts">



import { usePage } from '@inertiajs/vue3';
import { onMounted, ref } from 'vue';

import { CameraProcessor } from '@/Lib/CameraProcessor';
const cp = new CameraProcessor();



const page = usePage();

const video_container = ref<HTMLDivElement | null>(null);
const div_process = ref<HTMLDivElement | null>(null);
const div_render = ref<HTMLDivElement | null>(null);

const emit = defineEmits(['newSlice', "updateList"]);

const loadingText = ref('Loading...');

const availableVideoDevices = ref<{ device: InputDeviceInfo, capabilities: MediaTrackCapabilities }[]>([]);
const currentVideoDeviceId = ref<string | undefined>(undefined);

onMounted(async () => {
    if (video_container.value && div_process.value && div_render.value && page.props.corpses) {
        await cp.init(video_container.value, div_process.value, div_render.value, page.props.corpses);
        availableVideoDevices.value = cp.availableVideoDevices;
        currentVideoDeviceId.value = cp.currentVideoDeviceId;
        requestAnimationFrame(loop);
    }
});

/**
 * Main loop that runs the camera processor.
 */
const loop = async () => {
    if (video_container.value && div_process.value) {

        if (!cp.videoPermission) {
            loadingText.value = 'No permission to use camera, check your settings and refresh the page.';
            console.error('No video permission');
            return;
        }

        await cp.loop();

        if (cp.running) {
            emit('updateList', cp.currentlyShownPieces);
        }

        requestAnimationFrame(loop);
    }
}

const switchDevice = () => {
    cp.switchVideoDevice();
    availableVideoDevices.value = cp.availableVideoDevices;
    currentVideoDeviceId.value = cp.currentVideoDeviceId;
}

const switchDeviceTo = (deviceId: string) => {
    cp.switchToVideoDevice(deviceId);
    availableVideoDevices.value = cp.availableVideoDevices;
    currentVideoDeviceId.value = cp.currentVideoDeviceId;
}

const takePhoto = () => {
    console.log('take photo');
    cp.togglePicture();
}

const downloadImage = () => {
    cp.downloadImage();
}

const shareImage = () => {
    cp.shareImage();
}


defineExpose({
    takePhoto,
    switchDevice,
    switchDeviceTo,
    downloadImage,
    shareImage,
    availableVideoDevices,
    currentVideoDeviceId
});


</script>


<template>
    <div ref="video_container" class="video-container"></div>
    <div ref="div_process" class="div-process"></div>

    <div ref="div_render" class="div-render">
        <span class="loading">{{ loadingText }}</span>
    </div>
</template>
