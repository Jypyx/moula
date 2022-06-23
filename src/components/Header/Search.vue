<template>
  <div class="header-search">
    <v-tooltip bottom transition="fade-transition">
      <template #activator="{ on, attrs }">
        <v-btn icon v-bind="attrs" v-on="on" @click="toggleSearch">
          <v-icon>{{ icons.mdiMagnify }}</v-icon>
        </v-btn>
      </template>
      {{ $t('header.search.tooltip') }}
    </v-tooltip>
    <v-slide-y-transition>
      <form
        class="header-search__container"
        :class="{ 'theme--dark': $vuetify.theme.dark }"
        v-if="isVisible"
        v-click-outside="toggleSearch"
        @submit.prevent="searchProduct"
      >
        <v-text-field
          v-model="search"
          :placeholder="$t('header.search.placeholder')"
          solo
          flat
          hide-details
          autofocus
          :prepend-inner-icon="icons.mdiMagnify"
          :clear-icon="icons.mdiBackspaceOutline"
          clearable
          background-color="transparent"
        ></v-text-field>
        <v-btn icon @click="toggleSearch">
          <v-icon>{{ icons.mdiClose }}</v-icon>
        </v-btn>
      </form>
    </v-slide-y-transition>
  </div>
</template>

<script>
import { mdiMagnify, mdiClose, mdiBackspaceOutline } from '@mdi/js'

export default {
  name: 'HeaderSearch',
  props: {
    query: {
      type: String,
      required: false,
      default: '',
    },
  },
  data: () => ({
    isVisible: false,
    icons: {
      mdiMagnify,
      mdiClose,
      mdiBackspaceOutline,
    },
    search: '',
  }),
  watch: {
    query() {
      this.search = this.query
    },
  },
  methods: {
    toggleSearch() {
      this.isVisible = !this.isVisible
    },
    searchProduct() {
      this.$emit('search', this.search)
      this.toggleSearch()
    },
  },
}
</script>

<style lang="scss" scoped>
.header-search {
  &__container {
    display: flex;
    position: absolute;
    top: 0;
    right: -0.75rem;
    bottom: 0;
    left: -0.75rem;
    align-items: center;
    z-index: 1;
    background: map-get($material-light, 'app-bar');

    @media (min-width: map-get($grid-breakpoints, 'sm')) {
      right: 0.75rem;
      left: 0.75rem;
    }

    &.theme--dark {
      background: map-get($material-dark, 'app-bar');
    }
  }
}
</style>
