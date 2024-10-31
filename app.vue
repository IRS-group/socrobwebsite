<template>
  <NuxtLayout>
    <v-app>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Competitions />
        <Roster />
        <Robots />
        <Publications/>
        <Media/>
      </main>
      <Footer/>
    </v-app>
  </NuxtLayout>
</template>

<script setup lang="ts">
  import Header from '@/components/Header.vue'
  import Home from '@/components/Home.vue'
  import About from '@/components/About.vue'
  import Competitions from '@/components/Competitions.vue'
  import Roster from '@/components/Roster.vue'
  import Robots from '@/components/Robots.vue'
  import Publications from '@/components/Publications.vue'
  import Media from '@/components/Media.vue'
  import Footer from '@/components/Footer.vue'
</script>

<style>
  /* Global styles or overrides go here */
</style>