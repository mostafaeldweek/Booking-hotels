<template>
  <div>
    <!-- Display your hotel data here -->
    <div v-for="hotel in hotels" :key="hotel.property.id">
      <!-- <h2>{{ hotel.property.priceBreakdown.grossPrice.value }}</h2> -->
      <!-- Add more details as needed -->
    </div>
    <header>
      <nav style="margin-inline: 100px">
        <header class="custom-header">
          <!-- Left Section (2 elements) -->
          <div class="left-section">
            <span>
              <PlaneIcon />
            </span>
            <span>Left Element 2</span>
          </div>

          <!-- Center Section (5 elements) -->
          <div class="center-section">
            <span>Home</span>
            <span>Discover</span>
            <span>activites</span>
            <span>About</span>
            <span>Contact</span>
          </div>

          <!-- Right Section (2 elements) -->
          <div class="right-section">
            <router-link to="/registration">
              <button
                class="w-full py-2 text-white border-none cursor-pointer rounded bg-blue-500 hover:bg-yellow-500"
              >
                Login
              </button>
            </router-link>
          </div>
        </header>
      </nav>
    </header>
    <div class="bottom-container">
      <SearchComponents />
    </div>
    <div class="select">
      <div class="left-side-selection">
        <div class="search-name-box">
          <p>Search by property name</p>
          <div class="search-name-input">
            &copf;;
            <input type="text" name="" id="" placeholder="eg. Beach westpalm" />
          </div>
        </div>
        <div style="padding: 18px">Filter by</div>
        <div
          class="budget-selection"
          style="border: solid 1px #e0e0e0; border-radius: 20px"
        >
          <div style="padding-inline: 18px">Your budget per day</div>
          <div>
            <div
              style="
                display: flex;
                justify-content: space-between;
                padding-inline: 18px;
              "
            >
              <label>
                <input type="checkbox" name="subscribe" value="yes" />
                Subscribe
              </label>
              <div>one two</div>
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
                Subscribe
              </label>
              <div>one two</div>
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
                Subscribe
              </label>
              <div>one two</div>
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
                Subscribe
              </label>
              <div>one two</div>
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
                Subscribe
              </label>
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
                style="width: 100px"
                placeholder="Max Budget"
              />
              <input
                type="text"
                name=""
                id=""
                style="width: 100px"
                placeholder="Max Budget"
              />
            </div>
          </div>
        </div>

        <div
          class="rating"
          style="border: solid 1px #e0e0e0; border-radius: 20px; padding: 18px"
        >
          <div>Rating</div>
          <div>
            <p>Show only hotels rating</p>
            <div
              class="stars"
              style="
                display: flex;
                justify-content: space-between;
                border: solid 1px #e0e0e0;
                border-radius: 10px;
                padding: 10px;
              "
            >
              <button>1 &copf;</button>
              <button>1 &copf;</button>
              <button>1 &copf;</button>
              <button>1 &copf;</button>
              <button>1 &copf;</button>
            </div>
          </div>
        </div>
      </div>
      <div class="right-side-selection">
        <div
          class="results"
          style="display: flex; justify-content: space-between"
        >
          <p>Melbourne : 2,582 search results found</p>
          <div
            style="
              border: 1px solid #efefef;
              display: grid;
              border-radius: 6px;
              padding: 8px 12px;
            "
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
            <div>{{ selectedSortOrder }}</div>
          </div>
        </div>

        <div v-for="hotel in hotels" :key="hotel.property.id">
          <!-- <h2>{{ hotel.property.priceBreakdown.grossPrice.value }}</h2> -->
          <!-- Add more details as needed -->
          <div
            class="hotels-search"
            style="
              display: grid;
              grid-template-columns: 25% 75%;
              border: solid #efefef 2px;
              padding: 18px;
              border-radius: 4px;
            "
          >
            <img :src="hotel.property.photoUrls" alt="fff" style="width: 60%" />
            <div class="all-info-right-box">
              <div style="display: flex; justify-content: space-between">
                <div>{{ hotel.property.name }}</div>
                <div>first row statement</div>
              </div>
              <div style="width: 70%; font-size: 9px; font-weight: 600">
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
                <div>
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
  </div>
</template>

<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";
import SearchComponents from "../components/SearchComponents.vue";

const hotels = ref([]);
const sortedHotels = ref([]); // Sorted hotels data
const selectedSortOrder = ref("");
const fetchHotelData = async () => {
  const options = {
    method: "GET",
    url: "https://booking-com15.p.rapidapi.com/api/v1/hotels/searchHotels",
    params: {
      dest_id: "-2092174",
      search_type: "CITY",
      arrival_date: "2023-11-28",
      departure_date: "2023-11-29",
      adults: "1",
      sort_by: "closest_beach_distance",
      children_age: "0,17",
      room_qty: "1",
      page_number: "1",
      languagecode: "en-us",
      currency_code: "INR",
    },
    headers: {
      "X-RapidAPI-Key": "3c64eee607mshd9a8b5692ab2a69p128742jsn05bb2d37a272",
      "X-RapidAPI-Host": "booking-com15.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    // Update the ref with the fetched hotels
    hotels.value = response.data.data.hotels;
  } catch (error) {
    console.error(error);
  }

  const sortedOptions = {
    method: "GET",
    url: "https://booking-com15.p.rapidapi.com/api/v1/hotels/getSortBy",
    params: {
      dest_id: "-2092174",
      search_type: "CITY",
      arrival_date: "2023-11-28",
      departure_date: "2023-11-29",
      adults: "1",
      children_age: "1,17",
      room_qty: "1",
    },
    headers: {
      "X-RapidAPI-Key": "3c64eee607mshd9a8b5692ab2a69p128742jsn05bb2d37a272",
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

/* Checked state styles */
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
  width: 295px;
  height: 119px;
  border-radius: 6px;
  background: var(--Gray-6, #f2f2f2);
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.search-name-input {
  display: flex;
  width: 259px;
  padding: 11px 12px 12px 12px;
  align-items: center;
  gap: 10px;
  border-radius: 4px;
  border: 1px solid var(--Gray-5, #e0e0e0);
  background: #fff;
}
.main {
}
header {
  background: linear-gradient(180deg, #2969bf 0%, #144e9d 100%);
  height: 200px;
}
nav {
}
.custom-header {
  background-color: #ffffff; /* Example background color */
  color: #000000; /* Example text color */
  padding: 1rem 0rem; /* Example padding */
  display: flex;
  justify-content: space-between;
}

.left-section,
.right-section {
  display: flex;
  gap: 0.75rem; /* Example space between elements */
}

.center-section {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  gap: 40px; /* Example space between elements */
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
.select div:first-child {
}
.select div:nth-child(2) {
}
</style>
