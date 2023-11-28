<template>
  <div class="download-container">
    <img :src="DownnloadImage" class="background-image" />
    <img :src="HandImage" class="overlay-image" />
    <div class="text-container">
      <p>
        Download the mobile application for bonus <Br /> coupons and travel
        codes
      </p>
      <button @click="handleButtonClick">Download Mobile App</button>
    </div>
  </div>
</template>

<script setup>
import DownnloadImage from "../assets/home/enjoy/downloadimage.jpg";
import HandImage from "../assets/home/enjoy/hand.png";
</script>

<style scoped>
.download-container {
  height: 280px; /* Set the desired height */
  overflow: hidden;
  position: relative;
  border-radius: 8px;
}
.download-container img {
  width: 100%; /* Make the image fill the container width */
  height: auto; /* Maintain the aspect ratio */
  border-radius: 8px;
  background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 0) 100%
    ),
    url(""), lightgray 1240px 553.081px / -100% -295.058% no-repeat;
}
.overlay-image {
  position: absolute;
  top: 60%;
  left: 70%;
  transform: translate(-50%, -50%) rotate(-15deg) scale(0.6);
  width: 30%; /* Adjust the size of the overlay image */
  height: auto;
  z-index: 1;
}
.text-container {
  position: absolute;
  top: 20%; /* Adjust the distance from the bottom */
  left: 0px;
  text-align: left;
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 30px;
}
.text-container p {
  margin: 0;
  color: white;
  font-size: 16px; /* Adjust the font size */
  color: #fff;
  font-family: SF Pro Display;
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%; /* 39.2px */
}
.text-container button {
  max-width: 182px;
  padding: 8px 16px;
  background-color: #3498db; /* Adjust the background color */
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  padding: 12px 18px;
  justify-content: center;
  align-items: center;
}
</style>
