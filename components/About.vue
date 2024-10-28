<template>
    <section className="about section" id="about">
        <h2 class="section__title">About the Team</h2>
        <span class="section__subtitle">
            <v-icon class="about_icon">mdi-account-outline</v-icon>
        </span>

        <div class="about__container container grid">
            <!-- Vuetify Carousel for Images -->
            <v-carousel hide-delimiters cycle :show-arrows="false" class="about__carousel">
                <v-carousel-item v-for="(image, i) in images" :key="i">
                    <v-img :src="image" class="about__img" />
                </v-carousel-item>
            </v-carousel>

            <!-- Text Section -->
            <div class="about__data">
                <p class="about__description">
                    The Intelligent Robots and Systems research group at the <a href="https://welcome.isr.tecnico.ulisboa.pt/" class="about_text_link" target="_blank" rel="noreferrer">Intelligent for Systems and Robotics</a> has led significant EU-funded projects focused on human-robot interactions and social behaviors. One notable initiative, the MOnarCH project, aimed to equip autonomous robots with capabilities to engage and entertain children facing health challenges, particularly those undergoing cancer treatment at the Instituto Português de Oncologia Francisco Gentil in Lisbon (IPO).
                </p>
                <p class="about__description">
                    Following this, from 2013 to 2015, the RoCKIn project involved competitions designed to evaluate new benchmark methods in domestic and work environments, addressing complex challenges faced by state-of-the-art robots. Inspired by the success of these projects, we formed the SocRob@Home team, a dedicated group ready to tackle future challenges in robotics, including those presented in scientific competitions.
                </p>
                <p class="about__description">
                    Our focus encompasses key areas such as perception and sensor fusion, decision-making under uncertainty, human-robot interaction, and manipulation and grasping. Together, we aim to advance the field of robotics and enhance the interactions between robots and their environments.
                </p>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
// Array of image paths for the slider
const images = [
    '/about/1.png',
    '/about/2.png',
    '/about/3.png'
]
</script>

<style scoped lang="scss" src="@/assets/about.scss"></style>
