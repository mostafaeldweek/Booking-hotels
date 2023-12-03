// // src/store/index.js
// import { defineStore } from "pinia";
// import axios from "axios";

// export const useHotelStore = defineStore({
//   id: "hotel",
//   state: () => ({
//     hotelDetails: [],
//     hotelId: null,
//   }),
//   actions: {
//     async fetchHotelDetails() {
//       // Your existing logic for fetching hotel details
//       // You may need to adjust the URL and parameters accordingly
//       const options = {
//         method: "GET",
//         url: "https://booking-com15.p.rapidapi.com/api/v1/hotels/getHotelDetails",
//         params: {
//           hotel_id: this.hotelId,
//           arrival_date: "2023-11-30",
//           departure_date: "2023-12-5",
//           adults: "1",
//           children_age: "1,17",
//           room_qty: "1",
//           languagecode: "en-us",
//           currency_code: "EUR",
//         },
//         headers: {
//           "X-RapidAPI-Key":
//             "3c64eee607mshd9a8b5692ab2a69p128742jsn05bb2d37a272",
//           "X-RapidAPI-Host": "booking-com15.p.rapidapi.com",
//         },
//       };

//       try {
//         const response = await axios.request(options);
//         this.hotelDetails = response.data.data;
//       } catch (error) {
//         console.error(error);
//       }
//     },

//     updateHotelId(newHotelId) {
//       this.hotelId = newHotelId;
//     },
//   },
// });
// src/store/modules/myModule.js
// counter.js
// counter.js
