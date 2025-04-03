
<template>
  <div>
    <router-link to="/create" class="text-blue-500 underline mb-4 inline-block">Create New Order</router-link>
    <ul class="bg-white p-4 shadow rounded space-y-2">
      <li v-for="order in orders" :key="order.id" class="border p-2">
        {{ order.product }} - Quantity: {{ order.quantity }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['orders'])
  },
  mounted() {
    this.$store.dispatch('fetchOrders')
  }
}
</script>
