<template>
    <section class="robots section" id="robots">
      <h2 class="section__title">Robots</h2>
      <span class="section__subtitle">
        <v-icon class="robots_icon">mdi-robot-outline</v-icon>
      </span>
      <div class="robots__container container grid">
        <div v-for="robot in robots" :key="robot.id" class="robots__content">
          <div>
            <v-avatar size="100" class="robots__icon3">
              <v-img :src="robot.avatar" contain></v-img>
            </v-avatar>
            <h3 class="robots__title">{{ robot.name }}</h3>
            <button
              class="button button--flex button--small button--link robots__button"
              @click="openModal(robot.id)"
            >
              Read More
              <v-icon class="button__icon robots__button-arrow">mdi-arrow-right</v-icon>
            </button>
          </div>
          
          <!-- Only show modal if the selectedRobotId matches the current robot's ID -->
          <div
            class="robots__modal"
            :class="{ 'active-modal': selectedRobotId === robot.id }"
            @click.self="closeModal"
          >
            <div class="robots__modal-content">
              <h4 class="robots__modal-title">{{ robot.name }}</h4>
              <p class="robots__modal-date">{{ robot.date }}</p>
              <v-btn icon @click="closeModal" class="robots__modal-close">
                <v-icon>mdi-close</v-icon>
              </v-btn>
    
              <div class="robots__modal-robots grid">
                <div class="robots__modal-robot">
                  <p class="robots__modal-robot-objective">
                    <v-icon class="robots__modal-robot-objective-icon">mdi-robot-outline</v-icon>
                    Description
                  </p>
                  <p class="robots__modal-robot-objective-text">{{ robot.description }}</p>
                </div>
                <div class="robots__modal-robot">
                  <p class="robots__modal-robot-partners">
                    <v-icon class="robots__modal-robot-partners-icon">mdi-cog-outline</v-icon>
                    Hardware
                  </p>
                  <ul class="robots__modal-robot-partners-list">
                    <li
                      v-for="(component, index) in robot.hardware"
                      :key="index"
                      class="robots__modal-robot-partners-list-element"
                    >
                      <p class="robots__modal-robot-partners-list-element-text">{{ component }}</p>
                    </li>   
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  
  export default defineComponent({
    setup() {
      const robots = ref([
        {
          id: 1,
          name: 'Bob',
          avatar: 'robots/oldBobby.jpg',
          photo: 'robots/bobby.jpg',
          date: '2022 - Current',
          description: 'The SocRob@Home TIAGo robot is a customized version of the TIAGo robot by PAL Robotics, designed for robotics competitions. It features a differential-drive base with a max speed of 1m/s, a torso with a 350mm stroke, a 7DoF arm with a 2.8kg payload, a parallel gripper, a 2DoF pan-tilt head, and a laptop tray with a 5kg payload. The robot stands 110-145cm tall, has a base footprint of 54cm, and weighs 72kg.',
          hardware: [
            'Azure Kinect Camera',
            'Realsense Camera',
            'Rode Mic',
            'Ouster OS1',
            '2xHokuyo Laser',
            'Jetson Xavier NX',
            'TP-Link Switch'
          ]
        },
        {
          id: 2,
          name: 'MBot',
          avatar: 'robots/mbot.jpg',
          photo: 'robots/mbot.jpg',
          date: 'TODO',
          description: 'The MBot is composed of two main parts: body and head. The head can pan and has LED backlight to express emotions through a drawn mouth, eyes and checks. The body has all of the CPU devices (two motherboards with i7 processors), a touchscreen and all of the navigation mechanics, based on a Four-Wheel Omnidirectional Mecanum drive.',
          hardware: [
            'Cyton 1500 Robai Arm with 7 DoF',
            'Rode Mic',
            'Touchscreen'
          ]
        },
        {
          id: 3,
          name: 'ISR-CoBot',
          avatar: 'robots/isr-cobot2.png',
          photo: 'robots/isr-cobot2.png',
          date: 'TODO',
          description: 'ISR-CoBot was an experimental platform for research in Human-Robot Interaction (HRI). A service robot for office environments, it was designed to perform tasks for users. The research was targeted towards a robust platform capable of navigating in crowded environments, to create robots that were aware of their own limitations and are thus capable to autonomously asking humans for help. The platform resulted from an ongoing collaboration with the CoBot project at Carnegie Mellon University, based on a customized Nomadic Scout differential drive platform.',
          hardware: [
            'Touchscreen on a laptop for HRI ',
            'Hokuyo UTM-30LX',
            'Kinect RGB-D',
            'IP PTZ camera',
            'Rode Mic'
          ]
        },
      ]);
  
      const selectedRobotId = ref<number | null>(null);
  
      const openModal = (robotId: number) => {
        selectedRobotId.value = robotId;
      };
  
      const closeModal = () => {
        selectedRobotId.value = null;
      };
  
      return {
        robots,
        selectedRobotId,
        openModal,
        closeModal,
      };
    },
  });
  </script>
  
  <style scoped lang="scss" src="@/assets/robots.scss"></style>
  