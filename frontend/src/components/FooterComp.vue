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
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://i.postimg.cc/pTvW85ws/pngegg-3.png"
            alt="Facebook"
          />
        </a>
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://i.postimg.cc/RVdH04Hr/x-logo-twitter-elon-musk-dezeen-2364-col-0-1-852x479.webp"
            alt="Twitter"
          />
        </a>
        <a
          href="https://www.instagram.com/accounts/login/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://i.postimg.cc/tg2Pmy9t/pngegg-2.png"
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
/* Import Montserrat font */
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');

.footer {
  background-color: black;
  padding: 2rem 0;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
}

.footer-content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.logo img {
  width: 80px;
  height: auto;
}

.contact-info p {
  font-size: 1rem;
  margin: 0.2rem 0;
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
