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
          show-arrows
          class="publications-carousel"
        >
        <!-- Custom Prev Button -->
          <template v-slot:prev="{ props }">
            <v-btn
              icon
              @click="props.onClick"
              class="carousel-button carousel-button--prev"
            >
              <v-icon>mdi-chevron-left</v-icon>
            </v-btn>
          </template>

          <!-- Custom Next Button -->
          <template v-slot:next="{ props }">
            <v-btn
              icon
              @click="props.onClick"
              class="carousel-button carousel-button--next"
            >
              <v-icon>mdi-chevron-right</v-icon>
            </v-btn>
          </template>
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
        If you wish to have a full list of publications, please check this 
        <a href="https://irsgroup.isr.tecnico.ulisboa.pt/projects/socrob-home/" target="_blank" class="old-website-link">
          link.
        </a>
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
        {
          title: 'A generic optimization based cartesian controller for robotic mobile manipulation',
          type: 'Conference paper',
          authors: 'Emilia Brzozowska, Oscar Lima, Rodrigo Ventura',
          link: 'https://ieeexplore.ieee.org/abstract/document/8793635',
        },
        {
          title: 'An Hierarchical Approach to Active Semantic Mapping Using Probabilistic Logic and Information Reward POMDP',
          type: 'Journal Article',
          authors: 'Tiago Veiga, Miguel Silva, Rodrigo Ventura, Pedro Lima',
          link: 'https://ojs.aaai.org/index.php/ICAPS/article/view/3546',
        },
        {
          title: 'Benchmarking Functionalities of Domestic Service Robots Through Scientific Competitions',
          type: 'Journal Article',
          authors: 'Meysam Basiri, Enrico Piazza, M. Matteucci, Pedro Lima',
          link: 'https://link.springer.com/article/10.1007/s13218-019-00619-9',
        },
        {
          title: 'A GSPN Software Framework to Model and Analyze Robot Tasks',
          type: 'Conference paper',
          authors: 'Carlos Azevedo, Pedro Lima',
          link: 'https://ieeexplore.ieee.org/abstract/document/8733634',
        },
        {
          title: 'Robust object recognition through symbiotic deep learning in mobile robots',
          type: 'Conference paper',
          authors: 'João Cartucho, Rodrigo Ventura, and Manuela Veloso.',
          link: 'https://ieeexplore.ieee.org/abstract/document/8594067',
        },
      ]);
  
      return { publications };
    },
  });
  </script>
  
  <style scoped lang="scss" src="@/assets/publications.scss"></style>
  
  