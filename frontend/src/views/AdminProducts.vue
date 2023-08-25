<template>
  <div class="admin-products">
    <h3>Manage Products</h3>

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
    <div
      class="product-card"
      v-for="product in filteredProducts"
      :key="product.prodID"
    >
      <h4>{{ product.prodName }}</h4>
      <p>Price: R{{ product.amount }}</p>
      <button @click="confirmDelete(product.prodID)" class="btn btn-delete">
        Delete
      </button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      products: [],
      sortBy: 'prodName', // Default sorting field
      searchTerm: '', // Default search term
    };
  },
  computed: {
    filteredProducts() {
      const sortedProducts = this.products.slice().sort((a, b) => a[this.sortBy].localeCompare(b[this.sortBy]));
      if (!this.searchTerm) {
        return sortedProducts;
      }
      const searchTermLC = this.searchTerm.toLowerCase();
      return sortedProducts.filter(product => product.prodName.toLowerCase().includes(searchTermLC));
    },
  },
  methods: {
    async fetchProducts() {
      try {
        const response = await axios.get("https://node-project-fd1y.onrender.com/products");
        this.products = response.data.results;
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    },
    async confirmDelete(productId) {
      const confirmed = confirm("Are you sure you want to delete this product?");
      if (confirmed) {
        await this.deleteProduct(productId);
      }
    },
    async deleteProduct(productId) {
      try {
        await axios.delete(`https://node-project-fd1y.onrender.com/products/${productId}`);
        // Refresh the list of products after deletion
        await this.fetchProducts();
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
</style>
