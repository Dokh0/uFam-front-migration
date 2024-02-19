<template>
  <form
    class="w-[55%] mx-auto bg-opacity-40 bg-black border-[3px] border-white rounded-[10px] my-20"
  >
    <div class="flex flex-col m-6 justify-center items-center">
      <h4 class="font-bold text-3xl text-white">Contact Us</h4>
      <input
        v-model="formData.name"
        type="email"
        id="email"
        class="my-[12px] w-[500px] text-sm p-2.5 bg-white rounded-lg border-2 border-black"
        placeholder="Name"
        required
      />
      <input
        v-model="formData.email"
        type="password"
        id="repeat-password"
        class="my-[12px] w-[500px] text-sm p-2.5 bg-white rounded-lg border-2 border-black"
        required
        placeholder="Email"
      />

      <textarea
        v-model="formData.message"
        id="message"
        required
        rows="4"
        class="my-[12px] w-[500px] text-sm p-2.5 bg-white rounded-lg border-2 border-black"
        placeholder="Message"
      ></textarea>
      <button
        type="submit"
        class="text-white rounded-lg text-sm px-5 py-2.5 m-4 text-center font-bold bg-[#403f65] hover:bg-[#4a4aff] shadow-lg"
      >
        Send message
      </button>
    </div>
  </form>
</template>

<script>
import { ref } from "vue";

const formData = ref({
  name: "",
  email: "",
  message: "",
})

const formErrors = ref({})

</script>


<!-- 
<template>
  <form
    class="w-[55%] mx-auto bg-opacity-40 bg-black border-[3px] border-white rounded-[10px] my-20"
    @submit.prevent="handleSubmit"
  >
    <div class="flex flex-col m-6 justify-center items-center">
      <h4 class="font-bold text-3xl text-white">Contact Us</h4>
      <input
        v-model="formData.name"
        type="text"
        class="my-[12px] w-[500px] text-sm p-2.5 bg-white rounded-lg border-2 border-black"
        placeholder="Name"
        required
      />
      <input
        v-model="formData.email"
        type="email"
        class="my-[12px] w-[500px] text-sm p-2.5 bg-white rounded-lg border-2 border-black"
        required
        placeholder="Email"
      />

      <textarea
        v-model="formData.message"
        rows="4"
        class="my-[12px] w-[500px] text-sm p-2.5 bg-white rounded-lg border-2 border-black"
        placeholder="Message"
      ></textarea>
      <button
        type="submit"
        class="text-white rounded-lg text-sm px-5 py-2.5 m-4 text-center font-bold bg-[#403f65] hover:bg-[#4a4aff] shadow-lg"
      >
        Send message
      </button>
    </div>
  </form>

  
  Snackbar component would go here 


</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios'; // Make sure axios is installed

const formData = ref({
  name: '',
  email: '',
  message: '',
});

const formErrors = ref({});

const snackbar = ref({
  open: false,
  message: '',
  severity: 'info',
});

const validate = () => {
  const tempErrors = {};
  tempErrors.name = formData.value.name ? '' : 'Name is required.';
  tempErrors.email = formData.value.email
    ? /\S+@\S+\.\S+/.test(formData.value.email)
      ? ''
      : 'Email is not valid.'
    : 'Email is required.';
  tempErrors.message = formData.value.message ? '' : 'Message is required.';
  formErrors.value = tempErrors;
  return Object.values(tempErrors).every((x) => x === '');
};

const handleSubmit = async () => {
  if (validate()) {
    try {
      const endpoint = 'http://localhost:5174/api/contact'; // Change to your actual endpoint
      await axios.post(endpoint, formData.value);
      formData.value = { name: '', email: '', message: '' };
      snackbar.value = {
        open: true,
        message: 'Message sent successfully!',
        severity: 'success',
      };
    } catch (error) {
      snackbar.value = {
        open: true,
        message: 'An error occurred. Please try again later.',
        severity: 'error',
      };
    }
  }
};

const handleCloseSnackbar = () => {
  snackbar.value.open = false;
};
</script>

-->