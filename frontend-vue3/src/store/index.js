
import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    orders: []
  },
  mutations: {
    setOrders(state, orders) {
      state.orders = orders
    },
    addOrder(state, order) {
      state.orders.push(order)
    }
  },
  actions: {
    async fetchOrders({ commit }) {
      const res = await axios.get('http://localhost:3001/api/orders')
      commit('setOrders', res.data)
    },
    async createOrder({ commit }, order) {
      const res = await axios.post('http://localhost:3001/api/orders', order)
      commit('addOrder', res.data)
    }
  }
})
