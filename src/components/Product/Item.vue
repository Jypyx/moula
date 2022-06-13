<template>
  <v-card class="product-item">
    <v-img :src="product.thumbnail" position="center center" height="100%">
      <div class="product-item__title">{{ product.title }}</div>
    </v-img>
  </v-card>
</template>

<script>
export default {
  name: 'ProductItem',
  props: {
    product: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.product-item {
  overflow: hidden;

  &__title {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    padding: 1rem;
    background: linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 1) 100%);
    color: $white;
    font-weight: bold;
    text-transform: capitalize;
    font-size: 1.25rem;
  }
}
</style>
