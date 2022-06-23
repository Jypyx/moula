<template>
  <div class="header-cart">
    <v-tooltip bottom transition="fade-transition">
      <template #activator="{ on, attrs }">
        <v-btn icon v-bind="attrs" v-on="on">
          <v-badge overlap bordered color="red" :content="cart.length" :value="cart.length > 0">
            <v-icon>{{ icons.mdiCartOutline }}</v-icon>
          </v-badge>
        </v-btn>
      </template>
      {{ $t('header.cart.tooltip') }}
    </v-tooltip>
  </div>
</template>

<script>
import { mdiCartOutline } from '@mdi/js'

export default {
  name: 'HeaderCart',
  props: {
    cart: {
      type: Array,
      required: true,
    },
  },
  data: () => ({
    icons: {
      mdiCartOutline,
    },
  }),
}
</script>

<style lang="scss" scoped>
.header-cart {
  margin-right: -0.75rem;
}
</style>
