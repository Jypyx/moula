<template>
  <div class="category-view">
    <v-container class="category-view__container">
      <UiTitle :title="$t('categoryView.title', { category: $route.params.category })" />
      <ProductList v-if="products.length > 0" :products="products" />
      <div v-else>{{ $t('categoryView.noData') }}</div>
    </v-container>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import UiTitle from '@/components/UI/Title.vue'
import ProductList from '@/components/Product/List.vue'

export default {
  components: {
    UiTitle,
    ProductList,
  },
  data: () => ({
    loading: false,
  }),
  async created() {
    this.setLoading(true)
    await this.getCurrentCategory(this.$route.params.category)
    this.setLoading(false)
  },
  computed: {
    ...mapState({
      products: state => state.products.products,
    }),
  },
  methods: {
    ...mapActions({
      getCurrentCategory: 'products/getCurrentCategory',
      setLoading: 'products/setLoading',
    }),
  },
}
</script>
