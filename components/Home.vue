<template>
    <section className="home section" id="home">
        <div class="home__container container grid">
        <div class="home__content grid">
            <!-- Social Links -->
            <div class="home__social">
                <a
                href="https://www.instagram.com/socrobhome/"
                target="_blank"
                rel="noreferrer"
                class="home__social-icon"
                >
                <v-icon>mdi-instagram</v-icon>
                </a>
                <a
                href="https://www.linkedin.com/company/socrob-home/"
                target="_blank"
                rel="noreferrer"
                class="home__social-icon"
                >
                <v-icon>mdi-linkedin</v-icon>
                </a>
                <a
                href="https://www.youtube.com/@socrob_home"
                target="_blank"
                rel="noreferrer"
                class="home__social-icon"
                >
                <v-icon>mdi-youtube</v-icon>
                </a>
                <a
                href="https://github.com/socrob"
                target="_blank"
                rel="noreferrer"
                class="home__social-icon"
                >
                <v-icon>mdi-github</v-icon>
                </a>
            </div>
    
            <!-- Profile Image in SVG Blob -->
            <!-- <div class="home__img">
            <svg class="home__blob" viewBox="0 0 200 187" xmlns="http://www.w3.org/2000/svg">
                <mask id="mask0" mask-type="alpha">
                <path
                    d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
                    130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
                    97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
                    0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z" />
                </mask>
                <g mask="url(#mask0)">
                <path
                    d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
                    165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
                    129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
                    -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z" />
                <image class="home__blob-img" href="@/public/logos/socrob_home_logo.png" x="35" y="18" />
                </g>
            </svg>
            </div> -->

            <!-- Profile Image -->
            <div class="home__img">
                <img src="/logos/socrob_home_logo.png" alt="Profile Image" class="home__profile-img" />
            </div>
    
            <!-- Content Data -->
            <div class="home__data">
                <h1 class="home__title">Hi there</h1>
                <h3 class="home__subtitle">
                    We are SocRob@Home
                    <v-icon class="home__bulb-icon">mdi-robot</v-icon>
                </h3>
                <p class="home__description">Institute for Systems & Robotics</p>
        
                <a href="https://irs-group.github.io/socrobwebsite/tdp/TeamDescriptionPaper2026_v2.pdf" download="TeamDescriptionPaper2026_v2.pdf" target="_blank"class="home_button_link button--flex">
                    Team Description Paper
                    <v-icon>mdi-book-arrow-down-outline</v-icon>
                </a>
                <!-- <a href="/tdp/TeamDescriptionPaper.pdf" download="TeamDescriptionPaper.pdf" target="_blank"class="home_button_link button--flex">
                    Team Description Paper
                    <v-icon>mdi-book-arrow-down-outline</v-icon>
                </a> -->
            </div>
        </div>
        </div>
    </section>
  </template>
  
  <script setup>
  // No specific script required for this component as it's mostly static.
  </script>
  
  <style scoped lang="scss" src="@/assets/home.scss"></style>
  