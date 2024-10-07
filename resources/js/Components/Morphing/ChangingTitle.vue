<script setup lang="ts">

import { ref, onMounted, onUnmounted } from 'vue';



let shuffleTitlesInterval: NodeJS.Timeout | null = null;


const props = defineProps<{
    titles: string[];
}>();

const titles = ref(props.titles);


const shuffleTitles = () => {
        let shuffled;
        do {
            shuffled = [...titles.value].sort(() => Math.random() - 0.5);
        } while (JSON.stringify(shuffled) === JSON.stringify(titles.value));
        titles.value = shuffled;
    };




    onMounted(() => {


        shuffleTitlesInterval = setInterval(shuffleTitles, 700);
    });
    
    onUnmounted(() => {
        if (shuffleTitlesInterval) {
            clearInterval(shuffleTitlesInterval);
        }
    });

</script>


<template>
    {{  titles.join(' ') }}
</template>