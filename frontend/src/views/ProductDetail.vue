<template>
  <div class="product-details">
    <h2>Product Details</h2>
    <div class="product-details-card">
      <div class="product-image">
        <img :src="product.prodUrl" :alt="product.prodName" class="img-fluid" />
      </div>
      <div class="product-info">
        <h3>{{ product.prodName }}</h3>
        <p class="price">Price: R{{ product.amount }}</p>
        <p>Category: {{ product.category }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      product: {},
    };
  },
  methods: {
    async fetchProduct(productId) {
      try {
        const response = await axios.get(
          `https://node-project-fd1y.onrender.com${productId}`
        );
        this.product = response.data;
      } catch (error) {
        console.error(error);
      }
    },
  },
  mounted() {
    const productId = this.$route.params.productId;
    this.fetchProduct(productId);
  },
};
</script>

<style scoped>
/* Component styles */
</style>
