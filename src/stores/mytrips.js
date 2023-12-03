import { defineStore } from "pinia";
export const useMyModule = defineStore({
  id: "mytrips",
  state: () => ({
    hotels: [{}],
    hotelId: null,
  }),
  actions: {
    async setHotelIdAsync(hotelId) {
      // You can perform asynchronous logic here
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Set the hotelId in the store
      this.hotelId = hotelId;
    },
    async setHotelsAsync(hotelImage) {
      // You can perform asynchronous logic here
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Set the hotelId in the store
      this.hotels.push(hotelImage);
    },
  },
});
