// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/ui"],
  ui: {
    prefix: "Nuxt",
  },
  css: ["~/assets/css/main.css"],
  build: {
    transpile: ["@vue/devtools-core", "@vue/devtools-kit"],
  },
});
