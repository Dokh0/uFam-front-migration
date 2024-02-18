<template>
  <div class="mx-auto p-4">
    <div class="flex flex-column sm:flex-row items-center justify-center flex-wrap min-h-auto sm:min-h-[100vh]">
      <div class="flex justify-center">
        <img src="@/assets/img/welcome-image.jpg" alt="Family"
          class="max-w-[90%] max-h-[90%] w-auto h-auto object-contain rounded-[20px]" />
      </div>
      <div class="flex flex-col bg-opacity-40 bg-black border-2 border-white rounded-[20px] text-white p-3 m-2 text-left">
        <h1 class="text-3xl font-bold mb-6 mt-6">Welcome to uFam! 🏡✨</h1>
        <p>Join us in creating treasured moments and <br></br>nurturing
          digital wellness for every family member.
          <br />
          <br></br>With uFam, you can celebrate life's milestones, <br />
          big and small, on a platform that values privacy,
          <br /> togetherness, and positive online experiences.
        </p>
        <button 
        @click="navigateTo('/login')"
        class="inline-flex items-center justify-center px-4 py-6 h-[45px] border-2 border-white bg-transparent text-white cursor-pointer font-bold text-lg transition-all duration-300 ease-in-out hover:bg-white hover:text-blue-500">Log In</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const navigateTo = (path) => {
  router.push(path);
};

/*     const cards = ref([
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
      }
    ])
  
export default {
    name: "Home",
    components: {
      
    },
    setup() {
      return{
        cards,
      }
    }
  } */

</script>

<!--<IconButton
                component={NavLink}
                to="/login"
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "4px 16px",
                  height: "45px",
                  borderRadius: "20px",
                  border: "2px solid",
                  borderColor: "white",
                  backgroundColor: "transparent",
                  color: "white",
                  cursor: "pointer",
                  fontWeight: "bold",
                  fontSize: "1.3rem",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: "white",
                    color: "#64c4ec",
                  },
                }}
              >
                <p style={{fontSize: "20px"}}>Log In</p>
              </IconButton>
 -->