<template>
  <div class="contact">
    <h2 class="section-title">Contact Us</h2>
    <div class="contact-form">
      <input type="text" placeholder="Your Name" />
      <input type="email" placeholder="Your Email" />
      <textarea placeholder="Your Message"></textarea>
      <button class="btn">Send Message</button>
    </div>
  </div>
</template>

<script>
export default {
  // Your component options
}
</script>

<style scoped>
.contact {
  padding: 4rem 0;
  text-align: center;
}

.contact-form {
  max-width: 600px;
  margin: 0 auto;
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
}

.contact-form textarea {
  height: 150px;
}

.contact-form button {
  background-color: #ff69b4;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.contact-form button:hover {
  background-color: #ff3385;
}
</style>
