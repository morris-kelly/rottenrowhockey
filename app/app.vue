<template>
  <UApp>
    <UNavigationMenu orientation="vertical"  :items="items" class="data-[orientation=vertical]:w-48" />
    <NuxtPage />
  </UApp>
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const items = ref<NavigationMenuItem[]>([
  {
    label: 'Committee',
    to: '/committee',
  },
  {
    label: 'Documents',
    to: '/documents',
  },

])
</script>
