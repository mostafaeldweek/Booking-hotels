<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-column">
        <div class="flex mb-5 font-bold"><PlaneIcon /> my Dream Place</div>
        <ul>
          <li><a href="#">Your next goto companion <br> for travel</a></li>
        </ul>
      </div>
      <div class="footer-column">
        <h3 class="mb-5 font-bold">Company</h3>
        <ul>
          <li><a href="#">About</a></li>
          <li><a href="#">Jobs</a></li>
          <li><a href="#">Newsroom</a></li>
          <li><a href="#">Advertising</a></li>
          <li><a href="#">Contact us</a></li>
        </ul>
      </div>
      <div class="footer-column">
        <h3 class="mb-5 font-bold">Explore</h3>
        <ul>
          <li><a href="#">Australia</a></li>
          <li><a href="#">New Zealand</a></li>
          <li><a href="#">United States America (USA)</a></li>
          <li><a href="#">Greece</a></li>
          <li><a href="#">Maldives</a></li>
          <li><a href="#">Singapore</a></li>
          <li><a href="#" style="color: deepskyblue">See more</a></li>
        </ul>
      </div>
      <div class="footer-column">
        <h3 class="mb-5 font-bold">Terms and Policies</h3>
        <ul>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms of Service</a></li>
          <li><a href="#">Disclaimer</a></li>
        </ul>
      </div>
      <div class="footer-column">
        <h3 class="mb-5 font-bold">Help</h3>
        <ul>
          <li><a href="#">Support</a></li>
          <li><a href="#">Cancel your bookings</a></li>
          <li><a href="#">Use Coupon</a></li>
          <li><a href="#">Refund Policies</a></li>
          <li><a href="#">International Travel Documents</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; my Dream Place 2022</p>
    </div>
  </footer>
</template>
<script setup>
import PlaneIcon from "./Icons/PlaneIcon.vue";
</script>
<style scoped>
.footer {
  background-color: #ffffff;
  color: #000000;
  padding: 0;
  margin-top: auto;
}

.container {
  display: flex;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px; /* Adjust the gap as needed */
}
.container a {
  color: black;
  text-decoration: none;
}
.footer-column ul {
  list-style: none;
  padding: 0;
}
.footer-column {
}
.footer-column li {
  margin-bottom: 8px;
}

.footer-bottom {
  text-align: center;
  background: #ebebeb;
  margin: 20px -100px -7px -100px;
  height: 40px;
  display: flex;
  align-items: center; 
  padding-left: 90%;
}
</style>
