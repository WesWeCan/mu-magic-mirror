import { CameraProcessor } from "@/Lib/CameraProcessor";



export const getAvailableVideoDevices = async (context : CameraProcessor) => {

    // ask for permission to use the camera first so enumeration goes correctly
    const stream = await navigator.mediaDevices.getUserMedia({video: true}).catch(error => {
        console.error('Error accessing media devices.', error);
        return;
    });

    if (!stream) {
        console.error('No stream');
        return;
    }
    
    stream.getTracks().forEach(track => track.stop());

    const devices = await navigator.mediaDevices.enumerateDevices();

    const availableVideoDevices = devices.filter(device => device.kind === 'videoinput') as InputDeviceInfo[];

    const withCapabilities = availableVideoDevices.map(device => ({
        device: device,
        capabilities: device.getCapabilities()
    }));

    console.log(withCapabilities);  

    // Find a device with the label a capability of facingMode of 'environment'
    // make sure this works on all devices
    // if none found, use the first device
    const environmentDevice = withCapabilities.find(device => device.device.label.includes('back')) || withCapabilities[0];

    context.availableVideoDevices = withCapabilities;

    context.currentVideoDeviceId = environmentDevice.device.deviceId;
    console.log('Current video device: ' + environmentDevice.device.label);

    // Update video permission in context
    context.videoPermission = true;
}

export const switchVideoDevice = async (context : CameraProcessor) => {

    if (!context.currentVideoDeviceId) {
        console.error('No current video device');
        return;
    }

    const currentDevice = context.availableVideoDevices.find(device => device.device.deviceId === context.currentVideoDeviceId);

    // get index of current device
    const currentIndex = context.availableVideoDevices.findIndex(device => device.device.deviceId === context.currentVideoDeviceId);

    // get next device
    const nextIndex = (currentIndex + 1) % context.availableVideoDevices.length;
    const nextDevice = context.availableVideoDevices[nextIndex];

    // set next device
    context.currentVideoDeviceId = nextDevice.device.deviceId;
    console.log('Switching video device to: ' + nextDevice.device.label);

    getMediaStream(context, context.div_video as HTMLDivElement);
    // createCanvasses(this, this.div_process as HTMLDivElement, this.div_render as HTMLDivElement);

}

export const getMediaStream = async (context: CameraProcessor, videoDiv: HTMLDivElement) => {

    if (!videoDiv) {
        console.error('No video div');
        return;
    }

    // Stop existing video if any
    if (context.video) {
        const stream = context.video.srcObject as MediaStream;
        if (stream) {
            stream.getTracks().forEach(track => track.stop());
        }
        context.video.pause();
        context.video.srcObject = null;
        context.video = null;
        videoDiv.innerHTML = '';
    }

    // Assign new video div to context
    context.div_video = videoDiv;

    // Create new video element
    const video = document.createElement('video');
    video.width = 640;
    video.height = 480;
    video.muted = true;
    video.setAttribute('playsinline', 'true'); // Prevent fullscreen on iPhone
    video.style.objectFit = 'cover'; // Ensure the video covers the div area without stretching

    videoDiv.innerHTML = '';
    videoDiv.appendChild(video);

    console.log('Getting media stream');
    console.log(context.availableVideoDevices);

    // Set media constraints with the current video device
    const constraints = {
        video: {
            deviceId: context.currentVideoDeviceId ? { exact: context.currentVideoDeviceId } : undefined,
            width: { ideal: 640 },
            height: { ideal: 480 }
        }
    };

    try {
        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        video.srcObject = stream;
    } catch (error) {
        console.error('Error accessing media devices.', error);
        return;
    }

    await new Promise((resolve) => {
        video.onloadedmetadata = () => {
            console.log('Video metadata loaded');
            resolve(true);
        };
    });

    video.play();

    if (!video) {
        console.error('No video element available');
        return;
    }

    context.video = video;

    await new Promise((resolve) => {
        video.addEventListener('loadeddata', () => {
            console.log('Video loaded');
            resolve(true);
        });
    });

    return new Promise((resolve) => {
        resolve(true);
    });

}