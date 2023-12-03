<script setup>
import HeaderComponent from "../components/Header.vue";
import CovidComponent from "../components/CovidComponent.vue";
import EnjoyComponent from "../components/EnjoyComponent.vue";
import InspirationComponent from "../components/InspirationComponent.vue";
import PopularHotel from "../components/PopularHotel.vue";
import DownloadApp from "../components/DownloadAppComponent.vue";
import DiscoverComponent from "../components/DiscoverComponent.vue";
import LinksFooter from "../components/LinksFooter.vue";
import MainBackground from "../components/MainBackground.vue";
</script>

<template>
  <div style="margin-inline: 100px">
    <Header>
      <HeaderComponent />
    </Header>
    <MainBackground />
    <main class="main">
      <CovidComponent />
      <EnjoyComponent id="discover" />
      <InspirationComponent />
      <PopularHotel id="activites" />
      <DownloadApp id="about" />
      <DiscoverComponent id="contact" />
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
  margin-top: 82px;
}
</style>
