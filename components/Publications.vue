<template>
    <section class="publications section" id="publications">
      <h2 class="section__title">Publications</h2>
      <span class="section__subtitle">
        <v-icon class="publications_icon">mdi-book-open-variant-outline</v-icon>
      </span>
  
      <div class="publications__container container">
        <!-- Vuetify Carousel -->
        <v-carousel
          height="auto"
          hide-delimiters
          cycle
          class="publications-carousel"
          :show-arrows="false"
        >
          <!-- Loop through publications and render each in a slide -->
          <v-carousel-item
            v-for="(publication, index) in publications"
            :key="index"
            class="publications__content"
          >
            <div class="publications__data">
              <h3 class="publications__name">{{ publication.title }}</h3>
              <p class="publications__type">{{ publication.type }}</p>
  
              <div class="publications__info-author">
                <p class="publications__author">Authors</p>
                <p class="publications__author-text">{{ publication.authors }}</p>
              </div>
  
              <v-btn
                :href="publication.link"
                target="_blank"
                class="button2 button--flex2"
                variant="outlined"
                color="primary"
              >
                Learn more
                <v-icon end>mdi-information-outline</v-icon>
              </v-btn>
            </div>
          </v-carousel-item>
        </v-carousel>
      </div>
  
      <!-- Message about the full list of publications -->
      <p class="full-list-note">
        If you wish to have a full list of publications, please check our 
        <a href="https://irsgroup.isr.tecnico.ulisboa.pt/projects/socrob-home/" target="_blank" class="old-website-link">
          old website
        </a>.
      </p>
    </section>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  
  export default defineComponent({
    setup() {
      const publications = ref([
        {
          title: 'People Re-Identification in Service Robots',
          type: 'Conference paper',
          authors: 'Vicente Pinto, Rui Bettencourt, Rodrigo Ventura',
          link: 'https://doi.org/10.3390/app12104819',
        },
        // {
        //   title: 'Functionalities, Benchmarking System and Performance Evaluation for a Domestic Service Robot: People Perception, People Following, and Pick and Placing',
        //   type: 'Journal article',
        //   authors: 'Meysam Basiri, Joao Pereira, Rui Bettencourt, Enrico Piazza, E. Fernandes, Carlos Azevedo, Pedro Lima',
        //   link: 'https://doi.org/10.3390/app12104819',
        // },
        {
          title: 'Olisipo: A probabilistic approach to the adaptable execution of deterministic temporal plans',
          type: 'Conference paper',
          authors: 'Tomás Ribeiro, Oscar Lima, Michael Cashmore, Andrea Micheli, Rodrigo Ventura',
          link: 'https://doi.org/10.4230/LIPIcs.TIME.2021.15',
        },
        {
          title: 'Petri Net Toolbox for Multi-Robot Planning under Uncertainty',
          type: 'Journal Article',
          authors: 'Carlos Azevedo, António Matos, Pedro Lima, Jose Avendaño',
          link: 'https://doi.org/10.3390/app112412087',
        },
        {
          title: 'Multimodal Navigation for Autonomous Service Robots',
          type: 'Conference paper',
          authors: 'Rui Bettencourt, Pedro Lima',
          link: 'https://doi.org/10.1109/ICARSC52212.2021.9429771',
        },
        {
          title: 'Grasp Planning with Incomplete Knowledge About the Object to be Grasped',
          type: 'Conference paper',
          authors: 'João Gonçalves, Pedro Lima',
          link: 'https://ieeexplore.ieee.org/document/8733615',
        },
      ]);
  
      return { publications };
    },
  });
  </script>
  
  <style scoped lang="scss" src="@/assets/publications.scss"></style>
  
  