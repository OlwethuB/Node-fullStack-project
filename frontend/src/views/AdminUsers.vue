<template>
  <div class="admin-users">
    <h3>Manage Users</h3>
    <div class="controls">
      <div class="search">
        <label for="searchTerm">Search:</label>
        <input
          v-model="searchTerm"
          id="searchTerm"
          type="text"
          class="form-control"
        />
      </div>
      <div class="sort">
        <label for="sortBy">Sort By:</label>
        <select v-model="sortBy" id="sortBy" class="form-select">
          <option value="firstName">First Name</option>
          <option value="lastName">Last Name</option>
          <option value="emailAdd">Email</option>
        </select>
      </div>
    </div>
    <router-link to="/admin/users/create" class="btn btn-create">
      Create User
    </router-link>

    <div v-for="user in sortedUsers" :key="user.userID" class="user-card">
      <img
        :src="user.userProfile"
        :alt="`${user.firstName} ${user.lastName}`"
        class="user-image"
      />
      <div class="user-details">
        <h4>{{ user.firstName }} {{ user.lastName }}</h4>
        <p>Role: {{ user.userRole }}</p>
        <p>Email: {{ user.emailAdd }}</p>
        <router-link
          :to="`/admin/users/${user.userID}/edit`"
          class="btn btn-edit"
        >
          Edit
        </router-link>
        <button @click="confirmDelete(user.userID)" class="btn btn-delete">
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
      searchTerm: "",
      sortBy: "firstName", // Default sort by first name
    };
  },
  computed: {
    sortedUsers() {
      const sorted = [...this.filteredUsers];
      sorted.sort((a, b) => a[this.sortBy].localeCompare(b[this.sortBy]));
      return sorted;
    },
    filteredUsers() {
      if (!this.searchTerm) {
        return this.users;
      }
      const searchTermLC = this.searchTerm.toLowerCase();
      return this.users.filter(
        (user) =>
          user.firstName.toLowerCase().includes(searchTermLC) ||
          user.lastName.toLowerCase().includes(searchTermLC) ||
          user.emailAdd.toLowerCase().includes(searchTermLC)
      );
    },
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
    async confirmDelete(userId) {
      const confirmed = confirm("Are you sure you want to delete this user?");
      if (confirmed) {
        await this.deleteUser(userId);
      }
    },
    async deleteUser(userId) {
      try {
        await axios.delete(`https://node-project-fd1y.onrender.com/users/${userId}`);
        await this.fetchUsers();
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

.controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.search {
  display: flex;
  flex-direction: column;
}

.sort {
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
