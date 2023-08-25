<template>
  <div class="admin-login">
    <h2 class="section-title">Admin Login</h2>
    <div class="login-form">
      <input v-model="username" type="text" placeholder="Username" />
      <input v-model="password" type="password" placeholder="Password" />
      <button class="btn btn-primary" @click="login">Log In</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    login() {
      // Simulate basic authentication (replace with your real logic)
      if (this.username === 'Olwethu Bhiya' && this.password === '12') {
        this.$emit('login', true); // Emit a login event with a true value
      } else {
        alert('Invalid username or password');
      }
    },
  },
};
</script>

<style scoped>
.admin-login {
  padding: 4rem 0;
  text-align: center;
}

.section-title {
  font-size: 2rem;
  margin-bottom: 2rem;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 300px;
  margin: 0 auto;
}

.btn-primary {
  background-color: #ff69b4;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn-primary:hover {
  background-color: #ff3385;
}
</style>
