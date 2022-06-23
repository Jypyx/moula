<template>
  <div class="search-view">
    <v-container class="search-view__container">
      <UiTitle :title="$t('searchView.title', { query: $route.query.query })" />
      <ProductList v-if="products.length > 0" :products="products" />
      <div v-else>{{ $t('searchView.noData') }}</div>
    </v-container>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import UiTitle from '@/components/UI/Title.vue'
import ProductList from '@/components/Product/List.vue'

export default {
  name: 'SearchView',
  components: {
    UiTitle,
    ProductList,
  },
  data: () => ({
    loading: false,
  }),
  created() {
    this.initSearch()
  },
  watch: {
    search() {
      this.initSearch()
    },
  },
  computed: {
    ...mapState({
      search: state => state.products.search,
      products: state => state.products.products,
    }),
  },
  methods: {
    ...mapActions({
      searchProduct: 'products/searchProduct',
      setLoading: 'products/setLoading',
    }),
    async initSearch() {
      this.setLoading(true)
      await this.searchProduct(this.$route.query.query)
      this.setLoading(false)
    },
  },
}
</script>
