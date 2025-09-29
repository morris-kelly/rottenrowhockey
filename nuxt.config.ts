import { defineNuxtConfig } from "nuxt/config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ["@nuxt/ui", "@nuxt/eslint", "@nuxt/icon"],

  css: ["~/assets/css/main.css"],

  vite: {
    optimizeDeps: {
      exclude: ["@vue/devtools-core", "@vue/devtools-kit"],
    },
  },

  compatibilityDate: "2025-07-16",
});
