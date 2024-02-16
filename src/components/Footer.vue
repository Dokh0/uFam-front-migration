<template>
  <nav class="bg-[#66c6ec] text-white pt-8 pb-12 text-center">
    <div class="max-w-lg mx-auto">
      <h6 class="text-4xl font-bold mb-4 text-white">uFam</h6>
      <nav class="mb-6">
        <a href="#" class="text-xl font-bold mx-2 text-white" @click="navigateTo('/aboutus')">About</a>
        <a href="#" class="text-xl font-bold mx-2 text-white" @click="navigateTo('/privacy')">Privacy Policy</a>
        <a href="#" class="text-xl font-bold mx-2 text-white" @click="navigateTo('/cookies')">Cookies</a>
        <a href="#" class="text-xl font-bold mx-2 text-white" @click="navigateTo('/legal')">Legal</a>
      </nav>
      <div class="mb-6 flex justify-center">
        <img
          src="../assets/img/facebook.png"
          alt="facebook"
          class="mr-10 w-[60px]"
          color="white"
          @click="navigateTo('https://facebook.com')"
        />
        <img
          src="../assets/img/twitter.png"
          alt="facebook"
          class="mr-10 w-[60px]"
          color="white"
          @click="navigateTo('https://twitter.com')"
        />

        <img
          src="../assets/img/instagram.png"
          alt="facebook"
          class="mr-10 w-[60px]"
          color="white"
          @click="navigateTo('https://instagram.com')"
        />

        <img
          src="../assets/img/linkedin.png"
          alt="facebook"
          class="mr-10 w-[60px]"
          color="white"
          @click="navigateTo('https://linkedin.com')"
        />
      </div>
      <p class="text-lg text-white">
        &copy; {{ new Date().getFullYear() }} uFam. All rights reserved.
      </p>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    navigateTo(url) {
      window.open(url, "_blank");
    },
  },
};
</script>