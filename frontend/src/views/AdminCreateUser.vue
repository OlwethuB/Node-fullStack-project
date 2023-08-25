<template>
  <div class="admin-create-user">
    <h3>Create User</h3>
    <form @submit.prevent="createUser">
      <label for="firstName">First Name:</label>
      <input v-model="user.firstName" id="firstName" />

      <label for="lastName">Last Name:</label>
      <input v-model="user.lastName" id="lastName" />

      <label for="email">Email:</label>
      <input v-model="user.emailAdd" id="email" />

      <label for="password">Password:</label>
      <input v-model="user.userPass" id="password" />

      <!-- Add more fields for other user details -->

      <button type="submit" class="btn btn-create">Create User</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      user: {
        firstName: '',
        lastName: '',
        emailAdd: '',
        userPass: '',
        // Initialize other fields
      },
    };
  },
  methods: {
    async register() {
      try {
        const response = await axios.post('https://node-project-fd1y.onrender.com/users', this.user);
        // Optionally, you can navigate back to the users list page after creation
        this.$router.push('/admin/users');
      } catch (error) {
        console.error('Error creating user:', error);
      }
    },
  },
  mounted() {
    this.register();
  },
};
</script>

<style scoped>
.admin-create-user {
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

input {
  width: 100%;
  padding: 0.5rem;
  margin-top: 0.2rem;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
}

/* Additional styles for other form elements */
</style>
