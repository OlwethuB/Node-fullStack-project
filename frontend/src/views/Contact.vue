<template>
  <div class="contact">
    <h2 class="section-title">Contact Us</h2>
    <div class="contact-form">
      <input type="text" placeholder="Your Name" class="input-field" />
      <input type="email" placeholder="Your Email" class="input-field" />
      <textarea placeholder="Your Message" class="textarea-field"></textarea>
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
/* Import Montserrat font */
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');

.contact {
  padding: 4rem 0;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
}

.section-title {
  font-size: 2rem;
  margin-bottom: 2rem;
}

.contact-form {
  max-width: 600px;
  margin: 0 auto;
}

.input-field,
.textarea-field {
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
}

.textarea-field {
  height: 150px;
}

.btn {
  background-color: #ff69b4;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: #ff3385;
}
</style>
