<template>
  <v-card class="category-item" :to="{ name: 'Category', params: { category } }">
    <v-img src="https://picsum.photos/640/480" position="center center">
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
    background: linear-gradient(180deg, transparent 0%, rgb(0 0 0 / 100%) 100%);
    padding: 1rem;
    text-transform: capitalize;
    color: $white;
    font-size: 1.25rem;
    font-weight: bold;
  }
}
</style>
