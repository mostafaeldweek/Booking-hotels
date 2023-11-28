<template>
  <div class="covid">
    <CovidIcon />
    <span
      >Check the latest COVID-19 restrictions before you travel.
      <a href="google.com">Learn more</a></span
    >
  </div>
</template>

<script setup>
import CovidIcon from "./Icons/CovidIcon.vue";
</script>

<style scoped>
.covid {
  box-sizing: border-box;
  display: flex;
  gap: 30px;
  border: solid;
  height: 72px;
  border-radius: 8px;
  background: #fcefca;
  text-align: center;
  padding: 20px;
}
span {
  color: var(--Gray-1, #333);
  font-family: SF Pro Display;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 200%; /* 22.4px */
  letter-spacing: 0.32px;
}
a{
    color:#2F80ED
}
</style>
