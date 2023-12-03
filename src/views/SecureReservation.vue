<template>
  <div class="ml-28 mr-28 mb-36">
    <header class="bg-white text-black py-4 flex justify-between items-center">
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
            d="M14.8302 20.01C14.6199 20.5922 14.2355 21.0954 13.7291 21.4515C13.2228 21.8075 12.6191 21.999 12.0002 22C11.2102 22 10.4302 21.68 9.88018 21.11C9.56018 20.81 9.32018 20.41 9.18018 20C9.31018 20.02 9.44018 20.03 9.58018 20.05C9.81018 20.08 10.0502 20.11 10.2902 20.13C10.8602 20.18 11.4402 20.21 12.0202 20.21C12.5902 20.21 13.1602 20.18 13.7202 20.13C13.9302 20.11 14.1402 20.1 14.3402 20.07L14.8302 20.01Z"
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
    <p class="text-3xl font-bold mb-5 mt-5">Secure your reservation</p>
    <CovidComponent class="mb-8" />
    <div class="flex">
      <div style="width: 70%">
        <div class="room-reservation" style="margin-right: 15px">
          <div
            class="text-white flex gap-4 bg-sky-600 pt-4 pb-4 pl-4 rounded-t-md font-semibold text-l"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
            >
              <path
                d="M21.5835 4.79502L15.7618 2.61335C14.7935 2.25169 13.2068 2.25169 12.2385 2.61335L6.41685 4.79502C5.07518 5.29669 3.97852 6.88335 3.97852 8.30669V16.975C3.97852 18.3517 4.88852 20.16 5.99685 20.9884L11.0135 24.7334C12.6585 25.97 15.3652 25.97 17.0102 24.7334L22.0268 20.9884C23.1352 20.16 24.0452 18.3517 24.0452 16.975V8.30669C24.0218 6.88335 22.9252 5.29669 21.5835 4.79502ZM13.9185 8.20169C15.2952 8.20169 16.4152 9.32169 16.4152 10.6984C16.4152 12.0517 15.3535 13.1367 14.0118 13.1834H13.8952C12.4952 13.1367 11.4452 12.0517 11.4452 10.6984C11.4335 9.32169 12.5535 8.20169 13.9185 8.20169ZM16.5552 19.0867C15.8435 19.5534 14.9218 19.7984 14.0002 19.7984C13.0785 19.7984 12.1452 19.565 11.4452 19.0867C10.7802 18.6434 10.4185 18.0367 10.4068 17.3717C10.4068 16.7184 10.7802 16.0884 11.4452 15.645C12.8568 14.7117 15.1552 14.7117 16.5668 15.645C17.2318 16.0884 17.6052 16.695 17.6052 17.36C17.5935 18.0134 17.2202 18.6434 16.5552 19.0867Z"
                fill="white"
              />
            </svg>
            <span>Room 1 </span> 2 adults, 1 double bed and 1 twin bed,
            Non-smoking
          </div>
          <form action="" style="width: 100%">
            <div style="" class="p-5 bg-slate-100">
              <div class="flex">
                <label for="" style="width: 30%" class="font-semibold"
                  >First name</label
                >
                <label
                  for=""
                  style="width: 30%; margin-left: 10px"
                  class="font-semibold"
                  >Last name</label
                >
              </div>
              <div class="flex gap-3 mb-3">
                <input
                  class="p-2 rounded-md"
                  type="text"
                  name=""
                  id=""
                  style="width: 30%"
                  required
                />
                <input
                  class="p-2 rounded-md"
                  type="text"
                  name=""
                  id=""
                  style="width: 30%"
                  required
                />
              </div>
              <div style="display: flex">
                <label for="" style="width: 50%" class="font-semibold"
                  >Mobile number</label
                >
              </div>
              <div style="display: flex; gap: 10px">
                <div
                  class="flex bg-slate-200 p-2 rounded-md gap-2 items-center"
                >
                  <img src="../assets/image 5.png" alt="" />
                  +61
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M13.2797 5.96655L8.93306 10.3132C8.41973 10.8266 7.57973 10.8266 7.06639 10.3132L2.71973 5.96655"
                      stroke="#4F4F4F"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <input
                  class="p-2 rounded-md"
                  type="text"
                  name=""
                  id=""
                  style="width: 48%"
                  required
                />
              </div>
              <input class="mt-5" type="checkbox" name="ask" id="ask" />
              <label for="ask" class="text-lg ml-2"
                >Receive text alerts about this trip.</label
              >
            </div>
            <div class="payment-options bg-slate-100" style="margin-top: 50px">
              <div
                class="text-white mb-3 flex gap-4 bg-sky-600 pt-4 pb-4 pl-4 rounded-t-md font-semibold text-l"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                >
                  <path
                    d="M21.5835 4.79502L15.7618 2.61335C14.7935 2.25169 13.2068 2.25169 12.2385 2.61335L6.41685 4.79502C5.07518 5.29669 3.97852 6.88335 3.97852 8.30669V16.975C3.97852 18.3517 4.88852 20.16 5.99685 20.9884L11.0135 24.7334C12.6585 25.97 15.3652 25.97 17.0102 24.7334L22.0268 20.9884C23.1352 20.16 24.0452 18.3517 24.0452 16.975V8.30669C24.0218 6.88335 22.9252 5.29669 21.5835 4.79502ZM13.9185 8.20169C15.2952 8.20169 16.4152 9.32169 16.4152 10.6984C16.4152 12.0517 15.3535 13.1367 14.0118 13.1834H13.8952C12.4952 13.1367 11.4452 12.0517 11.4452 10.6984C11.4335 9.32169 12.5535 8.20169 13.9185 8.20169ZM16.5552 19.0867C15.8435 19.5534 14.9218 19.7984 14.0002 19.7984C13.0785 19.7984 12.1452 19.565 11.4452 19.0867C10.7802 18.6434 10.4185 18.0367 10.4068 17.3717C10.4068 16.7184 10.7802 16.0884 11.4452 15.645C12.8568 14.7117 15.1552 14.7117 16.5668 15.645C17.2318 16.0884 17.6052 16.695 17.6052 17.36C17.5935 18.0134 17.2202 18.6434 16.5552 19.0867Z"
                    fill="white"
                  />
                </svg>
                Payment options
              </div>
              <div class="ml-5">
                <a style="border-bottom: solid rgb(66, 129, 247); padding: 10px"
                  >Debit/Credit Card</a
                >
                <!-- <hr style="border: solid 2px" /> -->
              </div>
              <div style="display: flex; gap: 5px" class="mt-6 ml-6">
                <div class="pt-3 pl-3 pr-3 pb-2 rounded-xl bg-slate-200">
                  <img src="../assets/image 6.png" alt="" />
                </div>
                <div class="pt-3 pl-3 pr-3 pb-2 rounded-xl bg-slate-200">
                  <img src="../assets/image 10.png" alt="" />
                </div>
                <div class="pt-3 pl-3 pr-3 pb-2 rounded-xl bg-slate-200">
                  <img src="../assets/discover.png" alt="" />
                </div>
                <div class="pt-3 pl-3 pr-3 pb-2 rounded-xl bg-slate-200">
                  <img src="../assets/visa.png" alt="" />
                </div>
              </div>
              <div class="ml-6 mt-3">
                <label for="" class="text-base font-semibold"
                  >Name on card</label
                >
                <div>
                  <input
                    type="text"
                    required
                    class="bg-slate-100 h-8 w-1/2 rounded-md"
                  />
                  &copy;
                </div>
                <label for=" " class="text-base font-semibold"
                  >Debit/Credit card number</label
                >
                <div>
                  <input
                    type="number"
                    required
                    class="bg-slate-100 h-8 w-1/2 rounded-md"
                  />
                  &copy;
                </div>
                <label for="">Expiration Date</label>
                <div
                  style="
                    display: grid;
                    gap: 10px;
                    grid-template-columns: 20% 20% 5%;
                  "
                >
                  <VueDatePicker v-model="month" month-picker />
                  <VueDatePicker v-model="year" year-picker required />
                  <div style="display: flex; align-items: center">
                    <span>&copy;</span>
                  </div>
                </div>
                <div
                  style="
                    display: grid;
                    gap: 10px;
                    grid-template-columns: 25% 25% 5%;
                  "
                >
                  <div class="mb-3 mt-3">
                    <label for="">Security Code</label>
                    <input
                      class="border-solid border-2 border-gray w-54 h-9 pl-2 rounded-md"
                    />
                  </div>
                  <div class="flex">
                    <div class="mb-3 mt-3">
                      <label for="">Billing Zip code</label>
                      <input
                        class="border-solid border-2 border-gray w-54 h-9 pl-2 rounded-md"
                      />
                    </div>
                    <div style="display: flex; align-items: center">
                      <span class="mt-5">&copy;</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="important-info bg-slate-100">
              <div
                class="text-white mb-3 flex gap-4 bg-yellow-500 mt-10 pt-4 pb-4 pl-4 rounded-t-md font-semibold text-l"
              >
                Important information about your booking
              </div>
              <div class="p-6 mb-6">
                <ol>
                  <li>
                    1- This rate is non-refundable. If you change or cancel your
                    booking you will not get a refund or credit to use for a
                    future stay.
                  </li>
                  <li>2- Stay extensions will require a new reservation.</li>
                  <li>3- Front desk staff will greet guests on arrival</li>
                  <li>
                    4- No refunds will be issued for late check-in or early
                    check-out.
                  </li>
                </ol>
              </div>
              <div class="p-5">
                <p>
                  By clicking the button below, I acknowledge that I have
                  reviewed the Privacy Statement and have reviewd and accept the
                  Rules and Restrictions and Terms of Use.
                </p>
              </div>
              <button
                class="p-3 ml-5 rounded font-semibold bg-blue-600"
                id="show-modal"
                @click="showModal = true"
              >
                Complete Booking
              </button>
              <p class="pl-5 mt-5 flex gap-3 pb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 7.75C10.11 7.75 9.75 8.54 9.75 10V10.62H14.25V10C14.25 8.54 13.89 7.75 12 7.75Z"
                    fill="#219653"
                  />
                  <path
                    d="M11.998 15.0979C12.2897 15.0979 12.5695 14.9821 12.7758 14.7758C12.9821 14.5695 13.098 14.2897 13.098 13.9979C13.098 13.7062 12.9821 13.4264 12.7758 13.2201C12.5695 13.0138 12.2897 12.8979 11.998 12.8979C11.7063 12.8979 11.4265 13.0138 11.2202 13.2201C11.0139 13.4264 10.898 13.7062 10.898 13.9979C10.898 14.2897 11.0139 14.5695 11.2202 14.7758C11.4265 14.9821 11.7063 15.0979 11.998 15.0979Z"
                    fill="#219653"
                  />
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM17.38 14.5C17.38 16.7 16.7 17.38 14.5 17.38H9.5C7.3 17.38 6.62 16.7 6.62 14.5V13.5C6.62 11.79 7.03 11 8.25 10.73V10C8.25 9.07 8.25 6.25 12 6.25C15.75 6.25 15.75 9.07 15.75 10V10.73C16.97 11 17.38 11.79 17.38 13.5V14.5Z"
                    fill="#219653"
                  />
                </svg>
                We use secure transmission and encrypted storage to protect your
                personal information
              </p>
              <Teleport to="body">
                <!-- use the modal component, pass in the prop -->
                <BookingSuccessful :show="showModal" @close="showModal = false">
                  <template #header>
                    <h3>
                      <img
                        style="width: 160px; height: 160px"
                        :src="successImg"
                        alt=""
                      />
                    </h3>
                  </template>
                  <template #body>
                    <div style="text-align: center">
                      <p>Booking Successful</p>
                      <p>
                        Congratulations your reservation has been made. You will
                        be notified 2 days prior the date.
                      </p>
                    </div>
                  </template>
                </BookingSuccessful>
              </Teleport>
            </div>
          </form>
        </div>
      </div>
      <div style="width: 30%">
        <div class="bg-gray-100 rounded">
          <div>
            <img
              style="width: 100%"
              src="../assets/home/Rectangle 2.png"
              alt=""
            />
          </div>
          <div style="padding: 0px 20px 10px">
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
        </div>
        <div class="mt-5 bg-slate-50 pb-4">
          <div
            class="text-white mb-3 flex gap-4 bg-green-400 pt-4 pb-4 pl-4 rounded-t-md font-semibold text-l"
          >
            Price Details
          </div>
          <div
            class="pl-5 pr-5 mb-5 mt-6"
            style="display: flex; justify-content: space-between"
          >
            <p>1room per</p>
            <p>$ 300</p>
          </div>
          <div
            class="pl-5 pr-5 mt-3 mb-4"
            style="display: flex; justify-content: space-between"
          >
            <p>1room per</p>
            <p>$ 120.32</p>
          </div>
          <hr />
          <div
            class="pl-5 pr-5 mt-3 mb-3"
            style="display: flex; justify-content: space-between"
          >
            <p class="font-bold text-xl">Total</p>
            <p class="font-bold text-xl">$ 300</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import CovidComponent from "../components/CovidComponent.vue";
import { ref } from "vue";
import successImg from "../assets/success.png";
import BookingSuccessful from "./BookingSuccessful.vue";
import PlaneIcon from "../components/Icons/PlaneIcon.vue";
import flagIcon from "../assets/flag.png";
import StarIcon from "../components/Icons/StarIcon.vue";

import RoomsIcon from "../components/Icons/SearchIcons/RoomsIcon.vue";
import StarIconVue from "../components/Icons/StarIcon.vue";
const showModal = ref(false);
const year = ref(new Date().getFullYear());
const month = ref({
  month: new Date().getMonth(),
  year: new Date().getFullYear(),
});
</script>

<style scoped></style>
