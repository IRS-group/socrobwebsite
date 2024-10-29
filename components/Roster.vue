<template>
    <section class="roster section" id="roster">
      <h2 class="section__title">Roster</h2>
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
      image: '/team/pedroLima.jpg',
    },
    {
      name: 'Rodrigo Serra',
      position: 'Team Leader',
      image: '/team/rodrigo.png',
    },
    {
      name: 'Rui Bettencourt',
      position: 'PhD Student',
      image: '/team/rui.png',
    },
    {
      name: 'Gabriel Nunes',
      position: 'Hardware Tech',
      image: '/team/gabrielNunes.JPG',
    },
    {
      name: 'Afonso Certo',
      position: 'MSc Student',
      image: '/team/afonsoCerto.png',
    },
    {
      name: 'Miguel Nabais',
      position: 'MSc Student',
      image: '/team/miguelNabais.png',
    },
  ];
  </script>
  
  <style scoped>
  .roster {
    text-align: center;
    padding: 2rem 0;
  }
  
  .roster__container {
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .roster__info {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1rem;
  }
  
  .roster__name {
    font-weight: bold;
    margin-top: 0.5rem;
  }
  
  .roster__position {
    color: gray;
    margin-top: 0.25rem;
  }
  </style>
  