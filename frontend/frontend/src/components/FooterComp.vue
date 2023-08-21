<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="logo">
        <img
          src="https://i.postimg.cc/QMZCjP31/Loj-logo.png"
          alt="Jewelry Store Logo"
        />
      </div>
      <div class="contact-info">
        <p>Contact Us:</p>
        <p>Email: info@lojjewelstore.com</p>
        <p>Phone: (123) 456-7890</p>
      </div>
      <div class="social-links">
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img
            src="https://i.postimg.cc/Fs7Z7nhg/facebook-icon.png"
            alt="Facebook"
          />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img
            src="https://i.postimg.cc/N09Jj24L/twitter-icon.png"
            alt="Twitter"
          />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img
            src="https://i.postimg.cc/Yp0wMP5Y/instagram-icon.png"
            alt="Instagram"
          />
        </a>
      </div>
    </div>
    <p class="copy">© 2023 LOJ Jewel Store. All rights reserved.</p>
  </footer>
</template>

<script>
export default {
  // Your component options
}
</script>

<style scoped>
.footer {
  background-color: black;
  padding: 2rem 0;
  text-align: center;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.logo img {
  width: 80px;
  height: auto;
}

.contact-info p {
  font-size: 1rem;
}

.social-links img {
  width: 24px;
  height: 24px;
  margin-right: 0.5rem;
}

.copy {
  margin-top: 1rem;
  font-size: 0.8rem;
  color: #888;
}
</style>
