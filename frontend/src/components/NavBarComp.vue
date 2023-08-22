<template>
  <nav class="navbar navbar-expand-lg navbar-black bg-black">
    <div class="container">
      <router-link to="/" class="navbar-brand">
        <img
          src="https://i.postimg.cc/QMZCjP31/Loj-logo.png"
          alt="Jewelry Store Logo"
          width="50"
          height="50"
        />
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/products" class="nav-link">Products</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link">About</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contact" class="nav-link">Contact</router-link>
          </li>
        </ul>
        <div class="user-actions">
          <router-link to="/admin" class="nav-link">Admin</router-link>
          <button class="btn btn-primary">Sign In</button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  // Your component options
}
</script>

<style scoped>
/* Import Montserrat font */
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');

.navbar {
  font-family: 'Montserrat', sans-serif;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo img {
  width: 100px;
  height: auto;
  cursor: pointer; /* Add cursor pointer for the logo */
}

.nav-link {
  color: white;
  font-weight: 700;
  text-transform: uppercase;
  padding: 0.5rem 1rem;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #ff69b4;
}

.user-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}
</style>
