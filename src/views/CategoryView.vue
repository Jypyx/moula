<template>
  <div class="category">
    <v-container class="category__container">
      <UiTitle :title="$t('category.title', { category: $route.params.category })"
    /></v-container>
  </div>
</template>

<script>
import UiTitle from '@/components/UI/Title.vue'

export default {
  components: {
    UiTitle,
  },
}
</script>
