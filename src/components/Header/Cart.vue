<template>
  <div class="header-cart">
    <v-tooltip bottom transition="fade-transition">
      <template #activator="{ on, attrs }">
        <v-btn icon v-bind="attrs" v-on="on">
          <v-icon>{{ icons.mdiCartOutline }}</v-icon>
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
