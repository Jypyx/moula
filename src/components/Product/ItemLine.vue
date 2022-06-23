<template>
  <v-card class="product-item-line" :to="{ name: 'Product', params: { id: product.id } }">
    <v-img
      class="product-item-line__image"
      :src="product.thumbnail"
      position="center center"
      max-width="100"
      max-height="150"
    >
      <v-chip v-if="product.discountPercentage > 0" color="primary" small class="product-item-line__image__discount">
        -{{ Math.round(product.discountPercentage) }}%
      </v-chip>
    </v-img>
    <div class="product-item-line__content">
      <div class="product-item-line__content__header">
        <h2 class="product-item-line__content__header__title">{{ product.title }}</h2>
        <v-spacer />
        <div class="product-item-line__content__header__price">{{ product.price }}€</div>
      </div>
      <v-rating
        class="product-item-line__content__rating"
        color="warning"
        length="5"
        :value="product.rating"
        half-increments
        readonly
        background-color="grey lighten-1"
        dense
        size="24"
      />
      <div class="product-item-line__content__actions">
        <v-spacer />
        <v-btn
          fab
          small
          rounded
          color="primary"
          class="product-item-line__content__actions__btn"
          @click.prevent="addToCart"
        >
          <v-icon>{{ icons.mdiCartPlus }}</v-icon>
        </v-btn>
      </div>
    </div>
  </v-card>
</template>

<script>
import { mdiCartPlus } from '@mdi/js'

export default {
  name: 'ProductItem',
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    icons: {
      mdiCartPlus,
    },
  }),
  methods: {
    addToCart() {
      this.$emit('addToCart', this.product)
    },
  },
}
</script>

<style lang="scss" scoped>
.product-item-line {
  display: flex;
  overflow: hidden;

  &__image {
    border-radius: 0 !important;

    &__discount {
      position: absolute;
      top: 1rem;
      left: 1rem;
    }
  }

  &__content {
    flex: 1;
    padding: 1rem;

    &__header {
      display: flex;
      align-items: center;

      &__title {
        text-transform: capitalize;
        font-size: 1rem;
        font-weight: bold;
      }

      &__price {
        margin-left: 1rem;
        color: var(--v-primary-base);
        font-weight: bold;
      }
    }

    &__rating {
      margin-left: -0.25rem;
    }

    &__actions {
      display: flex;
    }
  }
}
</style>
