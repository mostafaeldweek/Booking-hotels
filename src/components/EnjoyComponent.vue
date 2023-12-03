<template>
  <div>
    <div class="text-600 font-sans text-4xl font-semibold mb-5">
      Enjoy your dream vacation
    </div>
    <div class="text-gray-800  font-sans text-base font-normal leading-7 mb-2">
      Plan and book our perfect trip with expert advice, travel tips,
      destination information and <br />
      inspiration from us
    </div>
    <div class="flex justify-between gap-10">
      <div v-for="(item, index) in items" :key="index">
        <img :src="item.imgurl" :alt="item.country" class="w-96" />
        <span class="block">{{ item.country }}</span>
        <div class="block">{{ item.num }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import myImage8 from "../assets/home/enjoy/Rectangle 8.png";
import myImage9 from "../assets/home/enjoy/Rectangle 9.png";
import myImage10 from "../assets/home/enjoy/Rectangle 10.png";
import myImage11 from "../assets/home/enjoy/Rectangle 11.png";

const items = [
  { imgurl: myImage8, country: "Australia", num: "2246 properties" },
  { imgurl: myImage9, country: "Japan", num: "1278 properties" },
  { imgurl: myImage10, country: "New Zealand", num: "480 properties" },
  { imgurl: myImage11, country: "Greece", num: "320 properties" },
];
</script>

<style scoped></style>
