<template>
    <section class="media section" id="media">
      <h2 class="section__title">Media</h2>
      <span class="section__subtitle">
        <v-icon class="media_icon">mdi-youtube</v-icon>
      </span>
  
      <div class="media__container container">
        <!-- Embed YouTube video -->
        <div class="video-container">
          <iframe
            src="https://www.youtube.com/embed/EYNbImwH-mM?si=8JIrML8g7YnyxKBL"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
  
        <p class="media__description">
          Watch SocRob performances and research on our 
          <a href="https://www.youtube.com/@socrob_home" target="_blank" class="youtube-link">
            YouTube Channel.
          </a>
        </p>
      </div>
    </section>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    setup() {
      return {};
    },
  });
  </script>
  
  <style scoped lang="scss" src="@/assets/media.scss"></style>
  