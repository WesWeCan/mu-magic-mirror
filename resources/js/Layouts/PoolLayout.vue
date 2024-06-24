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

    <h1>MU - Morphing Mirror</h1>

    <nav>
    <ul>
        <li>
            <Link :href="route('mirror')" >APP</Link>
        </li>
        <li>
            <Link :href="route('pool.upload')">1) Upload</Link>
        </li>
        <li>
            <Link :href="route('pool.process')">2) Slice</Link>
        </li>
        <li>
            <Link :href="route('pool.manage')">3) Manage</Link>
        </li>
        <li>
            <Link :href="route('pool.gallery')">4) Archive</Link>
        </li>
    </ul>
</nav>

</header>


<main>
    <slot></slot>
</main>

</template>