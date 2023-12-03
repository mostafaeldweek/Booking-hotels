<template>
  <div
    style="display: flex; flex-direction: column; height: 97.6vh"
    class="ml-28 mr-28"
  >
    <header class="bg-white text-black py-4 flex justify-between items-center">
      <!-- Left Section (2 elements) -->
      <div class="flex items-center gap-3">
        <span>
          <PlaneIcon />
        </span>
        <span class="font-bold">my Dream Place</span>
      </div>

      <!-- Right Section (2 elements) -->
      <div class="flex items-center gap-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M19.3399 14.49L18.3399 12.83C18.1299 12.46 17.9399 11.76 17.9399 11.35V8.81998C17.9387 7.70401 17.6216 6.61119 17.0252 5.66795C16.4288 4.72471 15.5776 3.9696 14.5699 3.48998C14.3128 3.03332 13.9376 2.65412 13.4838 2.39201C13.0299 2.1299 12.514 1.99451 11.9899 1.99998C10.8999 1.99998 9.91994 2.58998 9.39994 3.51998C7.44994 4.48998 6.09994 6.49998 6.09994 8.81998V11.35C6.09994 11.76 5.90994 12.46 5.69994 12.82L4.68994 14.49C4.28994 15.16 4.19994 15.9 4.44994 16.58C4.68994 17.25 5.25994 17.77 5.99994 18.02C7.93994 18.68 9.97994 19 12.0199 19C14.0599 19 16.0999 18.68 18.0399 18.03C18.7399 17.8 19.2799 17.27 19.5399 16.58C19.7999 15.89 19.7299 15.13 19.3399 14.49Z"
            fill="#BDBDBD"
          />
          <path
            d="M14.8297 20.01C14.6194 20.5922 14.235 21.0954 13.7286 21.4515C13.2223 21.8075 12.6187 21.999 11.9997 22C11.2097 22 10.4297 21.68 9.87969 21.11C9.55969 20.81 9.31969 20.41 9.17969 20C9.30969 20.02 9.43969 20.03 9.57969 20.05C9.80969 20.08 10.0497 20.11 10.2897 20.13C10.8597 20.18 11.4397 20.21 12.0197 20.21C12.5897 20.21 13.1597 20.18 13.7197 20.13C13.9297 20.11 14.1397 20.1 14.3397 20.07L14.8297 20.01Z"
            fill="#BDBDBD"
          />
          <circle
            cx="17"
            cy="6"
            r="5"
            fill="#EB5757"
            stroke="white"
            stroke-width="2"
          />
        </svg>
        <img
          src="../assets/profileicon.png"
          alt=""
          class="rounded-full w-8 h-8"
        />
      </div>
    </header>
    <main class="flex flex-col gap-4">
      <div class="w-full bg-gray-100 flex rounded-lg">
        <div class="w-1/3 p-5">
          <img src="../assets/home/enjoy/Rectangle 10.png" alt="" />
        </div>
        <div class="w-2/3 flex justify-between">
          <div class="w-2/3">
            <p class="font-semibold mt-5 mb-2">Lakeside Motel Warefront</p>
            <p class="flex">
              <StarIcon /><StarIcon /> <StarIcon /><StarIcon /><StarIcon /> 5
              (1200 Reviews)
            </p>
            <p class="text-red-700 mt-5">non refundable</p>
            <p class="mt-2">Check in: Sunday, March 18, 2022</p>
            <p class="mt-2">Check out: Tuesday, March 20, 2022</p>
            <p class="mt-2 mb-2">2 night stay</p>
          </div>
          <div class="self-end mb-5 mr-2 text-right flex flex-col">
            <p><span class="line-through text-red-700 mr-5">$150</span>$ 300</p>
            <p class="mb-5">Includes taxes and fees</p>

            <router-link to="/searchresults">
              <button class="text-white p-3 bg-blue-900 rounded">
                View trip details
              </button>
            </router-link>
          </div>
        </div>
      </div>
      <div class="w-full bg-gray-100 flex mb-10 rounded-lg">
        <div class="w-1/3 p-5">
          <img src="../assets/home/enjoy/Rectangle 10.png" alt="" />
        </div>
        <div class="w-2/3 flex justify-between">
          <div class="w-2/3">
            <p class="font-semibold mt-5 mb-2">Lakeside Motel Warefront</p>
            <p class="flex">
              <StarIcon /><StarIcon /> <StarIcon /><StarIcon /><StarIcon /> 5
              (1200 Reviews)
            </p>
            <p class="text-red-700 mt-5">non refundable</p>
            <p class="mt-2">Check in: Sunday, March 18, 2022</p>
            <p class="mt-2">Check out: Tuesday, March 20, 2022</p>
            <p class="mt-2 mb-2">2 night stay</p>
          </div>
          <div class="self-end mb-5 mr-2 text-right flex flex-col">
            <p><span class="line-through text-red-700 mr-5">$150</span>$ 300</p>
            <p class="mb-5">Includes taxes and fees</p>
            <router-link to="/searchresults">
              <button class="text-white p-3 bg-blue-900 rounded">
                View trip details
              </button>
            </router-link>
          </div>
        </div>
      </div>
      <!-- <img
        style="width: 30%; border: solid"
        :src="
          myModule.hotels[1].hotelInfo.rooms[
            myModule.hotels[1].hotelInfo.block[0].room_id
          ].photos[0].url_original
        "
        alt=""
      />
      <div style="width: 70%; display: flex; flex-direction: column">
        <div>
          <p>{{ myModule.hotels[1].hotelInfo.arrival_date }}</p>
          <p>{{ myModule.hotels[1].hotelInfo.arrival_date }}</p>
        </div>
        <div style="display: flex; justify-content: space-between">
          <div>
            <p>{{ myModule.hotels[1].hotelInfo.departure_date }}</p>
            <p>{{ myModule.hotels[1].hotelInfo.departure_date }}</p>
          </div>
          <div>
            <p>{{ myModule.hotels[1].hotelInfo.block[0].room_id }}</p>
            <p>{{ myModule.hotels[1].hotelInfo.block[0].room_id }}</p>
          </div>
        </div>
      </div> -->
      <p></p>
    </main>
    <LinksFooter />
  </div>
</template>

<script setup>
import LinksFooter from "../components/LinksFooter.vue";
import PlaneIcon from "../components/Icons/PlaneIcon.vue";
import { useMyModule } from "../stores/mytrips.js";
import { ref, onMounted, onBeforeUnmount, computed } from "vue";
import { useRoute } from "vue-router";
import StarIcon from "../components/Icons/StarIcon.vue";
import axios from "axios";
const myModule = useMyModule(); // Directly access the store

const hotelDetails = ref([]);
const hotelId = ref(null);
const route = useRoute();
console.log(hotelId.value);
</script>

<style scoped></style>
