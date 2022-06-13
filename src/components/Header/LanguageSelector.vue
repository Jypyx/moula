<template>
  <div class="language-selector">
    <v-menu left content-class="language-selector__menu" max-height="350">
      <template #activator="{ on, attrs }">
        <v-btn icon v-bind="attrs" v-on="on">
          <v-img :src="require(`@/assets/images/flags/${$i18n.locale}.svg`)" max-width="24" />
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="locale in $i18n.availableLocales"
          :key="locale"
          link
          :class="{ 'grey lighten-5': $i18n.locale === locale }"
          @click="$i18n.locale = locale"
        >
          <v-list-item-icon class="mr-4">
            <v-img :src="require(`@/assets/images/flags/${locale}.svg`)" max-width="24" />
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title :class="{ 'font-weight-bold': $i18n.locale === locale }">
              {{ locales[locale] }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
export default {
  name: 'HeaderLanguageSelector',
  computed: {
    locales() {
      return {
        fr: 'Français',
        en: 'English',
      }
    },
  },
}
</script>
