<template>
  <div class="admin-users">
    <h3>Manage Users</h3>
    <router-link to="/admin/users/create" class="btn btn-create"
      >Create User</router-link
    >

    <div v-for="user in users" :key="user.userID" class="user-card">
      <img
        :src="user.userProfile"
        :alt="`${user.firstName} ${user.lastName}`"
        class="user-image"
      />
      <div class="user-details">
        <h4>{{ user.firstName }} {{ user.lastName }}</h4>
        <p>Role: {{ user.userRole }}</p>
        <p>Email: {{ user.emailAdd }}</p>
        <!-- Display other user information as needed -->
        <router-link
          :to="`/admin/users/${user.userID}/edit`"
          class="btn btn-edit"
          >Edit</router-link
        >
        <button @click="deleteUser(user.userID)" class="btn btn-delete">
          Delete
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      users: [],
    };
  },
  methods: {
    async fetchUsers() {
      try {
        const response = await axios.get("https://node-project-fd1y.onrender.com/users");
        this.users = response.data.results;
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    },
    async deleteUser(userId) {
      try {
        await axios.delete(`https://node-project-fd1y.onrender.com/users/${userId}`);
        this.fetchUsers();
      } catch (error) {
        console.error("Error deleting user:", error);
      }
    },
  },
  mounted() {
    this.fetchUsers();
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

.user-image {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 50%;
  margin-right: 1rem;
}

.btn-edit {
  background-color: #4285f4;
  color: white;
  padding: 0.3rem 0.5rem;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  font-size: 0.9rem;
  cursor: pointer;
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
