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
        <div class="md:hidden flex items-center relative">
          <button
            @click="toggleMenu"
            class="text-white focus:outline-none focus:ring-0"
          >
            <div class="menu-icon flex flex-col justify-between w-6 h-6">
              <div class="menu-line h-1 bg-white"></div>
              <div class="menu-line h-1 bg-white"></div>
              <div class="menu-line h-1 bg-white"></div>
            </div>
          </button>
          <div
            v-show="isMenuOpen"
            class="absolute top-0 right-0 mt-16 bg-white rounded-md shadow-lg p-5"
          >
            <div class="flex flex-col space-y-4">
              <router-link
                v-for="page in pages"
                :key="page.title"
                :to="page.path"
                class="text-xl font-bold text-gray-800 hover:text-[#64c4ec]"
                @click="closeMenu"
                >{{ page.title }}
              </router-link>
            </div>
          </div>
        </div>
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
            class="inline-flex items-center px-3 py-2 border-2 border-white text-2xl font-bold rounded-xl text-white bg-transparent hover:bg-white hover:text-[#64c4ec] transition duration-300 ease-in-out"
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
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeMenu() {
      this.isMenuOpen = false;
    },
  },
};
</script>