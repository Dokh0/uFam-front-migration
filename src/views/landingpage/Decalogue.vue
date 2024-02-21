<template>
  <div
  class="p-8 w-[800px] mx-auto text-center bg-black bg-opacity-40 text-white border-[3px] rounded-lg"
>
  <h2 class="text-4xl font-bold my-4">Decalogue for kids</h2>
  <h4 class="text-2xl font-semibold mt-6 mb-10">Navigating Social Media with Care and Respect</h4>
  <div v-for="tip in tips" :key="tip.id"
  class="my-10 text-left">
    <h5 class="text-2xl font-bold mb-2">{{ tip.title }}</h5>
    <p class="text-xl">{{ tip.description }}</p>
  </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const tips = ref([
  {
    id: 1,
    title: "1. Be Kind Online",
    description: "Treat others as you would like to be treated. Kindness is key."
  },
  {
    id: 2,
    title: "2. Privacy is Precious",
    description: "Keep your personal information private and safe."
  },
  {
    id: 3,
    title: "3. Pause Before You Post",
    description: "Think about the impact of your words and actions online."
  },
  {
    id: 4,
    title: "4. Respect Boundaries",
    description: "Ask for permission before sharing others' information or photos."
  },
  {
    id: 5,
    title: "5. Balance Your Time",
    description: "Make time for offline activities and enjoy the world outside screens."
  },
  {
    id: 6,
    title: "6. Speak Up About Bullying",
    description: "If you witness bullying, tell a trusted adult."
  },
  {
    id: 7,
    title: "7. Be a Critical Thinker",
    description: "Don’t believe everything you see online; research and question."
  },
  {
    id: 8,
    title: "8. Positive Vibes Only",
    description: "Use social media to spread positivity and good vibes."
  },
  {
    id: 9,
    title: "9. Take a Break",
    description: "If social media feels overwhelming, it's okay to step back."
  },
  {
    id: 10,
    title: "10. Ask for Help",
    description: "If something online makes you uncomfortable, talk to an adult."
  }
]);

</script>