<template>
  <div>
    <div
      style="
        color: #181818;
        font-family: 'SF Pro Display';
        font-size: 28px;
        font-style: normal;
        font-weight: 800;
        line-height: normal;
        margin-bottom: 24px;
      "
    >
      Get inspiration for your next trip
    </div>
    <div class="enjoy-gallery">
      <div
        class="relative"
        v-for="(item, index) in items"
        :key="index"
      >
        <img
          :src="item.imgurl"
          :alt="item.country"
          class="h-72 opacity-90"
          style="width:450px"
        />
        <div
          class="absolute bottom-0 left-0 text-white p-5 flex flex-col items-start gap-2"
        >
          <span class="text-base font-semibold">{{ item.country }}</span>
          <div>{{ item.num }}</div>
        </div>
      </div>
    </div>
    <div></div>
  </div>
</template>

<script setup>
import myImage8 from "../assets/home/enjoy/Rectangle 8.png";
import myImage9 from "../assets/home/enjoy/Rectangle 9.png";
import myImage10 from "../assets/home/enjoy/Rectangle 10.png";

const items = [
  {
    imgurl: myImage8,
    country: "Sydeny’s 10 most fashionable 5 star hotels",
    num: "Browse the fastest growing tourism sector in the heart of Australia tourism capital ....",
  },
  {
    imgurl: myImage9,
    country: "Top cities for Vegan Travellers",
    num: "Top sites where you do not have to worry about being a vegan. Our tourist guide is here...",
  },
  {
    imgurl: myImage10,
    country: "World’s top destinations during and post covid timeline",
    num: "Pandemic is still intact and will be here for a longer time. Here’s where your next destination...",
  },
];
</script>

<style scoped>
.enjoy-gallery {
  display: flex;
  justify-content: space-between;
  gap: 10px;
}
.enjoy-gallery-items {
  position: relative;
}
.enjoy-gallery-items img {
}
</style>
