<template>
  <div>
    <Header />
    <div class="room-image" style="display: flex; gap: 10px; width: 100%">
      <div>
        <img
          style="height: 350px; border-radius: 10px"
          :src="getRoomPhotoUrl()"
          alt=""
        />
      </div>
      <div>
        <img
          style="height: 170px; border-radius: 10px"
          :src="getRoomPhotoUrl2()"
          alt=""
        />
        <img
          style="height: 170px; border-radius: 10px"
          :src="getRoomPhotoUrl3()"
          alt=""
        />
      </div>
    </div>

    <div
      class="overview-bar"
      style="display: flex; gap: 20px; margin: 10px; font-size: 20px"
    >
      <a style="cursor: pointer; border-bottom: solid">overview</a>
      <a style="cursor: pointer">Rooms</a>
    </div>

    <div class="main-details" style="display: flex">
      <div style="width: 70%">
        <p>Lakeside Motel Warefront</p>
        <p>Rating</p>
        <p>locatioin</p>
        <div class="overview" style="background-color: #efefef">
          <h3>overview</h3>
          <p>
            Featuring free WiFi throughout the property, Lakeside Motel
            Waterfront offers accommodations in Lakes Entrance, 19 mi from
            Bairnsdale. Free private parking is available on site. Each room at
            this motel is air conditioned and comes with a flat-screen TV. You
            will find a kettle, toaster and a microwave in the room. Each room
            is fitted with a private bathroom. Guests have access to barbecue
            facilities and a lovely large lawn area. Metung is 6.8 mi from
            Lakeside Motel Waterfront, while Paynesville is 14 mi from the
            property. Couples in particular like the location – they rated it
            9.2 for a two-person trip.
          </p>
          <hr />
          <p>facilities</p>
          <div style="display: flex; flex-wrap: wrap">
            <div
              class="facilities"
              style="flex-basis: 34%; box-sizing: border-box; padding: 5px"
              v-for="hoteldetails in hotelDetails.facilities_block.facilities"
              :key="hoteldetails.icon"
            >
              {{ hoteldetails.name }}
            </div>
          </div>
        </div>
        <p>Available Room</p>
        <div style="display: flex">
          <div
            style="
              flex: 1;
              border: 1px solid #00c0c0;
              padding: 10px;
              border-radius: 6px;
              background: linear-gradient(180deg, #4796ff 0%, #2366bf 100%);
              width: 33%;
              flex-shrink: 0;
            "
          >
            <p style="width: 100%; height: 340px">aaaaaaa</p>
            <p>20% off Use Promotional Coupon Code: Orlando</p>
          </div>
          <div style="flex: 1; border: 1px solid #00cfc0; padding: 10px">
            <img
              style="width: 200px; height: 200px; border-radius: 10px"
              :src="getRoomPhotoUrl()"
              alt=""
            />
          </div>
          <div style="flex: 1; border: 1px solid #00c0c0; padding: 10px">
            <img
              style="width: 100%; height: 200px; border-radius: 10px"
              :src="getRoomPhotoUrl()"
              alt=""
            />
          </div>
        </div>
      </div>
      <div style="width: 30%">س</div>
    </div>
    <p>Hotel ID: {{ hotelId }}</p>
    <p>Hotel ID: {{ $route.params.hotelname.trim() }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from "vue";
import { useRoute } from "vue-router";
import Header from "../components/Header.vue";
import axios from "axios";

const hotelDetails = ref([]);
const hotelId = ref(null);
const route = useRoute();

const fetchHotelDetailsData = async () => {
  const options = {
    method: "GET",
    url: "https://booking-com15.p.rapidapi.com/api/v1/hotels/getHotelDetails",
    params: {
      hotel_id: hotelId.value,
      arrival_date: "2023-11-29",
      departure_date: "2023-11-30",
      adults: "1",
      children_age: "1,17",
      room_qty: "1",
      languagecode: "en-us",
      currency_code: "EUR",
    },
    headers: {
      "X-RapidAPI-Key": "3c64eee607mshd9a8b5692ab2a69p128742jsn05bb2d37a272",
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
  fetchHotelDetailsData();
};

onMounted(() => {
  hotelId.value = route.params.hotelId;
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
