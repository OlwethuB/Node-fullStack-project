<template>
  <div class="admin">
    <h2 class="section-title">Admin Dashboard</h2>
    <div v-if="!loggedIn">
      <admin-login @login="handleLogin" />
    </div>
    <div v-else>
      <div class="admin-actions">
        <router-link to="/admin/products" class="btn btn-admin"
          >Manage Products</router-link
        >
        <router-link to="/admin/users" class="btn btn-admin"
          >Manage Users</router-link
        >
        <!-- Add other links as needed -->
      </div>
      <!-- Router view to display the nested components based on the route -->
      <router-view />
    </div>
  </div>
</template>

<script>
import AdminLogin from './AdminLogin.vue';

export default {
  components: {
    AdminLogin,
  },
  data() {
    return {
      loggedIn: false,
    };
  },
  methods: {
    handleLogin(isLoggedIn) {
      this.loggedIn = isLoggedIn;
    },
  },
};
</script>

<style scoped>
.admin {
  padding: 4rem 0;
  text-align: center;
}

.section-title {
  font-size: 2rem;
  margin-bottom: 2rem;
}

.admin-actions {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-top: 2rem;
}

.btn-admin {
  background-color: #ff69b4;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn-admin:hover {
  background-color: #ff3385;
}
</style>
