<template>
  <div class="all">
    <!-- Display your hotel data here -->
    <HeaderComponent style="margin-top: -80px" />
    <div class="bottom-container" style="margin-inline: 200px">
      <SearchComponents />
    </div>
    <div class="select" style="margin-inline: 100px; margin-top: 50px">
      <div class="left-side-selection">
        <div class="search-name-box">
          <p
            class="text-black dark:text-white font-sans text-base font-bold tracking-tighter leading-normal"
          >
            Search by property name
          </p>
          <div class="search-name-input">
            <SearchIcon />
            <input
              class="w-4/5 border-0 rounded-md pl-2"
              type="text"
              name=""
              id=""
              placeholder="eg. Beach westpalm"
            />
          </div>
        </div>
        <div
          style="
            color: var(--Gray-1, #333);
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            font-size: 18px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
            letter-spacing: 0.36px;
            padding: 18px;
          "
        >
          Filter by
        </div>
        <div
          class="budget-selection"
          style="
            border: solid 1px #e0e0e0;
            border-radius: 10px;
            padding-bottom: 15px;
          "
        >
          <div
            style="
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
              padding: 18px;
              font-size: 18px;
              font-weight: 700;
              border-radius: 6px 6px 0px 0px;
              border: 1px solid var(--Gray-5, #e0e0e0);
              background: var(--Gray-6, #f2f2f2);
            "
          >
            Your budget per day
          </div>
          <div style="display: grid; gap: 10px; padding-top: 15px">
            <div
              style="
                display: flex;
                justify-content: space-between;
                padding-inline: 18px;
              "
            >
              <label>
                <input type="checkbox" name="subscribe" value="yes" />
                $ 200 - $ 500
              </label>
              <div>200</div>
            </div>
            <div
              style="
                display: flex;
                justify-content: space-between;
                padding-inline: 18px;
              "
            >
              <label>
                <input type="checkbox" name="subscribe" value="yes" />
                $ 200 - $ 500
              </label>
              <div>100</div>
            </div>
            <div
              style="
                display: flex;
                justify-content: space-between;
                padding-inline: 18px;
              "
            >
              <label>
                <input type="checkbox" name="subscribe" value="yes" />
                $ 500 - $ 1,000
              </label>
              <div>50</div>
            </div>
            <div
              style="
                display: flex;
                justify-content: space-between;
                padding-inline: 18px;
              "
            >
              <label>
                <input type="checkbox" name="subscribe" value="yes" />
                $ 1000 - $ 1,500
              </label>
              <div>56</div>
            </div>
            <div
              style="
                display: flex;
                justify-content: space-between;
                padding-inline: 18px;
              "
            >
              <label>
                <input type="checkbox" name="subscribe" value="yes" />
                $ 1000 - $ 1,500
              </label>
              <div>17</div>
            </div>
            <div
              style="
                display: flex;
                justify-content: space-between;
                padding-inline: 18px;
                margin-block: 10px;
              "
            >
              <label> Set your own budget </label>
              <label class="switch">
                <input type="checkbox" />
                <span class="slider"></span>
              </label>
            </div>
            <div
              style="
                display: flex;
                justify-content: space-between;
                padding-inline: 18px;
              "
            >
              <input
                type="text"
                name=""
                id=""
                style="
                  width: 100px;
                  padding: 10px;
                  border-radius: 4px;
                  border-radius: 4px;
                  display: flex;
                  width: 112px;
                  padding: 11px 12px 12px 12px;
                  align-items: center;
                  gap: 10px;
                  border: 1px solid var(--Gray-5, #e0e0e0);
                  background: #fff;
                "
                placeholder="Min Budget"
              />
              <input
                type="text"
                name=""
                id=""
                style="
                  width: 100px;
                  border-radius: 4px;
                  border: 1px solid var(--Gray-5, #e0e0e0);
                  background: #fff;
                  display: flex;
                  width: 112px;
                  padding: 11px 12px 12px 12px;
                  align-items: center;
                  gap: 10px;
                  padding: 10px;
                  border-radius: 4px;
                "
                placeholder="Max Budget"
              />
            </div>
          </div>
        </div>

        <div
          class="rating"
          style="
            border: solid 1px #e0e0e0;
            border-radius: 10px;
            margin-top: 20px;
          "
        >
          <div
            style="
              border-radius: 6px 6px 0px 0px;
              border: 1px solid #e0e0e0;
              background: #f2f2f2;
              padding: 18px;
              font-weight: 700;
              font-size: 18px;
            "
          >
            Rating
          </div>
          <div style="padding: 18px">
            <p
              style="
                color: var(--Gray-2, #4f4f4f);
                font-family: sans-serif;
                font-size: 14px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
                margin-bottom: 15px;
                letter-spacing: 0.28px;
              "
            >
              Show only hotels rating
            </p>
            <div
              class="stars"
              style="
                display: flex;
                align-items: center;
                justify-content: space-between;
                border: solid 1px #e0e0e0;
                border-radius: 10px;
                padding: 10px;
                text-align: center;
              "
            >
              <button
                style="
                  display: flex;
                  align-items: center;
                  gap: 3px;
                  border-radius: 5px;
                  height: 40px;
                "
              >
                1 <StarIcon />
              </button>
              <button
                style="
                  display: flex;
                  align-items: center;
                  gap: 3px;
                  border-radius: 5px;
                  height: 40px;
                "
              >
                2 <StarIcon />
              </button>
              <button
                style="
                  display: flex;
                  align-items: center;
                  gap: 3px;
                  border-radius: 5px;
                  height: 40px;
                "
              >
                3 <StarIcon />
              </button>
              <button
                style="
                  display: flex;
                  align-items: center;
                  gap: 3px;
                  border-radius: 5px;
                  height: 40px;
                "
              >
                4 <StarIcon />
              </button>
              <button
                style="
                  display: flex;
                  align-items: center;
                  gap: 3px;
                  border-radius: 5px;
                  height: 40px;
                "
              >
                5 <StarIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="right-side-selection">
        <div
          class="results"
          style="display: flex; justify-content: space-between"
        >
          <p class="text-xl font-bold">
            <!-- {{ sortedHotelsMeta[0].title }} in your search -->
          </p>
          <div
            style="
              border: 1px solid #efefef;
              display: grid;
              border-radius: 6px;
              padding: 8px 12px;
            "
            class="mb-5"
          >
            <label for="sortOrder">Choose a sort order:</label>
            <select id="sortOrder" name="sortOrder" v-model="selectedSortOrder">
              <option
                v-for="sort in sortedHotels"
                :key="sort.id"
                :value="sort.id"
              >
                {{ sort.title }}
              </option>
            </select>
          </div>
        </div>

        <div v-for="hotel in hotels" :key="hotel.property.id">
          <div
            class="grid hotels-search p-5 m-3 rounded"
            style="grid-template-columns: 25% 75%; border: solid #efefef 2px"
          >
            <img
              class="p-2 h-full rounded-md"
              :src="hotel.property.photoUrls"
              alt="fff"
              style="width: 100%"
            />
            <div class="all-info-right-box">
              <div style="justify-content: space-between" class="mb-4 flex">
                <div>{{ hotel.property.name }}</div>
                <div>first row statement</div>
              </div>
              <div style="width: 80%; font-size: 14px; font-weight: 600">
                {{ hotel.accessibilityLabel }}
              </div>
              <div style="display: flex; justify-content: space-between">
                <p>Hotel rating</p>
                <div>discount av</div>
              </div>
              <div
                class="see-avail-and-price"
                style="display: flex; justify-content: space-between"
              >
                <div class="mt-10">
                  <router-link
                    :to="{
                      name: 'productdetails',
                      params: {
                        hotelId: hotel.hotel_id,
                        hotelname: hotel.property.name,
                      },
                    }"
                  >
                    {{ hotel.hotel_id }}
                    <button
                      class="w-full py-2 text-white border-none cursor-pointer rounded bg-blue-500 hover:bg-yellow-500"
                    >
                      See Availability
                    </button>
                  </router-link>
                </div>
                <div class="price-tax" style="display: grid">
                  <p style="justify-self: end">
                    {{ hotel.property.priceBreakdown.grossPrice.value }}
                  </p>
                  <p>includes Tax and fees</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <CovidComponent class="mx-28 mr-28 mt-10 mb-10" />
    <LinksFooter style="padding-left: 100px; margin-right: 100px" />
  </div>
</template>

<script setup>
import axios from "axios";
import CovidComponent from "../components/CovidComponent.vue";
import PlaneIcon from "../components/Icons/PlaneIcon.vue";
import { ref, onMounted } from "vue";
import SearchComponents from "../components/SearchComponents.vue";
import HeaderComponent from "../components/Header.vue";
import StarIcon from "../components/Icons/StarIcon.vue";
import LinksFooter from "../components/LinksFooter.vue";
import SearchIcon from "../components/Icons/SearchIcon.vue";
const hotels = ref([]);
const sortedHotels = ref([]); // Sorted hotels data
const sortedHotelsMeta = ref([]); // Sorted hotels data
const selectedSortOrder = ref("");
const fetchHotelData = async () => {
  const options = {
    method: "GET",
    url: "https://booking-com15.p.rapidapi.com/api/v1/hotels/searchHotels",
    params: {
      dest_id: "-2092174",
      search_type: "CITY",
      arrival_date: "2023-12-03",
      departure_date: "2023-12-05",
      adults: "1",
      children_age: "0,17",
      room_qty: "1",
      page_number: "1",
      languagecode: "en-us",
      currency_code: "AED",
    },
    headers: {
      "X-RapidAPI-Key": "8fe3512f62msh46ab6fcbcfebd8cp150f9fjsnd1ec453cb6db",
      "X-RapidAPI-Host": "booking-com15.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    // Update the ref with the fetched hotels
    hotels.value = response.data.data.hotels;
    sortedHotelsMeta.value = response.data.data.meta;
  } catch (error) {
    console.error(error);
  }

  const sortedOptions = {
    method: "GET",
    url: "https://booking-com15.p.rapidapi.com/api/v1/hotels/getSortBy",
    params: {
      dest_id: "-2092174",
      search_type: "CITY",
      arrival_date: "2023-12-03",
      departure_date: "2023-12-05",
      adults: "1",
      children_age: "1,17",
      room_qty: "1",
    },
    headers: {
      "X-RapidAPI-Key": "8fe3512f62msh46ab6fcbcfebd8cp150f9fjsnd1ec453cb6db",
      "X-RapidAPI-Host": "booking-com15.p.rapidapi.com",
    },
  };

  try {
    const sortedResponse = await axios.request(sortedOptions);
    // Update the ref with the fetched hotels
    sortedHotels.value = sortedResponse.data.data;
  } catch (error) {
    console.error(error);
  }
};

onMounted(() => {
  // Fetch data when the component is mounted
  fetchHotelData();
});
</script>

<style scoped>
.all {
  margin: 0px;
  padding: 0px;
}
.stars button {
  border: solid 1px #efefef;
  padding: 8px;
}
.switch {
  position: relative;
  display: inline-block;
  width: 40px;
  height: 20px;
}

/* Hide default checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* Style for the slider (the switch itself) */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 34px;
}

/* Style for the slider's thumb (the part you drag) */
.slider:before {
  position: absolute;
  content: "";
  height: 25px;
  width: 25px;
  left: 4px;
  bottom: -3px;
  left: 0px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 50%;
  box-shadow: -1px -1px 2px;
}


input:checked + .slider {
  background-color: #2196f3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(20px);
  -ms-transform: translateX(20px);
  transform: translateX(20px);
}

.search-name-box {
  background: red;
  height: 119px;
  border-radius: 6px;
  background: #f2f2f2;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.search-name-input {
  display: flex;
  padding: 11px 12px 12px 12px;
  align-items: center;
  gap: 10px;
  border-radius: 4px;
  border: 1px solid #e0e0e0;
  background: #fff;
}
.main {
}
header {
  position: relative;
  background: linear-gradient(180deg, #2969bf 0%, #144e9d 100%);
  height: 250px;
  padding-inline: 100px;
  padding-top: 0px;
}
.custom-header {
  background-color: #ffffff;
  color: #000000;
  padding: 1rem 0rem;
  display: flex;
  justify-content: space-between;
}

.left-section,
.right-section {
  display: flex;
  gap: 0.75rem;
}

.center-section {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  gap: 40px;
  color: var(--Gray-1, #333);
  font-family: sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.32px;
}
.bottom-container {
  position: relative;
  height: 64px;
  margin: -30px 105px 0 105px;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 4px 37px 0px rgba(0, 0, 0, 0.15);
}
.select {
  /* margin-inline: 100px; */
  display: grid;
  grid-template-columns: 25% 75%;
  gap: 30px;
}
</style>
