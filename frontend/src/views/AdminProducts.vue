<template>
  <div class="admin-products">
    <h3>Manage Products</h3>

<<<<<<< HEAD
    <!-- Add sorting options -->
    <label>
      Sort By:
      <select v-model="sortBy">
        <option value="prodName">Name</option>
        <option value="amount">Price</option>
        <!-- Add more sorting options if needed -->
      </select>
    </label>

    <!-- Add search input -->
    <label>
      Search:
      <input v-model="searchTerm" type="text" />
    </label>

    <!-- Display the list of products with filtering and search -->

    <!-- The display -->
    <div
      class="product-card"
      v-for="product in filteredProducts"
      :key="product.prodID"
=======
    <!-- Add a button to create a new product -->
    <router-link to="/admin/products/create" class="btn btn-create"
      >Create Product</router-link
>>>>>>> parent of 0b0a302 (Sorting and Filtering)
    >

    <!-- Display the list of products -->
    <div v-for="product in products" :key="product.prodID" class="product-card">
      <h4>{{ product.prodName }}</h4>
      <p>Price: R{{ product.amount }}</p>
      <button @click="confirmDelete(product.prodID)" class="btn btn-delete">
        Delete
      </button>
    </div>
    <!-- Loading "Spinner" -->
    <div v-if="isLoading" class="loadingio-spinner-bean-eater-pgmqlvey3sh">
      <div class="ldio-ugtlj07j4f">
        <div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div>
          <div></div>
          <div></div>
          <div></div>
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
<<<<<<< HEAD
      products: [],
      sortBy: 'prodName', // Default sorting field
      searchTerm: '', // Default search term
      isLoading: false,
=======
      products: []
>>>>>>> parent of 0b0a302 (Sorting and Filtering)
    };
  },
  methods: {
    async fetchProducts() {
      this.isLoading = true;
      try {
        const response = await axios.get("https://node-project-fd1y.onrender.com/products");
        this.products = response.data.results;
        this.isLoading = false;
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    },
    async confirmDelete(productId) {
      this.isLoading = true;
      const confirmed = confirm("Are you sure you want to delete this product?");
      if (confirmed) {
        await this.deleteProduct(productId);
        this.isLoading = false;
      }
    },
    async deleteProduct(productId) {
      this.isLoading = true;
      try {
        await axios.delete(`https://node-project-fd1y.onrender.com/products/${productId}`);
        // Refresh the list of products after deletion
        await this.fetchProducts();
        this.isLoading = false;
      } catch (error) {
        console.error("Error deleting product:", error);
      }
    }
  },
  mounted() {
    this.fetchProducts();
  }
};
</script>

<style scoped>
.admin-products {
  padding: 2rem;
}

.btn-create {
  background-color: #4caf50;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  font-size: 1rem;
}

.product-card {
  background-color: white;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  padding: 1rem;
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.btn-delete {
  background-color: #ff3333;
  color: white;
  padding: 0.3rem 0.5rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

/* Spinner */
@keyframes ldio-ugtlj07j4f-1 {
    0% { transform: rotate(0deg) }
   50% { transform: rotate(-45deg) }
  100% { transform: rotate(0deg) }
}
@keyframes ldio-ugtlj07j4f-2 {
    0% { transform: rotate(180deg) }
   50% { transform: rotate(225deg) }
  100% { transform: rotate(180deg) }
}
.ldio-ugtlj07j4f > div:nth-child(2) {
  transform: translate(-15px,0);
}
.ldio-ugtlj07j4f > div:nth-child(2) div {
  position: absolute;
  top: 40px;
  left: 40px;
  width: 120px;
  height: 60px;
  border-radius: 120px 120px 0 0;
  background: #232323;
  animation: ldio-ugtlj07j4f-1 1s linear infinite;
  transform-origin: 60px 60px
}
.ldio-ugtlj07j4f > div:nth-child(2) div:nth-child(2) {
  animation: ldio-ugtlj07j4f-2 1s linear infinite
}
.ldio-ugtlj07j4f > div:nth-child(2) div:nth-child(3) {
  transform: rotate(-90deg);
  animation: none;
}@keyframes ldio-ugtlj07j4f-3 {
    0% { transform: translate(190px,0); opacity: 0 }
   20% { opacity: 1 }
  100% { transform: translate(70px,0); opacity: 1 }
}
.ldio-ugtlj07j4f > div:nth-child(1) {
  display: block;
}
.ldio-ugtlj07j4f > div:nth-child(1) div {
  position: absolute;
  top: 92px;
  left: -8px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #ff0083;
  animation: ldio-ugtlj07j4f-3 1s linear infinite
}
.ldio-ugtlj07j4f > div:nth-child(1) div:nth-child(1) { animation-delay: -0.67s }
.ldio-ugtlj07j4f > div:nth-child(1) div:nth-child(2) { animation-delay: -0.33s }
.ldio-ugtlj07j4f > div:nth-child(1) div:nth-child(3) { animation-delay: 0s }
.loadingio-spinner-bean-eater-pgmqlvey3sh {
  width: 200px;
  height: 200px;
  display: inline-block;
  overflow: hidden;
  background: none;
}
.ldio-ugtlj07j4f {
  width: 100%;
  height: 100%;
  position: relative;
  transform: translateZ(0) scale(1);
  backface-visibility: hidden;
  transform-origin: 0 0; /* see note above */
}
.ldio-ugtlj07j4f div { box-sizing: content-box; }
/* generated by https://loading.io/ */
</style>
