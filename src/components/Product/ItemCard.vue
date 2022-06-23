<template>
  <v-card class="product-item-card" :to="{ name: 'Product', params: { id: product.id } }">
    <v-img class="product-item-card__image" :src="product.thumbnail" position="center center" height="200">
      <v-chip v-if="product.discountPercentage > 0" color="primary" small class="product-item-card__image__discount">
        -{{ Math.round(product.discountPercentage) }}%
      </v-chip>
    </v-img>
    <div class="product-item-card__content">
      <div class="product-item-card__content__header">
        <h2 class="product-item-card__content__header__title">{{ product.title }}</h2>
        <v-spacer />
        <div class="product-item-card__content__header__price">{{ product.price }}€</div>
      </div>
      <v-rating
        class="product-item-card__content__rating"
        color="warning"
        length="5"
        :value="product.rating"
        half-increments
        readonly
        background-color="grey lighten-1"
        dense
        size="24"
      />
      <v-btn rounded color="primary" block class="product-item-card__content__btn" @click.prevent="addToCart">
        {{ $t('product.item.addToCart') }}
      </v-btn>
    </div>
  </v-card>
</template>

<script>
export default {
  name: 'ProductItem',
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  methods: {
    addToCart() {
      this.$emit('addToCart', this.product)
    },
  },
}
</script>

<style lang="scss" scoped>
.product-item-card {
  overflow: hidden;

  &__image {
    &__discount {
      position: absolute;
      top: 1rem;
      left: 1rem;
    }
  }

  &__content {
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
        color: var(--v-primary-base);
        font-weight: bold;
      }
    }

    &__rating {
      margin-left: -0.25rem;
    }

    &__btn {
      margin-top: 1rem;
    }
  }
}
</style>
