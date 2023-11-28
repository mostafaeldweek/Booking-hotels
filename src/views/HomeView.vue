<script setup>
import Headera from "../components/Header.vue";
import Headera from "../components/Header.vue";
import SearchComponents from "../components/SearchComponents.vue";
import CovidComponent from "../components/CovidComponent.vue";
import EnjoyComponent from "../components/EnjoyComponent.vue";
import InspirationComponent from "../components/InspirationComponent.vue";
import PopularHotel from "../components/PopularHotel.vue";
import DownloadApp from "../components/DownloadAppComponent.vue";
import DiscoverComponent from "../components/DiscoverComponent.vue";
import LinksFooter from "../components/LinksFooter.vue";
// import Registration from "./Registration.vue";
</script>

<template>
  <div>
    <Header>
      <Headera />
    </Header>

    <main class="main">
      <div class="main-bg">
        <img
          class="image"
          src="../assets/home/Rectangle 2.png"
          alt=""
          srcset=""
        />
        <div class="text-container">
          <div class="text text-one">Enjoy Your Dream Vacation</div>
          <div class="text text-two">
            Plan and book our perfect trip with expert advice, travel tips,
            destination information and inspiration from us
          </div>
        </div>

        <!-- New container at the bottom -->
        <div class="bottom-container">
          <SearchComponents />
        </div>
      </div>
      <CovidComponent />
      <EnjoyComponent />
      <InspirationComponent />
      <PopularHotel />
      <DownloadApp />
      <DiscoverComponent />
      <!-- <Registration /> -->
    </main>
    <footer>
      <LinksFooter />
    </footer>
  </div>
</template>

<style scoped>
.main {
  display: grid;
  grid-row-gap: 82px;
}

.main-bg {
  position: relative;
  text-align: center;
}

.image {
  display: block;
  width: 100%;
  height: auto;
}

.text-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  text-align: center; /* Center text horizontally within the container */
}

.text {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px; /* Add some margin between text elements if needed */
}

.text-one {
  color: #fff;
  text-align: center;
  font-family: SF Pro Display;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.text-two {
  color: #fff;
  text-align: center;
  font-family: SF Pro Display;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 28px */
  letter-spacing: 0.4px;
}

.bottom-container {
  position: relative;
  height: 64px;
  margin: -30px 105px 0 105px;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 4px 37px 0px rgba(0, 0, 0, 0.15);
}
</style>
