<template>
    <section class="roster section" id="roster">
      <h2 class="section__title">Roster</h2>
      <span class="section__subtitle">
        <v-icon class="roster_icon">mdi-account-group-outline</v-icon>
      </span>
      <v-container class="roster__container" fluid>
        <v-row justify="center">
          <v-col v-for="member in teamMembers" :key="member.name" cols="12" sm="6" md="4">
            <div class="roster__info">
              <v-avatar size="100" class="roster__avatar">
                <v-img :src="member.image" contain></v-img>
              </v-avatar>
              <div class="roster__name">{{ member.name }}</div>
              <div class="roster__position">{{ member.position }}</div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </template>
  
  <script setup lang="ts">
  const teamMembers = [
    {
      name: 'Pedro Lima',
      position: 'Project Coordinator',
      image: '/team/cropped/pedroLima.png',
    },
    {
      name: 'Rodrigo Serra',
      position: 'Team Leader',
      image: '/team/cropped/rodrigo.png',
    },
    {
      name: 'Rui Bettencourt',
      position: 'PhD Student',
      image: '/team/cropped/rui.png',
    },
    {
      name: 'Gabriel Nunes',
      position: 'Hardware Tech',
      image: '/team/cropped/gabrielNunes.png',
    },
    {
      name: 'Afonso Certo',
      position: 'MSc Student',
      image: '/team/cropped/afonsoCerto.png',
    },
    {
      name: 'Miguel Nabais',
      position: 'MSc Student',
      image: '/team/cropped/miguelNabais.png',
    },
    {
      name: 'Catarina Caramalho',
      position: 'MSc Student',
      image: '/team/cropped/catarinaCaramalho.png',
    },
    {
      name: 'Patrícia Torres',
      position: 'MSc Student',
      image: '/team/cropped/patriciaTorres.png',
    },
    {
      name: 'António Morais',
      position: 'MSc Student',
      image: '/team/cropped/antonioMorais.png',
    },
    {
      name: 'Robin Steiger',
      position: 'MSc Student',
      image: '/team/cropped/robinSteiger.png',
    },
    {
      name: 'Kevin Alcedo',
      position: 'PhD Student',
      image: '/team/kevinAlcedo.png',
    },
    {
      name: 'Rodrigo Coimbra',
      position: 'MSc Student',
      image: '/team/robotMale.jpg',
    },
    {
      name: 'Teresa Nogueira',
      position: 'MSc Student',
      image: '/team/robotFemale.jpg',
    },
    {
      name: 'André Silva',
      position: 'Research Engineer',
      image: '/team/robotMale.jpg',
    },
    {
      name: 'Matilde Vital',
      position: 'MSc Student',
      image: '/team/robotFemale.jpg',
    },
  ];
  </script>
  
  <style scoped lang="scss" src="@/assets/roster.scss"></style>
  