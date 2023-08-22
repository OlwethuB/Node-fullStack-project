<template>
  <div class="product-detail">
    <div class="product-image">
      <img :src="product.imageUrl" :alt="product.name" />
    </div>
    <div class="product-info">
      <h2>{{ product.name }}</h2>
      <p class="price">{{ formatPrice(product.price) }}</p>
      <p class="category">{{ product.category }}</p>
      <p class="description">{{ product.description }}</p>
      <button class="btn" @click="addToCart">Add to Cart</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: Object // Pass the product object as a prop
  },
  methods: {
    formatPrice(price) {
      return `$${price.toFixed(2)}`;
    },
    addToCart() {
      // Implement the add to cart functionality
    }
  }
}
</script>

<style scoped>
.product-detail {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem;
}

.product-image img {
  max-width: 100%;
  height: auto;
}

.product-info {
  max-width: 600px;
  margin-left: 2rem;
  text-align: left;
}

.product-info h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.price {
  font-size: 1.5rem;
  color: #ff69b4;
  margin-bottom: 1rem;
}

.category {
  font-size: 1rem;
  color: #888;
  margin-bottom: 1rem;
}

.description {
  font-size: 1.1rem;
  color: #555;
  margin-bottom: 2rem;
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
