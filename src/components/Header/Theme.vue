<template>
  <div class="header-theme">
    <v-tooltip bottom transition="fade-transition">
      <template #activator="{ on, attrs }">
        <v-btn icon v-bind="attrs" v-on="on" @click="toggleDarkTheme">
          <v-icon>{{ icons.mdiThemeLightDark }}</v-icon>
        </v-btn>
      </template>
      {{ $t('header.theme.tooltip') }}
    </v-tooltip>
  </div>
</template>

<script>
import { mdiThemeLightDark } from '@mdi/js'

export default {
  name: 'HeaderTheme',
  data: () => ({
    icons: {
      mdiThemeLightDark,
    },
  }),
  methods: {
    toggleDarkTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
      localStorage.setItem('dark_theme', +this.$vuetify.theme.dark)
    },
  },
}
</script>
