<template>
  <v-card class="category-item" :to="{ name: 'Category', params: { category } }">
    <v-img src="http://placeimg.com/640/480/tech" position="center center">
      <div class="category-item__title">{{ category }}</div>
    </v-img>
  </v-card>
</template>

<script>
export default {
  name: 'CategoryItem',
  props: {
    category: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.category-item {
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
