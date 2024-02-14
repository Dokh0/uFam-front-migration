<template>
  <div class="m-5">
    <nav class="flex justify-between gap-5 mb-8">
      <h1>uFam</h1>
      <div class="flex gap-5">
        <router-link to="/">Home</router-link>
        <router-link to="/login">Login</router-link>
        <router-link to="/signup">Signup</router-link>
      </div>
    </nav>
    <router-view />

    <!-- Global notification live region -->
    <!-- To add notifications, call this from anywhere in the app:
      store.add_alert({ type, title, message })
    -->
    <div aria-live="assertive"
      class="pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6 z-50">
      <div class="flex w-full flex-col items-center space-y-4 sm:items-end">
        <AlertBox v-for="alert in alerts" :key="alert.id" :id="alert.id" :type="alert.type" :title="alert.title"
          :message="alert.message" @close="store.remove_alert" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from '@/store'
import { computed } from 'vue'

const store = useStore()
const alerts = computed(() => store.state.alerts)
</script>
