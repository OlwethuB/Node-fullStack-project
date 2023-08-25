<template>
  <div class="products container">
    <h2 class="section-title">Discover Our Collection</h2>
    <div class="controls row">
      <div class="col-md-4">
        <label for="sortBy">Sort By:</label>
        <select v-model="sortBy" id="sortBy" class="form-select">
          <option value="prodName">Name</option>
          <option value="amount">Price</option>
          <!-- Add more sorting options if needed -->
        </select>
      </div>
      <div class="col-md-4">
        <label for="filterBy">Filter By Category:</label>
        <select v-model="filterBy" id="filterBy" class="form-select">
          <option value="">All</option>
          <option value="Necklace">Necklace</option>
          <option value="Watch">Watch</option>
          <option value="Ring set">Ring set</option>
          <option value="Bracelet">Bracelet</option>
          <!-- Add more filter options if needed -->
        </select>
      </div>
      <div class="col-md-4">
        <label for="searchTerm">Search:</label>
        <input
          v-model="searchTerm"
          id="searchTerm"
          type="text"
          class="form-control"
        />
      </div>
    </div>
    <div class="product-list row">
      <div
        class="col-md-4 product-card"
        v-for="product in searchedProducts"
        :key="product.prodID"
      >
        <div class="product-image">
          <img
            :src="product.prodUrl"
            :alt="product.prodName"
            class="img-fluid"
          />
        </div>
        <div class="product-details">
          <h3>{{ product.prodName }}</h3>
          <p class="price">Price: R{{ product.amount }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      products: [],
      sortBy: "prodName", // Default sorting field
      filterBy: "", // Default filter value
      searchTerm: "", // Default search term
    };
  },
  computed: {
    sortedProducts() {
      const sorted = [...this.products];
      sorted.sort((a, b) => a[this.sortBy].localeCompare(b[this.sortBy]));
      return sorted;
    },
    filteredProducts() {
      if (!this.filterBy) {
        return this.sortedProducts;
      }
      return this.sortedProducts.filter((product) => product.category === this.filterBy);
    },
    searchedProducts() {
      if (!this.searchTerm) {
        return this.filteredProducts;
      }
      const searchTermLC = this.searchTerm.toLowerCase();
      return this.filteredProducts.filter((product) =>
        product.prodName.toLowerCase().includes(searchTermLC)
      );
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
  },
  mounted() {
    this.fetchProducts();
  },
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

.controls {
  margin-bottom: 2rem;
}

.product-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
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
