<template>
  <div class="admin">
    <h2 class="section-title">Admin Dashboard</h2>
    <div class="admin-actions">
      <router-link to="/admin/users" class="btn">Manage Users</router-link>
      <router-link to="/admin/products" class="btn"
        >Manage Products</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  // Your component options
}
</script>

<style scoped>
.admin {
  padding: 4rem 0;
  text-align: center;
}

.admin-actions {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-top: 2rem;
}
</style>
