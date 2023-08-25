<!-- AdminCreateUser.vue -->
<template>
  <div class="admin-create-user">
    <h3>Create User</h3>
    <form @submit.prevent="createUser">
      <label for="username">Username:</label>
      <input v-model="newUser.username" id="username" />

      <label for="email">Email:</label>
      <input v-model="newUser.email" id="email" />

      <!-- Add more fields for other user details -->

      <button type="submit" class="btn btn-create">Create User</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      newUser: {
        username: "",
        email: "",
        // Initialize other fields
      },
    };
  },
  methods: {
    async createUser() {
      try {
        const response = await axios.post(
          "https://node-project-fd1y.onrender.com/users",
          this.newUser
        );
        this.$router.push("/admin/users");
      } catch (error) {
        console.error("Error creating user:", error);
      }
    },
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
