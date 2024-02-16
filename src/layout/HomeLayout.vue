<template>
    <div class="bg-[url('./src/assets/img/uFamBackGround.png')] h-full">
        <Header />
        <RouterView />
        <Footer />
    </div>
</template>

<script setup>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
</script>
