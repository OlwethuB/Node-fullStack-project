<!-- AdminEditUser.vue -->
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
      userId: null,
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
        const response = await axios.get(
          `https://node-project-fd1y.onrender.com/users/${this.userId}`
        );
        this.editedUser = response.data.results[0];
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    },
    async updateUser() {
      try {
        await axios.put(
          `https://node-project-fd1y.onrender.com/users/${this.userId}`,
          this.editedUser
        );
        this.$router.push("/admin/users");
      } catch (error) {
        console.error("Error updating user:", error);
      }
    },
  },
  created() {
    this.userId = this.$route.params.id;
    this.fetchUserDetails();
  },
};
</script>
<style scoped>
.admin-users {
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

.user-card {
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
