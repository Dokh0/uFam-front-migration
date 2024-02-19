<template>
  <div class="mx-auto">
    <div class="flex flex-column sm:flex-row items-center justify-center flex-wrap m-6 mb-20">
      <div class="flex justify-center mr-12 m-4">
        <img src="@/assets/img/welcome-image.jpg" alt="Family"
          class="w-[720px] h-[576px] object-cover rounded-[20px]" />
      </div>
      <div class="flex flex-col bg-opacity-40 bg-black border-2 border-white rounded-[20px] text-white p-3 m-4 text-left max-w-[500px] ">
      <h1 class="text-3xl font-bold mb-4 mt-4 ml-4">Welcome to uFam! 🏡✨</h1>
      <p class="ml-4">Join us in creating treasured moments and <br></br>nurturing
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
      <div class="flex flex-col bg-opacity-40 bg-black border-2 border-white rounded-[20px] text-white p-3 m-4 text-left max-w-[500px]">
        <h1 class="text-3xl font-bold mb-4 mt-4 ml-4">This is uFam!</h1>
        <p class="m-4">Empower your little ones with the tools to flourish in the online
              world, embracing technology with wisdom and joy 🌐👨‍👩‍👧‍👦 <br /> <br />
              Start your family's adventure today and craft a legacy of happy
              and healthy digital memories. 💌🚀</p>
      </div>
      <div class="flex justify-center mr-12 m-4">
        <img src="@/assets/img/text-image.jpg" alt="Family"
            class="w-[720px] h-[576px] object-cover rounded-[20px]" />
      </div>
    </div>
    <div class="flex justify-center items-center flex-wrap m-6 mb-20">
    <div
      v-for="card in cards" :key="card.id"
      class="w-full max-w-[360px] flex-grow m-2">
      <div class="flex flex-col justify-between items-center w-[230px] h-[350px] bg-opacity-40 bg-black border-[3px] border-white rounded-3xl text-white p-3 text-left shadow-lg">
        <h4 class="text-3xl font-bold m-4">{{ card.heading }}</h4>
        <p class="m-4">{{ card.text }}</p>
        <button
          @click="navigateTo('/support')"
          class=" text-center text-sm cursor-pointer m-4">
          Visit article here
        </button>
      </div>
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

/* export default {
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

<!--
              <Card
                variant="outlined"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexShrink: 0,
                  width: 230,
                  height: 350,
                  bgcolor: "rgba(0, 0, 0, 0.4)",
                  borderRadius: 2,
                  border: "3px solid",
                  borderColor: "white",
                  color: "white",
                  p: 3,
                  m: 2,
                  textAlign: "left",
                  boxShadow: 3,
                }}
              >
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    <h4>{card.heading}</h4>
                  </Typography>
                  <Typography variant="body2" color="white" fontSize={"1rem"}>
                    {card.text}
                  </Typography>
                </CardContent>
                <CardActions
                  sx={{ justifyContent: "center", paddingBottom: 2 }}
                >
                  <NavLink to="/support" style={{ textDecoration: "none" }}>
                    <Button size="small" sx={{ color: "white", fontSize: "15px" }}>
                      Visit article here
                    </Button>
                  </NavLink>
                </CardActions>
              </Card>
            </Box>
          ))}
        </Box>
 -->