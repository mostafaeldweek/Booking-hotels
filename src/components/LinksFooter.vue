<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-column">
        <h3>About Us</h3>
        <ul>
          <li><a href="#">Company</a></li>
          <li><a href="#">Team</a></li>
          <li><a href="#">Careers</a></li>
        </ul>
      </div>
      <div class="footer-column">
        <h3>Services</h3>
        <ul>
          <li><a href="#">Web Development</a></li>
          <li><a href="#">Design</a></li>
          <li><a href="#">Marketing</a></li>
        </ul>
      </div>
      <div class="footer-column">
        <h3>Contact Us</h3>
        <ul>
          <li><a href="#">Email</a></li>
          <li><a href="#">Phone</a></li>
          <li><a href="#">Location</a></li>
        </ul>
      </div>
      <div class="footer-column">
        <h3>Links</h3>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Support</a></li>
        </ul>
      </div>
      <div class="footer-column">
        <h3>Legal</h3>
        <ul>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms of Service</a></li>
          <li><a href="#">Disclaimer</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; my Dream Place 2022</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #ffffff;
  color: #000000;
  padding: 0;
}

.container {
  display: flex;
  justify-content: space-between; /* Distribute columns to the left and right edges */
}
.container a {
  color: black;
  text-decoration: none;
}
.footer-column ul {
  list-style: none;
  padding: 0;
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
  align-items: center; /* Center text vertically */
  padding-left: 90%;
}
</style>
