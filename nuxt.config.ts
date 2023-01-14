// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/main.scss'],

  modules: ['@nuxtjs/i18n'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  i18n: {
    locales: [
      { code: 'it', iso: 'it-IT', file: 'it.json' },
      { code: 'en', iso: 'en-US', file: 'en.json' },
      { code: 'se', iso: 'sv_SE', file: 'se.json' },
      { code: 'fr', iso: 'fr-FR', file: 'fr.json' },
      { code: 'es', iso: 'es-ES', file: 'es.json' },
    ],
    langDir: 'locales',

    defaultLocale: 'it',
    vueI18n: {
      fallbackLocale: 'en',
    },
  },
});
