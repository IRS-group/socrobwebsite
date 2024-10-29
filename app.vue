<template>
  <NuxtLayout>
    <v-app>
      <Header />
      <Home />
      <About />
      <Competitions />
      <Roster />
    </v-app>
  </NuxtLayout>
</template>

<script setup lang="ts">
  import Header from '@/components/Header.vue'
  import Home from '@/components/Home.vue'
  import About from '@/components/About.vue'
  import Competitions from '@/components/Competitions.vue'
  import Roster from '@/components/Roster.vue'
</script>

<style>
  /* Global styles or overrides go here */
</style>