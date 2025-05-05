<template>
  <section class="robots section" id="robots">
    <h2 class="section__title">Robots</h2>
    <span class="section__subtitle">
      <v-icon class="robots_icon">mdi-robot-outline</v-icon>
    </span>
    <div class="robots__container container grid">
      <!-- Robot Bob -->
      <div :key="1" class="robots__content">
        <div>
          <v-avatar size="100" class="robots__icon3">
            <img src="/robots/oldBobby.jpg" alt="Bob" />
          </v-avatar>
          <h3 class="robots__title">Bob</h3>
          <button
            class="button button--flex button--small button--link robots__button"
            @click="openModal(1)"
          >
            Read More
            <v-icon class="button__icon robots__button-arrow">mdi-arrow-right</v-icon>
          </button>
        </div>
        <div
          class="robots__modal"
          :class="{ 'active-modal': selectedRobotId === 1 }"
          @click.self="closeModal"
        >
          <div class="robots__modal-content">
            <h4 class="robots__modal-title">Bob</h4>
            <p class="robots__modal-date">2021 - Current</p>
            <v-btn icon @click="closeModal" class="robots__modal-close">
              <v-icon>mdi-close</v-icon>
            </v-btn>
            <div class="robots__modal-robots grid">
              <div class="robots__modal-robot">
                <p class="robots__modal-robot-objective">
                  <v-icon class="robots__modal-robot-objective-icon">mdi-robot-outline</v-icon>
                  Description
                </p>
                <p class="robots__modal-robot-objective-text">
                  The SocRob@Home TIAGo robot is a customized version of the TIAGo robot by PAL Robotics, designed for robotics competitions. It features a differential-drive base with a max speed of 1m/s, a torso with a 350mm stroke, a 7DoF arm with a 2.8kg payload, a parallel gripper, a 2DoF pan-tilt head, and a laptop tray with a 5kg payload.
                </p>
              </div>
              <div class="robots__modal-robot">
                <p class="robots__modal-robot-partners">
                  <v-icon class="robots__modal-robot-partners-icon">mdi-cog-outline</v-icon>
                  Hardware
                </p>
                <ul class="robots__modal-robot-partners-list">
                  <li class="robots__modal-robot-partners-list-element">
                    <p class="robots__modal-robot-partners-list-element-text">Azure Kinect Camera</p>
                  </li>
                  <li class="robots__modal-robot-partners-list-element">
                    <p class="robots__modal-robot-partners-list-element-text">Realsense Camera</p>
                  </li>
                  <li class="robots__modal-robot-partners-list-element">
                    <p class="robots__modal-robot-partners-list-element-text">Rode Mic</p>
                  </li>
                  <li class="robots__modal-robot-partners-list-element">
                    <p class="robots__modal-robot-partners-list-element-text">Unitree LiDAR</p>
                  </li>
                  <li class="robots__modal-robot-partners-list-element">
                    <p class="robots__modal-robot-partners-list-element-text">2xHokuyo Laser</p>
                  </li>
                  <li class="robots__modal-robot-partners-list-element">
                    <p class="robots__modal-robot-partners-list-element-text">Jetson Xavier NX</p>
                  </li>
                  <li class="robots__modal-robot-partners-list-element">
                    <p class="robots__modal-robot-partners-list-element-text">ASUS RT-BE88U Router</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Lola (Booster T1) -->
      <div :key="2" class="robots__content">
        <div>
          <v-avatar size="100" class="robots__icon3">
            <img src="/robots/lola.png" alt="Lola" />
          </v-avatar>
          <h3 class="robots__title">Lola</h3>
          <button
            class="button button--flex button--small button--link robots__button"
            @click="openModal(2)"
          >
            Read More
            <v-icon class="button__icon robots__button-arrow">mdi-arrow-right</v-icon>
          </button>
        </div>
        <div
          class="robots__modal"
          :class="{ 'active-modal': selectedRobotId === 2 }"
          @click.self="closeModal"
        >
          <div class="robots__modal-content">
            <h4 class="robots__modal-title">Lola</h4>
            <p class="robots__modal-date">2025 - Current</p>
            <v-btn icon @click="closeModal" class="robots__modal-close">
              <v-icon>mdi-close</v-icon>
            </v-btn>
            <div class="robots__modal-robots grid">
              <div class="robots__modal-robot">
                <p class="robots__modal-robot-objective">
                  <v-icon class="robots__modal-robot-objective-icon">mdi-robot-outline</v-icon>
                  Description
                </p>
                <p class="robots__modal-robot-objective-text">
                  LOLA, also known as Booster T1, is the latest addition to the SocRob@Home team. Designed with flexibility and compactness in mind, LOLA is a lightweight, mobile service robot ideal for indoor domestic environments. She features enhanced onboard computing for AI workloads, a depth camera for perception, and built-in audio for interaction. LOLA supports rapid experimentation and development of high-level robotic behaviors for service-oriented tasks.
                </p>
              </div>
              <div class="robots__modal-robot">
                <p class="robots__modal-robot-partners">
                  <v-icon class="robots__modal-robot-partners-icon">mdi-cog-outline</v-icon>
                  Hardware
                </p>
                <ul class="robots__modal-robot-partners-list">
                  <li class="robots__modal-robot-partners-list-element">
                    <p class="robots__modal-robot-partners-list-element-text">NVIDIA Jetson AGX Orin (64GB)</p>
                  </li>
                  <li class="robots__modal-robot-partners-list-element">
                    <p class="robots__modal-robot-partners-list-element-text">Intel RealSense Camera</p>
                  </li>
                  <li class="robots__modal-robot-partners-list-element">
                    <p class="robots__modal-robot-partners-list-element-text">Directional Microphone & Stereo Speaker</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Robot MBot -->
      <div :key="3" class="robots__content">
        <div>
          <v-avatar size="100" class="robots__icon3">
            <img src="/robots/mbot.png" alt="MBot" />
          </v-avatar>
          <h3 class="robots__title">MBot</h3>
          <button
            class="button button--flex button--small button--link robots__button"
            @click="openModal(3)"
          >
            Read More
            <v-icon class="button__icon robots__button-arrow">mdi-arrow-right</v-icon>
          </button>
        </div>
        <div
          class="robots__modal"
          :class="{ 'active-modal': selectedRobotId === 3 }"
          @click.self="closeModal"
        >
          <div class="robots__modal-content">
            <h4 class="robots__modal-title">MBot</h4>
            <p class="robots__modal-date">2016 - 2022</p>
            <v-btn icon @click="closeModal" class="robots__modal-close">
              <v-icon>mdi-close</v-icon>
            </v-btn>
            <div class="robots__modal-robots grid">
              <div class="robots__modal-robot">
                <p class="robots__modal-robot-objective">
                  <v-icon class="robots__modal-robot-objective-icon">mdi-robot-outline</v-icon>
                  Description
                </p>
                <p class="robots__modal-robot-objective-text">
                  The MBot is composed of two main parts: body and head. The head can pan and has LED backlight to express emotions through a drawn mouth, eyes, and cheeks. The body has all of the CPU devices (two motherboards with i7 processors), a touchscreen, and all of the navigation mechanics, based on a Four-Wheel Omnidirectional Mecanum drive.
                </p>
              </div>
              <div class="robots__modal-robot">
                <p class="robots__modal-robot-partners">
                  <v-icon class="robots__modal-robot-partners-icon">mdi-cog-outline</v-icon>
                  Hardware
                </p>
                <ul class="robots__modal-robot-partners-list">
                  <li class="robots__modal-robot-partners-list-element">
                    <p class="robots__modal-robot-partners-list-element-text">Cyton 1500 Robai Arm with 7 DoF</p>
                  </li>
                  <li class="robots__modal-robot-partners-list-element">
                    <p class="robots__modal-robot-partners-list-element-text">Rode Mic</p>
                  </li>
                  <li class="robots__modal-robot-partners-list-element">
                    <p class="robots__modal-robot-partners-list-element-text">Touchscreen</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Robot ISR-CoBot -->
      <div :key="4" class="robots__content">
        <div>
          <v-avatar size="100" class="robots__icon3">
            <img src="/robots/isr-cobot2.png" alt="ISR-CoBot" />
          </v-avatar>
          <h3 class="robots__title">ISR-CoBot</h3>
          <button
            class="button button--flex button--small button--link robots__button"
            @click="openModal(4)"
          >
            Read More
            <v-icon class="button__icon robots__button-arrow">mdi-arrow-right</v-icon>
          </button>
        </div>
        <div
          class="robots__modal"
          :class="{ 'active-modal': selectedRobotId === 4 }"
          @click.self="closeModal"
        >
          <div class="robots__modal-content">
            <h4 class="robots__modal-title">ISR-CoBot</h4>
            <p class="robots__modal-date">2014</p>
            <v-btn icon @click="closeModal" class="robots__modal-close">
              <v-icon>mdi-close</v-icon>
            </v-btn>
            <div class="robots__modal-robots grid">
              <div class="robots__modal-robot">
                <p class="robots__modal-robot-objective">
                  <v-icon class="robots__modal-robot-objective-icon">mdi-robot-outline</v-icon>
                  Description
                </p>
                <p class="robots__modal-robot-objective-text">
                  ISR-CoBot was an experimental platform for research in Human-Robot Interaction (HRI). A service robot for office environments, it was designed to perform tasks for users. The research targeted a robust platform capable of navigating crowded environments and creating robots aware of their limitations and capable of autonomously asking humans for help.
                </p>
              </div>
              <div class="robots__modal-robot">
                <p class="robots__modal-robot-partners">
                  <v-icon class="robots__modal-robot-partners-icon">mdi-cog-outline</v-icon>
                  Hardware
                </p>
                <ul class="robots__modal-robot-partners-list">
                  <li class="robots__modal-robot-partners-list-element">
                    <p class="robots__modal-robot-partners-list-element-text">Touchscreen on a laptop for HRI</p>
                  </li>
                  <li class="robots__modal-robot-partners-list-element">
                    <p class="robots__modal-robot-partners-list-element-text">Hokuyo UTM-30LX</p>
                  </li>
                  <li class="robots__modal-robot-partners-list-element">
                    <p class="robots__modal-robot-partners-list-element-text">Kinect RGB-D</p>
                  </li>
                  <li class="robots__modal-robot-partners-list-element">
                    <p class="robots__modal-robot-partners-list-element-text">IP PTZ camera</p>
                  </li>
                  <li class="robots__modal-robot-partners-list-element">
                    <p class="robots__modal-robot-partners-list-element-text">Rode Mic</p>
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


<!-- <template>
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
  </template> -->
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  
  export default defineComponent({
    setup() {
      const robots = ref([
        {
          id: 1,
          name: 'Bob',
          avatar: '/robots/oldBobby.jpg',
          photo: '/robots/bobby.jpg',
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
          name: 'Lola',
          avatar: '/robots/lola.png',
          photo: '/robots/lola.png',
          date: '2025 - Current',
          description: 'LOLA, also known as Booster T1, is the latest addition to the SocRob@Home team. Designed with flexibility and compactness in mind, LOLA is a lightweight, mobile service robot ideal for indoor domestic environments. She features enhanced onboard computing for AI workloads, a depth camera for perception, and built-in audio for interaction. LOLA supports rapid experimentation and development of high-level robotic behaviors for service-oriented tasks.',
          hardware: [
            'NVIDIA Jetson AGX Orin (64GB)',
            'Intel RealSense Camera',
            'Directional Microphone & Stereo Speaker',
          ]
        },
        {
          id: 3,
          name: 'MBot',
          avatar: '/robots/mbot.jpg',
          photo: '/robots/mbot.jpg',
          date: 'TODO',
          description: 'The MBot is composed of two main parts: body and head. The head can pan and has LED backlight to express emotions through a drawn mouth, eyes and checks. The body has all of the CPU devices (two motherboards with i7 processors), a touchscreen and all of the navigation mechanics, based on a Four-Wheel Omnidirectional Mecanum drive.',
          hardware: [
            'Cyton 1500 Robai Arm with 7 DoF',
            'Rode Mic',
            'Touchscreen'
          ]
        },
        {
          id: 4,
          name: 'ISR-CoBot',
          avatar: '/robots/isr-cobot2.png',
          photo: '/robots/isr-cobot2.png',
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
  