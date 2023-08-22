<template>
  <div class="products">
    <h2 class="section-title">Discover Our Collection</h2>
    <div class="product-list">
      <div class="product-card">
        <img src="product1.jpg" alt="Product 1" />
        <h3>Product Name</h3>
        <p>Price: R1000</p>
      </div>
      <div class="product-card">
        <img src="product2.jpg" alt="Product 2" />
        <h3>Product Name</h3>
        <p>Price: R149.99</p>
      </div>
      <!-- Add more product cards here -->
    </div>
  </div>
</template>

<script>
export default {
  // Your component options
}
</script>

<style scoped>
.products {
  padding: 4rem 0;
  text-align: center;
}

.section-title {
  font-size: 2rem;
  margin-bottom: 2rem;
}

.product-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  justify-items: center;
}

.product-card {
  background-color: white;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  padding: 1rem;
  text-align: center;
  transition: transform 0.3s ease;
  width: 100%;
}

.product-card:hover {
  transform: translateY(-5px);
}

.product-card img {
  max-width: 100%;
  height: auto;
  margin-bottom: 1rem;
}

.product-card h3 {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

.product-card p {
  font-size: 1rem;
  color: #888;
}
</style>
