<template>
  <div class="products">
    <h2 class="section-title">Discover Our Collection</h2>
    <div class="product-list">
      <div class="product-card" v-for="product in products" :key="product.id">
        <div class="product-image">
          <img :src="product.image" :alt="product.name" />
        </div>
        <div class="product-details">
          <h3>{{ product.name }}</h3>
          <p class="price">Price: R{{ product.price }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      products: []
    };
  },
  methods: {
    async fetchProducts() {
      try {
        const response = await axios.get("http://localhost:3000/api/products");
        this.products = response.data;
      } catch (error) {
        console.error(error);
      }
    }
  },
  mounted() {
    this.fetchProducts();
  }
};
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

.product-image img {
  max-width: 100%;
  height: auto;
}

.product-details {
  margin-top: 1rem;
}

.product-details h3 {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

.product-details .price {
  font-size: 1rem;
  color: #888;
}
</style>
