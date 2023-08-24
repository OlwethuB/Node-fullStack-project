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
  {
    path: "/admin",
    component: Admin,
    children: [
      {
        path: "products",
        component: () => import("@/views/AdminProducts.vue"),
      },
      {
        path: "/admin/products/create",
        component: () => import("@/views/AdminCreateProduct.vue"),
      },
      {
        path: "/admin/products/:id/edit",
        component: () => import("@/views/AdminEditProduct.vue"),
      },
      {
        path: "/admin/users",
        component: () => import("@/views/AdminUsers.vue"),
      },
      {
        path: "/admin/users/create",
        component: () => import("@/views/AdminCreateUser.vue"),
      },
      {
        path: "/admin/users/:id/edit",
        component: () => import("@/views/AdminEditUser.vue"),
      },

      // Add other nested routes here for different functionalities
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
