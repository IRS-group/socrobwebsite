<template>
  <NuxtLayout>
    <v-app>
      <Header />
      <Home />
      <About />
    </v-app>
  </NuxtLayout>
</template>

<script setup lang="ts">
  import Header from '@/components/Header.vue'
  import AboutSection from '@/components/AboutSection.vue'
  import CompetitionsSection from '@/components/CompetitionsSection.vue'
  import PublicationsSection from '@/components/PublicationsSection.vue'
  import FooterSection from '@/components/FooterSection.vue'
</script>

<style>
  /* Global styles or overrides go here */
</style>