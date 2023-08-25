<template>
  <div class="admin-edit-user">
    <h3>Edit User</h3>
    <form @submit.prevent="updateUser">
      <label for="username">Username:</label>
      <input v-model="editedUser.username" id="username" />

      <label for="email">Email:</label>
      <input v-model="editedUser.email" id="email" />

      <!-- Add more fields for other user details -->

      <button type="submit" class="btn btn-update">Update User</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      userId: null, // Get this from the route params
      editedUser: {
        username: "",
        email: "",
        // Initialize other fields
      },
    };
  },
  methods: {
    async fetchUserDetails() {
      try {
        const response = await axios.get(`https://node-project-fd1y.onrender.com/users${this.userId}`);
        this.editedUser = response.data; // Assuming response is the user object
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    },
    async updateUser() {
      try {
        await axios.put(`https://node-project-fd1y.onrender.com/users${this.userId}`, this.editedUser);
        this.$router.push("/admin/users"); // Redirect to users list after update
      } catch (error) {
        console.error("Error updating user:", error);
      }
    },
  },
  created() {
    // Fetch the user details when the component is created
    this.userId = this.$route.params.id;
    this.fetchUserDetails();
  },
};
</script>

<style scoped>
.admin-edit-user {
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

/* Add your styling here */
</style>
