<template>
  <div class="admin-create-product">
    <h3>Create Product</h3>
    <form @submit.prevent="createProduct">
      <label for="prodName">Product Name:</label>
      <input v-model="newProduct.prodName" id="prodName" />

      <label for="amount">Price:</label>
      <input v-model="newProduct.amount" id="amount" />

      <!-- Add more fields for other product details -->

      <button type="submit" class="btn btn-create">Create Product</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      newProduct: {
        prodName: '',
        amount: '',
        // Initialize other fields
      }
    };
  },
  methods: {
    async createProduct() {
      try {
        const response = await axios.post("https://node-project-fd1y.onrender.com/products", this.newProduct);
        // Optionally, you can redirect to the products list page after creation
        this.$router.push("/admin/products");
      } catch (error) {
        console.error("Error creating product:", error);
      }
    }
  }
};
</script>

<style scoped>
.admin-create-product {
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
  cursor: pointer;
}
</style>
