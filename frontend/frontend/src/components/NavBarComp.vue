<template>
  <nav class="navbar">
    <div class="logo">
      <img
        src="https://i.postimg.cc/QMZCjP31/Loj-logo.png"
        alt="Jewelry Store Logo"
      />
    </div>
    <ul class="nav-links">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/products">Products</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/contact">Contact</router-link></li>
    </ul>
    <div class="user-actions">
      <router-link to="/admin">Admin</router-link>
      <button class="btn">Sign In</button>
    </div>
  </nav>
</template>

<script>
export default {
  // Your component options
}
</script>

<style scoped>
.navbar {
  background-color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.logo img {
  width: 100px;
  height: auto;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 2rem;
}

.nav-links li {
  font-size: 1.2rem;
}

.user-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.btn {
  background-color: #ff69b4;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
}

.btn:hover {
  background-color: #ff3385;
}
</style>
