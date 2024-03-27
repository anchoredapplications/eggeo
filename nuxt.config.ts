// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@sidebase/nuxt-auth', '@vueuse/nuxt', '@vite-pwa/nuxt'],
  pwa: {
    manifest: {
      name: 'Egg Finder',
      short_name: 'EggFindr',
      description: "Jeremiah's Egg Finder -- Geolocation client for easter eggs.",
      theme_color: '#AAFFAA',
      background_color: '#AAFFAA',
      icons: [
        {
          src: '/pwa/pwa-64x64.png',
          sizes: '64x64',
          type: 'image/png',
        },
        {
          src: '/pwa/pwa-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: '/pwa/pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
        {
          src: '/pwa/maskable-icon-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
        {
          src: '/pwa/apple-touch-icon-180x180.png',
          sizes: '180x180',
          type: 'image/png',
        },
      ],
      screenshots: [
        {
          src: '/pwa/mobile.png',
          sizes: '400x800',
          type: 'image/png',
          form_factor: 'narrow',
          label: 'Application',
        },
        {
          src: '/pwa/desktop.png',
          sizes: '1280x920',
          type: 'image/png',
          form_factor: 'wide',
          label: 'Application',
        },
      ],
    },
    workbox: {
      navigateFallback: '/',
    },
    devOptions: {
      enabled: true,
      type: 'module',
    },
  },
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
