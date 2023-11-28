<template>
  <div class="searchicon">
    <div class="one">
      <LocationIcon />
      <input type="text" name="" id="" placeholder="where are you going" />
    </div>
    <div>
      <LocationIcon />
      <input type="date" name="" id="" placeholder="Check in date" />
    </div>
    <div>
      <LocationIcon />
      <input type="date" name="" id="" placeholder="Check out date" />
    </div>
    <div>
      <LocationIcon />
      <input type="text" name="" id="" placeholder="Guests" />
    </div>
    <div>
      <LocationIcon />
      <input type="text" name="" id="" placeholder="Rooms " />
    </div>
    <button class="searchbtn">search</button>
  </div>
</template>

<script setup>
import LocationIcon from "../../src/components/Icons/SearchIcons/LocationIcon.vue";

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
  background: var(--Gray-6, #f2f2f2);
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
.one{
flex-basis: 30%;
}
</style>
