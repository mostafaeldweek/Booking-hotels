<template>
  <div style="display: grid; gap: 20px">
    <div
      style="
        color: #181818;
        font-family: SF Pro Display;
        font-size: 28px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
      "
    >
      Popular Hotel
    </div>
    <div class="enjoy-gallery">
      <div
        class="enjoy-gallery-items"
        v-for="(item, index) in items"
        :key="index"
      >
        <img :src="item.imgurl" :alt="item.country" />
        <span>{{ item.country }}</span>
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
  { imgurl: myImage8, country: "Country1", num: 1 },
  { imgurl: myImage9, country: "Country1", num: 2 },
  { imgurl: myImage10, country: "Country1", num: 3 },
  { imgurl: myImage11, country: "Country1", num: 4 },
];
</script>

<style scoped>
.enjoy-gallery {
  display: flex;
  justify-content: space-between;
  gap: 10px;
}
.enjoy-gallery-items img {
  width: 100%;
  height: 100%;
}
</style>
