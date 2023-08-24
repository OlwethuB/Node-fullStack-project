<template>
  <div class="admin-edit-product">
    <h3>Edit Product</h3>
    <form @submit.prevent="updateProduct">
      <label for="prodName">Product Name:</label>
      <input v-model="editedProduct.prodName" id="prodName" />

      <label for="amount">Price:</label>
      <input v-model="editedProduct.amount" id="amount" />

      <!-- Add more fields for other product details -->

      <button type="submit" class="btn btn-update">Update Product</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      productId: null, // Get this from the route params
      editedProduct: {
        prodName: '',
        amount: '',
        // Initialize other fields
      }
    };
  },
  methods: {
    async fetchProductDetails() {
      try {
        const response = await axios.get(`https://node-project-fd1y.onrender.com/products/${this.productId}`);
        this.editedProduct = response.data.results[0];
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    },
    async updateProduct() {
      try {
        await axios.put(`https://node-project-fd1y.onrender.com/products/${this.productId}`, this.editedProduct);
        // Optionally, you can navigate back to the products list page after updating
        this.$router.push("/admin/products");
      } catch (error) {
        console.error("Error updating product:", error);
      }
    }
  },
  created() {
    // Fetch the product details when the component is created
    this.productId = this.$route.params.id;
    this.fetchProductDetails();
  }
};
</script>

<style scoped>
.admin-edit-product {
  padding: 2rem;
}

.btn-update {
  background-color: #4285f4;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  font-size: 1rem;
  cursor: pointer;
}
</style>
