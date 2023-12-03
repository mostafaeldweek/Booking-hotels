<template>
  <div class="grid gap-5 mb-24">
    <div class="text-gray-900 font-sans text-4xl font-semibold">
      Popular Hotel
    </div>
    <div class="flex justify-between gap-5">
      <div
        class="enjoy-gallery-items"
        v-for="(item, index) in items"
        :key="index"
      >
        <img :src="item.imgurl" :alt="item.country" class="w-full" />
        <span class="font-bold">{{ item.country }}</span>
        <div>{{ item.num }}</div>
      </div>
    </div>
    <div></div>
  </div>
</template>

<script setup>
import myImage8 from "../assets/home/enjoy/Rectangle 8.png";
import myImage9 from "../assets/home/enjoy/Rectangle 9.png";
import myImage10 from "../assets/home/enjoy/Rectangle 10.png";
import myImage11 from "../assets/home/enjoy/Rectangle 11.png";

const items = [
  {
    imgurl: myImage8,
    country: "Lakeside Motel Warefront",
    num: "2246 properties",
  },
  { imgurl: myImage9, country: "Recce Graham resort", num: "1278 properties" },
  { imgurl: myImage10, country: "Fireside Dinners", num: "480 properties" },
  { imgurl: myImage11, country: "Oculous Inn Stay", num: "320 properties" },
];
</script>

<style scoped>
.enjoy-gallery-items img {
  height: 120%;
}
</style>
