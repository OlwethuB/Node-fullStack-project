<template>
  <div class="products">
    <h2 class="section-title">Discover Our Collection</h2>
    <div class="controls">
      <div class="sort-filter">
        <label for="sortBy">Sort By:</label>
        <select v-model="sortBy" id="sortBy" class="form-select">
          <option value="prodName">Name</option>
          <option value="amount">Price</option>
        </select>
      </div>
      <div class="sort-filter">
        <label for="filterBy">Filter By Category:</label>
        <select v-model="filterBy" id="filterBy" class="form-select">
          <option value="">All</option>
          <option value="Necklace">Necklace</option>
          <option value="Watch">Watch</option>
          <option value="Ring set">Ring set</option>
          <option value="Bracelet">Bracelet</option>
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
    <div class="product-list">
      <div
        class="product-card"
        v-for="product in filteredProducts"
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
      sortBy: "prodName",
      filterBy: "",
      searchTerm: "",
    };
  },
  computed: {
    filteredProducts() {
      let filtered = [...this.products];

      if (this.filterBy) {
        filtered = filtered.filter(
          (product) => product.category === this.filterBy
        );
      }

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
        const response = await axios.get(
          "https://node-project-fd1y.onrender.com/products"
        );
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
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

.sort-filter,
.search {
  display: flex;
  flex-direction: column;
  align-items: center;
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
