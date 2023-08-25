<template>
  <div class="admin-products">
    <h3>Manage Products</h3>
    <div class="controls">
      <div class="sort-filter">
        <label for="sortBy">Sort By:</label>
        <select v-model="sortBy" id="sortBy" class="form-select">
          <option value="prodName">Name</option>
          <option value="amount">Price</option>
        </select>
      </div>
      <div class="search">
        <label for="searchTerm">Search:</label>
        <input
          v-model="searchTerm"
          id="searchTerm"
          type="text"
          class="form-control"
        />
      </div>
    </div>
    <router-link to="/admin/products/create" class="btn btn-create">
      Create Product
    </router-link>
    <div
      v-for="product in filteredProducts"
      :key="product.prodID"
      class="product-card"
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
      sortBy: "prodName",
      searchTerm: "",
    };
  },
  computed: {
    filteredProducts() {
      let filtered = [...this.products];

      if (this.searchTerm) {
        const searchTermLC = this.searchTerm.toLowerCase();
        filtered = filtered.filter((product) =>
          product.prodName.toLowerCase().includes(searchTermLC)
        );
      }

      filtered.sort((a, b) => a[this.sortBy].localeCompare(b[this.sortBy]));

      return filtered;
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

.controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.sort-filter,
.search {
  display: flex;
  flex-direction: column;
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
</style>
