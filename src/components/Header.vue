<template>
  <nav class="bg-[#66c6ec] h-[200px] flex">
    <div class="max-w-screen-xl mx-auto sm:px-10 lg:px-8 w-full">
      <div class="flex items-center justify-between w-full">
        <router-link to="/" class="shrink-0">
          <img
            src="@/assets/img/u__1_-removebg-preview.png"
            alt="uFam_logo"
            class="h-[150px] w-[150px] rounded-md"
          />
        </router-link>
        <div class="hidden md:flex grow items-center justify-start">
          <div class="flex items-baseline space-x-4">
            <router-link
              v-for="page in pages"
              :key="page.title"
              :to="page.path"
              class="text-white px-3 py-2 rounded-md text-2xl font-bold hover:bg-white hover:text-[#64c4ec]"
              >{{ page.title }}</router-link
            >
          </div>
        </div>
        <div class="hidden md:flex justify-end">
          <router-link
            to="/signup"
            class="inline-flex items-center px-3 py-2 border border-transparent text-2xl font-bold rounded-md text-white bg-transparent hover:bg-white hover:text-[#64c4ec] transition duration-300 ease-in-out"
          >
            CREATE FAMILY
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      pages: [
        { title: "ABOUT US", path: "/aboutus" },
        { title: "FAQ", path: "/faq" },
        { title: "SUPPORT", path: "/support" },
        { title: "DECALOGUE", path: "/decalogue" },
      ],
    };
  },
};
</script>