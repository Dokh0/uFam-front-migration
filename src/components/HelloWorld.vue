<script setup>
import { ref } from "vue";

defineProps({
  msg: String,
});

const count = ref(0);
</script>

<template>
  <div class="flex h-[200px] w-[200px] justify-center items-center">
    <h1 class="mt-10">HOLA</h1>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
