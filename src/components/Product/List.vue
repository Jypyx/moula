<template>
  <div class="product-list">
    <ProductItemLine v-for="product in products" :key="product.id" :product="product" @addToCart="addToCart" />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import ProductItemLine from '@/components/Product/ItemLine.vue'

export default {
  name: 'ProductList',
  components: {
    ProductItemLine,
  },
  props: {
    products: {
      type: Array,
      required: true,
    },
  },
  methods: {
    ...mapActions({
      addProductToCart: 'products/addProductToCart',
    }),
    addToCart(product) {
      this.addProductToCart(product)
    },
  },
}
</script>

<style lang="scss" scoped>
.product-list {
  display: grid;
  gap: 1.5rem;
}
</style>
