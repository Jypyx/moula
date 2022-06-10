import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'
import fr from 'vuetify/lib/locale/fr'

Vue.use(Vuetify)

export default new Vuetify({
  lang: {
    locales: { fr },
    current: 'fr',
  },
  theme: {
    dark: !!(localStorage.getItem('dark_theme') * 1) || false,
    themes: {
      light: {
        primary: '#A63016',
      },
      dark: {
        primary: '#A63016',
      },
    },
    options: {
      customProperties: true,
    },
  },
  breakpoint: {
    thresholds: {
      xs: 768,
      sm: 1024,
      md: 1280,
      lg: 1920,
    },
    scrollBarWidth: 0,
    mobileBreakpoint: 'sm',
  },
  icons: {
    iconfont: 'mdiSvg',
  },
})
