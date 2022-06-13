<template>
  <div class="home">
    <v-container class="home__container">
      <section class="home__container__section">
        <UiTitle :title="$t('home.categories.title')" />
        <div class="home__container__section__list">
          <v-lazy v-for="category in computedCategories" :key="category" min-height="100" transition="fade-transition">
            <CategoryItem :category="category" />
          </v-lazy>
        </div>
        <div class="home__container__section__actions">
          <v-btn v-if="categoryListLimit > 0" rounded color="primary" outlined @click="categoryListLimit = -1">
            {{ $t('home.categories.cta.more') }}
          </v-btn>
          <v-btn v-else rounded color="primary" outlined @click="categoryListLimit = 6">
            {{ $t('home.categories.cta.less') }}
          </v-btn>
        </div>
      </section>
      <section class="home__container__section">
        <UiTitle :title="$t('home.products.title')" />
        <div class="home__container__section__list">
          <ProductItem v-for="product in computedProducts" :key="product.id" :product="product" />
        </div>
        <div class="home__container__section__actions">
          <v-btn rounded color="primary" outlined>
            {{ $t('home.products.cta.more') }}
          </v-btn>
        </div>
      </section>
    </v-container>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

import UiTitle from '@/components/UI/Title.vue'
import CategoryItem from '@/components/Category/Item.vue'
import ProductItem from '@/components/Product/Item.vue'

export default {
  name: 'HomeView',
  components: {
    UiTitle,
    CategoryItem,
    ProductItem,
  },
  data: () => ({
    categoryListLimit: 6,
    productListLimit: 6,
  }),
  async created() {
    await Promise.all([this.getCategories(), this.getProducts()])
  },
  computed: {
    ...mapState({
      categories: state => state.products.categories,
      products: state => state.products.products,
    }),
    computedCategories() {
      if (this.categoryListLimit > 0) {
        return this.categories.slice(0, this.categoryListLimit)
      }
      return this.categories
    },
    computedProducts() {
      if (!this.products.length) {
        return
      }
      return this.products.slice(0, this.productListLimit)
    },
  },
  methods: {
    ...mapActions({
      getCategories: 'products/getCategories',
      getProducts: 'products/getProducts',
    }),
  },
}
</script>

<style lang="scss" scoped>
.home {
  &__container {
    &__section {
      margin-top: 2rem;

      &:first-child {
        margin-top: 0;
      }

      &__list {
        display: grid;
        grid-template-columns: repeat(1, minmax(0, 1fr));
        gap: 1.5rem;

        @media (min-width: map-get($grid-breakpoints, 'sm')) {
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }

        @media (min-width: map-get($grid-breakpoints, 'md')) {
          grid-template-columns: repeat(4, minmax(0, 1fr));
        }
      }

      &__actions {
        margin-top: 1.5rem;
        display: flex;
        justify-content: center;
      }
    }
  }
}
</style>
