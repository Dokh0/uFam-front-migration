<template>
    <div class="bg-[url('./src/assets/img/uFamBackGround.png')] h-screen">
        <Header />
        <RouterView />
        <h1>Footer</h1>
    </div>
</template>

<script setup>
import Header from '@/components/Header.vue';
</script>
