<template>
  <div>
    <HeaderComponent class="ps-28 pe-28" />

    <div
      v-if="hotelDetails && hotelDetails.block && hotelDetails.block[0]"
      class="ps-28 pe-28"
    >
      <!-- Room Images -->
      <div class="room-image" style="display: flex; gap: 30px; width: 100%">
        <div class="w-2/3">
          <img
            style="width: 100%; height: 460px; border-radius: 10px"
            :src="getRoomPhotoUrl()"
            alt=""
          />
        </div>
        <div style="width: 400px">
          <img
            style="height: 200px; border-radius: 10px; width: 400px"
            :src="getRoomPhotoUrl2()"
            alt=""
          />
          <img
            class="mt-3"
            style="height: 250px; border-radius: 10px; width: 400px"
            :src="getRoomPhotoUrl3()"
            alt=""
          />
        </div>
      </div>

      <!-- Overview Bar -->
      <div
        class="overview-bar"
        style="display: flex; gap: 20px; margin: 10px; font-size: 20px"
      >
        <a style="cursor: pointer; border-bottom: solid">overview</a>
        <a style="cursor: pointer">Rooms</a>
      </div>

      <!-- Main Details -->
      <div class="main-details" style="display: flex">
        <div style="width: 70%">
          <p class="mt-5 mb-5">{{ $route.params.hotelname.trim() }}</p>
          <p class="mt-5 mb-5">Rating</p>
          <p class="mt-5 mb-5">Location</p>

          <!-- Overview Section -->
          <div class="overview">
            <h2 class="pt-5 pl-5 font-bold">Overview</h2>
            <p class="pt-5 pl-5">
              {{ hotelDetails.sustainability.sustainability_page.description }}
            </p>
            <p class="pt-5 pl-5 pr-10">
              {{
                hotelDetails.sustainability.sustainability_page.level_details
              }}
            </p>
            <hr />
            <p class="pt-5 pl-5 text-xl font-bold">Top Facilities</p>
            <div class="pt-5 pl-5" style="display: flex; flex-wrap: wrap">
              <div
                class="facilities"
                style="flex-basis: 34%; box-sizing: border-box; padding: 5px"
                v-for="hoteldetails in hotelDetails.facilities_block.facilities"
                :key="hoteldetails.icon"
              >
                <div class="flex gap-2 pb-2">
                  <RoomsIcon /> {{ hoteldetails.name }}
                </div>
              </div>
            </div>
          </div>

          <p class="pt-7 pb-2 font-bold text-xl">Available Room</p>

          <!-- Available Room Section -->
        </div>

        <!-- Other Section -->
        <div style="width: 30%" class="flex flex-col gap-6">
          <img :src="mapimage" alt="" class="pl-5" />

          <div class="pl-5 flex flex-col gap-2 text-slate-500">
            <p class="text-slate-800 text-xl font-semibold">Explore the area</p>
            <div class="flex justify-between">
              <p class="flex"><PlaneIcon /> Hotel Penselvenyia</p>
              <p>2 min drive</p>
            </div>
            <div class="flex justify-between">
              <p class="flex"><LocationIcon />Hotel Penselvenyia</p>
              <p>10 min drive</p>
            </div>
            <div class="flex justify-between">
              <p class="flex"><LocationIcon />Hotel Penselvenyia</p>
              <p>15 min drive</p>
            </div>
            <div class="flex justify-between">
              <p class="flex"><LocationIcon />Hotel Penselvenyia</p>
              <p>18 min drive</p>
            </div>
            <div class="flex justify-between">
              <p class="flex"><LocationIcon />Hotel Penselvenyia</p>
              <p>32 min drive</p>
            </div>
          </div>
        </div>
      </div>
      <div class="flex gap-4">
        <div
          style="
            flex: 1;
            border: 1px solid #00c0c0;
            padding: 10px;
            border-radius: 6px;
            background: linear-gradient(180deg, #4796ff 0%, #2366bf 100%);
          "
          class="flex h-3/4"
        >
          <div class="flex justify-center flex-col gap-3 pl-3">
            <p class="flex w-44 font-medium text-xl text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M3.414 13.7779C2.5 13.9999 2 15.1919 2 15.1919C2 15.1919 5.398 15.6259 6.949 17.3129C8.5 18.9999 9.071 22.2629 9.071 22.2629C9.071 22.2629 10.47 22.6979 10.485 20.8489C10.5 18.9999 9.778 17.3129 9.778 17.3129L13.091 13.9999L16.701 21.7039C16.701 21.7039 18.08 22.2299 18.04 20.3649C18 18.4999 16.85 10.2419 16.85 10.2419L19.678 7.41294C19.869 7.22845 20.0214 7.00776 20.1262 6.76375C20.231 6.51974 20.2862 6.2573 20.2885 5.99174C20.2908 5.72619 20.2402 5.46283 20.1396 5.21703C20.0391 4.97124 19.8906 4.74794 19.7028 4.56015C19.515 4.37237 19.2917 4.22386 19.0459 4.1233C18.8001 4.02274 18.5368 3.97213 18.2712 3.97444C18.0056 3.97675 17.7432 4.03192 17.4992 4.13674C17.2552 4.24156 17.0345 4.39392 16.85 4.58494L13.947 7.48794C13.947 7.48794 6.148 6.09394 3.824 6.29694C1.5 6.49994 2.559 7.56294 2.559 7.56294L10.203 11.2329L6.95 14.4859C6.95 14.4859 4.328 13.5559 3.414 13.7779Z"
                  fill="white"
                />
              </svg>
              my Dream Place
            </p>
            <p class="w-44 font-medium text-xl text-white">
              20% off Use Promotional Coupon Code:
              <span class="text-yellow-400">Orlando</span>
            </p>
          </div>
          <img src="../assets/home/Frame.png" alt="" />
        </div>
        <div style="flex: 1">
          <img
            style="width: 100%; height: 260px"
            :src="getRoomPhotoUrl()"
            alt=""
          />
          <div class="flex mb-2 mt-2">
            <RoomsIcon />
            <p>300 sq ft</p>
          </div>
          <div class="flex mb-2">
            <RoomsIcon />
            <p>Sleeps 3</p>
          </div>
          <div class="flex mb-2">
            <RoomsIcon />
            <p>1 double bed and 1 twin bed</p>
          </div>
          <router-link to="/securereservation">
            <button
              class="w-full text-xl py-2 text-white border-none cursor-pointer rounded bg-blue-500"
            >
              Reserve suite
            </button>
          </router-link>
        </div>
        <div style="flex: 1">
          <img
            class="rounded-t-lg rounded-r-lg"
            style="width: 100%; height: 260px"
            :src="getRoomPhotoUrl()"
            alt=""
          />

          <div class="flex mb-2 mt-2">
            <RoomsIcon />
            <p>300 sq ft</p>
          </div>
          <div class="flex mb-2">
            <RoomsIcon />
            <p>Sleeps 3</p>
          </div>
          <div class="flex mb-2">
            <RoomsIcon />
            <p>1 double bed and 1 twin bed</p>
          </div>
          <router-link to="/securereservation">
            <button
              class="text-xl w-full py-2 text-white border-none cursor-pointer rounded bg-blue-500"
            >
              Reserve suite
            </button>
          </router-link>
        </div>
      </div>
      <CovidComponent class="mt-10 mb-10" />
      <LinksFooter />
      <!-- <p>Hotel ID: {{ hotelId }}</p>
      <p>Hotel ID: {{ $route.params.hotelname.trim() }}</p> -->
    </div>

    <!-- Loading State -->
    <div v-else>Loading...</div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from "vue";
import { useRoute } from "vue-router";
import LinksFooter from "../components/LinksFooter.vue";
import HeaderComponent from "../components/Header.vue";
import axios from "axios";
import mapimage from "../assets/mapimage.png";
import CovidComponent from "../components/CovidComponent.vue";
import PlaneIcon from "../components/Icons/PlaneIcon.vue";
import RoomsIcon from "../components/Icons/SearchIcons/RoomsIcon.vue";
import LocationIcon from "../components/Icons/SearchIcons/LocationIcon.vue";
const hotelDetails = ref([]);
const hotelId = ref(null);
const route = useRoute();
import { useMyModule } from "../stores/mytrips.js";

const myModule = useMyModule(); // Directly access the store

const fetchHotelDetailsData = async () => {
  const options = {
    method: "GET",
    url: "https://booking-com15.p.rapidapi.com/api/v1/hotels/getHotelDetails",
    params: {
      hotel_id: hotelId.value,
      arrival_date: "2023-12-02",
      departure_date: "2023-12-04",
      adults: "1",
      children_age: "1,17",
      room_qty: "1",
      languagecode: "en-us",
      currency_code: "EUR",
    },
    headers: {
      "X-RapidAPI-Key": "8fe3512f62msh46ab6fcbcfebd8cp150f9fjsnd1ec453cb6db",
      "X-RapidAPI-Host": "booking-com15.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    hotelDetails.value = response.data.data;
  } catch (error) {
    console.error(error);
  }
};

const getRoomPhotoUrl = () => {
  if (hotelDetails.value.block && hotelDetails.value.block[0]) {
    const room = hotelDetails.value.rooms[hotelDetails.value.block[0].room_id];
    if (room && room.photos && room.photos[1]) {
      return room.photos[1].url_max750;
    }
  }
  return ""; // Default or placeholder image URL
};
const getRoomPhotoUrl2 = () => {
  if (hotelDetails.value.block && hotelDetails.value.block[0]) {
    const room = hotelDetails.value.rooms[hotelDetails.value.block[0].room_id];
    if (room && room.photos && room.photos[2]) {
      return room.photos[2].url_max750;
    }
  }
  return ""; // Default or placeholder image URL
};
const getRoomPhotoUrl3 = () => {
  if (hotelDetails.value.block && hotelDetails.value.block[0]) {
    const room = hotelDetails.value.rooms[hotelDetails.value.block[0].room_id];
    if (room && room.photos && room.photos[3]) {
      return room.photos[3].url_max750;
    }
  }
  return ""; // Default or placeholder image URL
};

const updateHotelId = () => {
  hotelId.value = route.params.hotelId;
  const hotelData = {
    img: getRoomPhotoUrl(),
    id: route.params.hotelId,
    hotelName: hotelDetails.value.name, // Use .value to access ref values
    hotelInfo: hotelDetails.value,
  };

  myModule.setHotelIdAsync(route.params.hotelId);
  myModule.setHotelsAsync(hotelData);
  fetchHotelDetailsData();
};

onMounted(() => {
  hotelId.value = route.params.hotelId;

  const hotelData = {
    img: getRoomPhotoUrl(),
    id: route.params.hotelId,
    hotelName: hotelDetails.value.name,
    hotelInfo: hotelDetails.value,
  };

  myModule.setHotelIdAsync(route.params.hotelId);
  myModule.setHotelsAsync(hotelData);
  fetchHotelDetailsData();
});

onBeforeUnmount(() => {
  // Cleanup logic if needed
});

// Navigation guards
const beforeRouteUpdate = async (to, from, next) => {
  updateHotelId();
  next();
};

const beforeRouteLeave = async (to, from, next) => {
  // Cleanup logic if needed
  next();
};
</script>

<style scoped>
/* ... Your styles ... */
</style>
