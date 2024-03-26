// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@sidebase/nuxt-auth', '@vueuse/nuxt'],
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      'tailwindcss/nesting': {},
      'postcss-nested': {},
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    googleClientSecret: '',
    googleClientId: '',
    authSecret: '',
    public: {
      url: '',
      mapsApiKey: '',
    },
  },
  auth: {
    provider: {
      type: 'authjs',
    },
    globalAppMiddleware: true,
  },
});
