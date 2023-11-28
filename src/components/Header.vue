<template>
  <header class="custom-header">
    <!-- Left Section (2 elements) -->
    <div class="left-section">
      <span>
        <PlaneIcon />
      </span>

      <span>Left Element 2</span>
    </div>

    <!-- Center Section (5 elements) -->
    <div class="center-section">
      <span>Home</span>
      <span>Discover</span>
      <span>activites</span>
      <span>About</span>
      <span>Contact</span>
    </div>

    <!-- Right Section (2 elements) -->
    <div class="right-section">
      <router-link to="/registration">
        <button
          class="w-full py-2 text-white border-none cursor-pointer rounded bg-blue-500 hover:bg-yellow-500"
        >
          Login
        </button>
      </router-link>
    </div>
  </header>
</template>

<script setup>
import { RouterView } from "vue-router";
import PlaneIcon from "./Icons/PlaneIcon.vue";
</script>

<style scoped>
.custom-header {
  background-color: #ffffff; /* Example background color */
  color: #000000; /* Example text color */
  padding: 1rem 0rem; /* Example padding */
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.left-section,
.right-section {
  display: flex;
  align-items: center;
  gap: 0.75rem; /* Example space between elements */
}

.center-section {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px; /* Example space between elements */
  color: var(--Gray-1, #333);
  font-family: sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.32px;
}
</style>
