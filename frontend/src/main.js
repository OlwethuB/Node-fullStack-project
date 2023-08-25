import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store" // Import your Vuex store
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"

createApp(App)
  .use(router)
  .use(store) // Use the imported store
  .mount("#app")
