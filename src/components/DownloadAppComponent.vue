<template>
  <div class="h-72 overflow-hidden relative rounded-8">
    <img
      :src="DownnloadImage"
      class="w-full h-auto rounded-8 bg-gradient-to-r from-[rgba(0,0,0,0.5)] to-transparent bg-cover bg-no-repeat bg-center before:content-[''] before:w-[1240px] before:h-[553.081px] before:-left-100 before:-top-[295.058%] before:bg-lightgray"
    />
    <img
      :src="HandImage"
      style="transform: translate(-50%, -50%) rotate(-15deg) scale(0.6)"
      class="absolute top-2/3 left-3/4 transform -translate-x-1/2 -translate-y-1/2 rotate-[-15deg] scale-60 w-30 h-auto z-1 w-full rounded-8 bg-gradient-to-r from-[rgba(0,0,0,0)] to-transparent bg-cover bg-no-repeat bg-center before:content-[''] before:absolute before:w-[1240px] before:h-[553.081px] before:-left-100 before:-top-[295.058%] before:bg-lightgray"
    />
    <div
      style="top: 15%"
      class="absolute top-15 left-0 text-left px-5 py-4 flex flex-col gap-4"
    >
      <p class="m-0 text-white font-sans font-semibold text-3xl leading-[140%]">
        Download the mobile application for bonus <Br /> coupons and travel
        codes
      </p>
      <button
        @click="handleButtonClick"
        class="max-w-[220px] px-4 py-2 bg-blue-500 text-white border-none rounded-lg cursor-pointer flex items-center justify-center"
      >
        Download Mobile App
      </button>
    </div>
  </div>
</template>

<script setup>
import DownnloadImage from "../assets/home/enjoy/downloadimage.jpg";
import HandImage from "../assets/home/enjoy/hand.png";
</script>

<style scoped></style>
