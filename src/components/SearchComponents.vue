<template>
  <div class="searchicon">
    <div class="one">
      <LocationIcon />
      <input type="text" name="" id="" placeholder="where are you going" />
    </div>
    <div style="width: 30%; height: 50%; background-color: transparent">
      <VueDatePicker
        style="margin-top: -32px; background: transparent"
        v-model="date"
        :enable-time-picker="false"
        placeholder="check in date"
      />
    </div>
    <div style="width: 30%; height: 50%; background-color: transparent">
      <VueDatePicker
        style="margin-top: -32px; background: transparent"
        v-model="date"
        :enable-time-picker="false"
        placeholder="check out date"
      />
    </div>
    <div>
      <GuestsIcon />
      <input type="text" name="" id="" placeholder="Guests" />
    </div>
    <div>
      <RoomsIcon />
      <input type="text" name="" id="" placeholder="Rooms " />
    </div>

    <router-link to="/registration">
      <button
        class="searchbtn border-1 border-blue-500 bg-blue-500 inline-flex px-4 py-2 rounded items-center gap-2 cursor-pointer"
      >
        Register
      </button>
    </router-link>
  </div>
</template>

<script setup>
import { ref } from "vue";
import RoomsIcon from "../components/Icons/SearchIcons/RoomsIcon.vue";
import GuestsIcon from "../components/Icons/SearchIcons/GuestsIcon.vue";
import LocationIcon from "../components/Icons/SearchIcons/LocationIcon.vue";
const date = ref(new Date());
defineProps(["inputtype", "placehold"]);
</script>

<style scoped>
.searchicon {
  box-sizing: border-box;
  display: flex;
  height: 100%;
  width: 100%;
  padding: 11px 12px 12px 12px;
  align-items: center;
  gap: 10px;
  border-radius: 4px;
  text-align: center;
}

.searchicon div {
  display: flex;
  gap: 5px;
  border-radius: 4px;
  background: #f2f2f2;
  padding: 11px 12px 12px 12px;
}

input {
  width: 100%;
  background: transparent;
  border: solid 0px;
}

.searchbtn {
  display: flex;
  width: 134px;
  padding: 12px 18px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 6px;
  background: var(--Blue-1, #2f80ed);
  border: solid 0px;
}
.one {
  flex-basis: 30%;
}
</style>
