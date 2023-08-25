<template>
  <div class="admin-users">
    <h3>Manage Users</h3>
    <router-link to="/admin/users/create" class="btn btn-create"
      >Create User</router-link
    >

    <!-- The display -->
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
    <!-- Loading "Spinner" -->
    <div v-if="isLoading" class="loadingio-spinner-bean-eater-pgmqlvey3sh">
      <div class="ldio-ugtlj07j4f">
        <div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div>
          <div></div>
          <div></div>
          <div></div>
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
      users: [],
      isLoading: false,
    };
  },
  methods: {
    async fetchUsers() {
      this.isLoading = true;
      try {
        const response = await axios.get("https://node-project-fd1y.onrender.com/users");
        this.users = response.data.results;
        this.isLoading = false;
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    },
    async deleteUser(userId) {
      this.isLoading = true;
      try {
        await axios.delete(`https://node-project-fd1y.onrender.com/users/${userId}`);
<<<<<<< HEAD
        // Remove the deleted user from the list
        this.users = this.users.filter(user => user.userID !== userId);
        this.isLoading = false;
=======
        this.fetchUsers();
>>>>>>> parent of 0b0a302 (Sorting and Filtering)
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

/* Spinner */
@keyframes ldio-ugtlj07j4f-1 {
    0% { transform: rotate(0deg) }
   50% { transform: rotate(-45deg) }
  100% { transform: rotate(0deg) }
}
@keyframes ldio-ugtlj07j4f-2 {
    0% { transform: rotate(180deg) }
   50% { transform: rotate(225deg) }
  100% { transform: rotate(180deg) }
}
.ldio-ugtlj07j4f > div:nth-child(2) {
  transform: translate(-15px,0);
}
.ldio-ugtlj07j4f > div:nth-child(2) div {
  position: absolute;
  top: 40px;
  left: 40px;
  width: 120px;
  height: 60px;
  border-radius: 120px 120px 0 0;
  background: #232323;
  animation: ldio-ugtlj07j4f-1 1s linear infinite;
  transform-origin: 60px 60px
}
.ldio-ugtlj07j4f > div:nth-child(2) div:nth-child(2) {
  animation: ldio-ugtlj07j4f-2 1s linear infinite
}
.ldio-ugtlj07j4f > div:nth-child(2) div:nth-child(3) {
  transform: rotate(-90deg);
  animation: none;
}@keyframes ldio-ugtlj07j4f-3 {
    0% { transform: translate(190px,0); opacity: 0 }
   20% { opacity: 1 }
  100% { transform: translate(70px,0); opacity: 1 }
}
.ldio-ugtlj07j4f > div:nth-child(1) {
  display: block;
}
.ldio-ugtlj07j4f > div:nth-child(1) div {
  position: absolute;
  top: 92px;
  left: -8px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #ff0083;
  animation: ldio-ugtlj07j4f-3 1s linear infinite
}
.ldio-ugtlj07j4f > div:nth-child(1) div:nth-child(1) { animation-delay: -0.67s }
.ldio-ugtlj07j4f > div:nth-child(1) div:nth-child(2) { animation-delay: -0.33s }
.ldio-ugtlj07j4f > div:nth-child(1) div:nth-child(3) { animation-delay: 0s }
.loadingio-spinner-bean-eater-pgmqlvey3sh {
  width: 200px;
  height: 200px;
  display: inline-block;
  overflow: hidden;
  background: none;
}
.ldio-ugtlj07j4f {
  width: 100%;
  height: 100%;
  position: relative;
  transform: translateZ(0) scale(1);
  backface-visibility: hidden;
  transform-origin: 0 0; /* see note above */
}
.ldio-ugtlj07j4f div { box-sizing: content-box; }
/* generated by https://loading.io/ */
</style>
