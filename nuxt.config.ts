// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@sidebase/nuxt-auth'],
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
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
