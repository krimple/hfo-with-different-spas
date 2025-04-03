
<template>
  <div class="bg-white p-6 rounded shadow">
    <form @submit.prevent="submitOrder" class="space-y-4">
      <div>
        <label class="block mb-1 font-semibold">Product:</label>
        <input v-model="product" class="border p-2 w-full" required />
      </div>
      <div>
        <label class="block mb-1 font-semibold">Quantity:</label>
        <input type="number" v-model.number="quantity" class="border p-2 w-full" required />
      </div>
      <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: '',
      quantity: 1
    }
  },
  methods: {
    async submitOrder() {
      await this.$store.dispatch('createOrder', {
        product: this.product,
        quantity: this.quantity
      })
      this.$router.push('/')
    }
  }
}
</script>
