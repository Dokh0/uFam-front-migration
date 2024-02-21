<template>
  <div>
    <h2>Frequently asked questions</h2>
    <div v-for="item in items" :key="item.title">
      <button @click="toggle(item)">
        {{ item.title }}
        <span>{{ item.open ? "^" : "v" }}</span>
      </button>
      <div v-if="item.open">
        <p>{{ item.value }}</p>
      </div>
      <hr />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const toggle = (item) => {
    item.open = !item.open
}

const items = ref([
  {
    title: "Why uFam?",
    value:
      "We aim to provide a healthy online space to new generations so they can learn how to use social media under family's umbrella.",
  },
  {
    title: "Why don't eggs tell jokes?",
    value: "They'd crack each other up.",
  },
  {
    title: "I'm reading a book on anti-gravity. What is it about?",
    value: "It's impossible to put down!",
  },
  {
    title: "What do you call an elephant that doesn't matter?",
    value: "Irrelephant lol",
  },
  {
    title: "What do you call a fake noodle?",
    value: "An impasta.",
  },
  {
    title: "How do you make a tissue dance?",
    value: "Put a little boogie in it.",
  },
  {
    title: "Why did the bicycle fall over?",
    value: "Because it was two-tired!",
  },
  {
    title: "What do you call cheese that isn't yours?",
    value: "Nacho cheese.",
  },
  {
    title: "What do you get when you cross a snowman and a vampire?",
    value: "Frostbite.",
  },
  {
    title: "Why don't skeletons fight each other?",
    value: "They don't have the guts.",
  },
  {
    title: "What did the janitor say when he jumped out of the closet?",
    value: "Supplies!",
  },
  {
    title: "What's orange and sounds like a parrot?",
    value: "A carrot.",
  },
  {
    title: "Why did the golfer bring two pairs of pants?",
    value: "In case he got a hole in one.",
  },
]);
</script>