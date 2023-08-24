import { createStore } from "vuex"
import axios from "axios"
const projURL = "https://node-project-fd1y.onrender.com/"
export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
    product: null,
  },
  getters: {},
  mutations: {
    setUsers(state, users) {
      state.users = users
    },
    setUser(state, user) {
      state.user = user
    },
    setProducts(state, products) {
      state.products = products
    },
    setProduct(state, product) {
      state.product = product
    },
  },
  actions: {
    async fetchUsers(context) {
      try {
        const { data } = await axios.get(`${projURL}users`)
        if (data.results) {
          context.commit("setUsers", data.results)
        }
      } catch (e) {}
    },
  },
  modules: {},
})
