<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';
import { Link } from '@inertiajs/vue3';


onMounted(() => {
    

    // add class to body 'pool'
    document.body.classList.add('pool');

});

onUnmounted(() => {
    // remove class from body 'pool'
    document.body.classList.remove('pool');
});

</script>


<template>

<header>

    <h1>MU - Magic Mirror</h1>

    <nav>
    <ul>
        <li>
            <Link :href="route('pool.upload')">Upload</Link>
        </li>
        <li>
            <Link :href="route('pool.process')">Process</Link>
        </li>
        <li>
            <Link :href="route('pool.manage')">Manage</Link>
        </li>
    </ul>
</nav>

</header>


<main>
    <slot></slot>
</main>






</template>