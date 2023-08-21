<template>
  <div class="home">
    <div class="hero">
      <h1>Welcome to Luminous Orbs Jewels Store</h1>
      <p>Discover the finest selection of exquisite jewelry.</p>
      <router-link to="/products" class="btn">Shop Now</router-link>
    </div>
  </div>
</template>

<script>
export default {
  // Your component options
}
</script>

<style scoped>
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 80px); /* Subtract navbar height */
  background-image: url("https://i.postimg.cc/PrFKVbkB/pxfuel-1.jpg");
  background-size: cover;
  background-position: center;
}

.hero {
  text-align: center;
  color: white;
}

.hero h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.hero p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
}

.btn {
  background-color: grey;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: #ff3385;
}
</style>
