<template>
  <header class="bg-white text-black py-4 flex justify-between items-center">
    <!-- Left Section (2 elements) -->
    <div class="flex items-center gap-3">
      <span>
        <PlaneIcon />
      </span>
      <span class="font-bold">my Dream Place</span>
    </div>

    <!-- Center Section (5 elements) -->
    <div
      class="flex-grow flex justify-center items-center gap-10 text-gray-800 font-sans text-base font-medium"
    >
      <a class="no-underline text-black" href="#">Home</a>
      <a class="no-underline text-black" href="#discover">Discover</a>
      <a class="no-underline text-black" href="#activities">Activities</a>
      <a class="no-underline text-black" href="#about">About</a>
      <a class="no-underline text-black" href="#contact">Contact</a>
    </div>

    <!-- Right Section (2 elements) -->
    <div class="flex items-center gap-3">
      <router-link to="/registration">
        <button
          class="border-1 border-blue-500 bg-blue-500 inline-flex px-4 py-2 rounded items-center gap-2 cursor-pointer"
        >
          Register
        </button>
      </router-link>
    </div>
  </header>
</template>

<script setup>
import { RouterView } from "vue-router";
import PlaneIcon from "./Icons/PlaneIcon.vue";
</script>

<style scoped></style>
