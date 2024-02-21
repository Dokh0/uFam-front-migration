<template>
  <div class="mx-auto">
    <div class="flex flex-column sm:flex-row items-center justify-center flex-wrap m-6 mb-20">
      <div class="flex justify-center mr-12 m-4">
        <img src="@/assets/img/welcome-image.jpg" alt="Family"
          class="w-[720px] h-[576px] object-cover rounded-[20px]" />
      </div>
      <div class="flex flex-col bg-opacity-40 bg-black border-[3px] border-white rounded-[20px] text-white p-3 m-4 text-left max-w-[500px] ">
      <h1 class="text-3xl font-bold mb-4 mt-4 ml-4">Welcome to uFam! 🏡✨</h1>
      <p class="ml-4 text-lg">Join us in creating treasured moments and <br></br>nurturing
          digital wellness for every family member.
          <br />
          <br></br>With uFam, you can celebrate life's milestones, <br />
          big and small, on a platform that values privacy,
          <br /> togetherness, and positive online experiences.
      </p>
      <button 
        @click="navigateTo('/login')"
        class="inline-flex items-center justify-center px-4 py-4 h-[45px] m-4 mb-4 border-2 rounded-3xl border-white bg-transparent text-white cursor-pointer font-bold text-lg transition-all duration-300 ease-in-out hover:bg-white hover:text-[#64c4ec] mt-4 w-1/4">Log In</button>
    </div>
    </div>
    <div class="flex flex-column sm:flex-row items-center justify-center flex-wrap m-6 mb-20">
      <div class="flex flex-col bg-opacity-40 bg-black border-[3px] border-white rounded-[20px] text-white p-3 m-4 text-left max-w-[500px]">
        <h1 class="text-3xl font-bold mb-4 mt-4 ml-4">This is uFam!</h1>
        <p class="m-4 text-lg">Empower your little ones with the tools to flourish in the online
              world, embracing technology with wisdom and joy 🌐👨‍👩‍👧‍👦 <br /> <br />
              Start your family's adventure today and craft a legacy of happy
              and healthy digital memories. 💌🚀</p>
      </div>
      <div class="flex justify-center ml-12 m-4">
        <img src="@/assets/img/text-image.jpg" alt="Family"
            class="w-[720px] h-[576px] object-cover rounded-[20px]" />
      </div>
    </div>
  <div id="landing-faq" class="flex justify-center items-center flex-wrap m-6 mb-20">
    <div
      v-for="card in cards" :key="card.id"
      class="w-full sm:max-w-[345px] p-4 m-8 bg-opacity-40 bg-black shadow-xl rounded-2xl border-[3px] border-white text-white">
      <h4 class="flex justify-center text-3xl font-bold m-4">{{ card.heading }}</h4>
      <p class="text-lg m-4">{{ card.text }}</p>
      <router-link
        to="/support"
        class="flex justify-center m-4 text-lg font-bold text-center cursor-pointer no-underline text-white">
        Visit article here
      </router-link>
    </div>
  </div>
  <div>
    <ContactFormVue />
  </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import ContactFormVue from "../../components/ContactForm.vue";

const router = useRouter();
const navigateTo = (path) => {
  router.push(path);
};

const cards = ref([
  {
    id: 1,
    heading: "Protect",
    text: "Discover essential strategies to safeguard your family's personal information on the internet, ensuring privacy and security in the digital realm.",
  },
  {
    id: 2,
    heading: "Balance",
    text: "Explore effective ways to balance screen time with quality family moments, ensuring a healthy digital lifestyle for you and your loved ones.",
  },
  {
    id: 3,
    heading: "Footprint",
    text: "An insightful piece on educating children about the concept of digital footprints, emphasizing the long-term impact of their online activities.",
  },
]);

</script>