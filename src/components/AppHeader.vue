<template>
  <v-app-bar app height="56" elevation="2" class="app-header">
    <v-container class="app-header__container">
      <AppLogo />
      <v-spacer />
      <HeaderLanguageSelector />
      <HeaderSearch :query="$route.query.query" @search="searchProduct" />
      <HeaderTheme />
      <HeaderCart :cart="cart" />
    </v-container>
    <v-progress-linear :active="loading" indeterminate absolute top color="primary"></v-progress-linear>
  </v-app-bar>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import AppLogo from '@/components/AppLogo.vue'
import HeaderLanguageSelector from '@/components/Header/LanguageSelector.vue'
import HeaderSearch from '@/components/Header/Search.vue'
import HeaderTheme from '@/components/Header/Theme.vue'
import HeaderCart from '@/components/Header/Cart.vue'

export default {
  components: {
    AppLogo,
    HeaderLanguageSelector,
    HeaderSearch,
    HeaderTheme,
    HeaderCart,
  },
  computed: {
    ...mapState({
      cart: state => state.products.cart,
      loading: state => state.products.loading,
    }),
  },
  methods: {
    ...mapActions({
      setSearch: 'products/setSearch',
    }),
    searchProduct(query) {
      if (query !== this.$route.query.query) {
        this.setSearch(query)
        this.$router.push({ name: 'Search', query: { query } })
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.app-header {
  &__container {
    display: flex;
    position: relative;
    align-items: center;
    padding: 0;

    @media (min-width: map-get($grid-breakpoints, 'sm')) {
      padding: 0 1.5rem;
    }
  }
}
</style>
