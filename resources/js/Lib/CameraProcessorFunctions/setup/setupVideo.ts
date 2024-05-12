import { CameraProcessor } from "@/Lib/CameraProcessor";



export const getAvailableVideoDevices = async (context : CameraProcessor) => {
    const devices = await navigator.mediaDevices.enumerateDevices();
    context.availableVideoDevices = devices.filter(device => device.kind === 'videoinput');
}

export const getMediaStream = async (context: CameraProcessor, videoDiv: HTMLDivElement) => {

    if (!videoDiv) {
        console.error('No video div');
        return;
    }

    context.div_video = videoDiv;


    const video = document.createElement('video');
    video.width = 640;
    video.height = 480;

    video.muted = true;


    videoDiv.innerHTML = '';
    videoDiv.appendChild(video);



    const constraints = {
        video: {
            deviceId: context.currentVideoDevice ? { exact: context.currentVideoDevice.deviceId } : undefined,
            // width: { ideal: 640 },
            // height: { ideal: 480 }
        }
    };


    navigator.mediaDevices.getUserMedia(constraints)
        .then((stream) => {
            video.srcObject = stream;
        });

    await new Promise((resolve) => {
        video.onloadedmetadata = () => {
            console.log('Video metadata loaded');
            resolve(true);
        };
    });

    video.play();

    if (!video) {
        console.error('No video');
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