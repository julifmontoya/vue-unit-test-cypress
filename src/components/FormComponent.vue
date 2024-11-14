<template>
  <div>
    <input v-model="name" placeholder="Enter your name" />
    <button @click="submitForm">Send</button>
    <p v-if="submitted">Form submitted, {{ name }}!</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const name = ref("");
const submitted = ref(false);

const submitForm = () => {
  if (name.value) {
    submitted.value = true;
  }
};
</script>

<style scoped></style>
