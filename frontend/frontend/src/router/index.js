// frontend/src/router/index.js

import { createRouter, createWebHistory } from "vue-router"
import Home from "../views/Home.vue"
import About from "../views/About.vue"
import Contact from "../views/Contact.vue"
import Products from "../views/Products.vue"
import ProductDetail from "../views/ProductDetail.vue"
import Admin from "../views/Admin.vue"

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/contact", component: Contact },
  { path: "/products", component: Products },
  { path: "/products/:id", component: ProductDetail },
  { path: "/admin", component: Admin },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
