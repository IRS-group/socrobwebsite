<template>
    <header class="header" id="header">
      <nav class="nav container">
        <span class="nav__logo">SocRob@Home</span>
        <div :class="['nav__menu', { 'show-menu': activeMenu }]" id="nav-menu">
          <ul class="nav__list grid">
            <li class="nav__item" v-for="(item, index) in navItems" :key="index">
              <a
                :href="item.link"
                class="nav__link"
                :class="{ 'active-link': isActiveLink(item.link) }"
                @click="closeMenu"
              >
                <v-icon class="nav__icon">{{ item.icon }}</v-icon> {{ item.label }}
              </a>
            </li>
            <v-icon class="mdi-close nav__close" @click="closeMenu"></v-icon>
          </ul>
        </div>
  
        <div class="nav__btns">
          <v-icon class="change-theme" @click="toggleDarkTheme" id="theme-button">
            {{ themeIcon }}
          </v-icon>
          <div class="nav__toggle" @click="openMenu">
            <v-icon>mdi-menu</v-icon>
          </div>
        </div>
      </nav>
    </header>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import '@/assets/header.scss'
  
  const activeMenu = ref(false)
  const themeIcon = ref('mdi-home-account')
  const navItems = [
    { label: 'Home', link: '#home', icon: 'mdi-home-account' },
    { label: 'About', link: '#about', icon: 'mdi-account' },
    { label: 'Competitions', link: '#competitions', icon: 'mdi-brain' },
    { label: 'Roster', link: '#roster', icon: 'mdi-robot' },
    { label: 'Robots', link: '#robots', icon: 'mdi-cog' },
    { label: 'Publications', link: '#publications', icon: 'mdi-book-open' },
  ]
  
  // Toggles the menu visibility
  const openMenu = () => (activeMenu.value = true)
  const closeMenu = () => (activeMenu.value = false)
  
  // Handles theme switching
  const toggleDarkTheme = () => {
    const darkTheme = 'dark-theme'
    const iconTheme = 'mdi-white-balance-sunny'
    document.body.classList.toggle(darkTheme)
    themeIcon.value = document.body.classList.contains(darkTheme) ? iconTheme : 'mdi-moon-waxing-crescent'
    localStorage.setItem('selected-theme', document.body.classList.contains(darkTheme) ? 'dark' : 'light')
    localStorage.setItem('selected-icon', themeIcon.value)
    updateFavicon()
  }
  
  // Determines the active link based on scroll position
  const isActiveLink = (link) => {
    if (process.client) {
        return window.location.hash === link
    }
    return false
    }
    
// Updates favicon based on theme
const updateFavicon = () => {
  const favicon = document.getElementById('favicon') as HTMLLinkElement;
  console.log("Updating favicon...");
  console.log(favicon); // Debugging statement
  if (favicon) {
    favicon.href = document.body.classList.contains('dark-theme')
      ? '/public/socrobfavicon.ico'  // Use root-relative path
      : '/public/socrobfavicon.ico';  // Use root-relative path
  } else {
    console.error("Favicon element not found.");
  }
}
  
  // Adds scroll listeners for dynamic header styling
  onMounted(() => {
    const selectedTheme = localStorage.getItem('selected-theme')
    const selectedIcon = localStorage.getItem('selected-icon')
    const darkTheme = 'dark-theme'
  
    if (selectedTheme) {
      document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
      themeIcon.value = selectedIcon || 'mdi-moon-waxing-crescent'
      updateFavicon()
    }
  
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY
      const header = document.getElementById('header')
      if (scrollY >= 80) {
        header.classList.add('scroll-header')
      } else {
        header.classList.remove('scroll-header')
      }
  
      document.querySelectorAll('section[id]').forEach((section) => {
        const sectionTop = section.offsetTop - 50
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute('id')
        const link = document.querySelector(`.nav__menu a[href*="${sectionId}"]`)
  
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          link.classList.add('active-link')
        } else {
          link.classList.remove('active-link')
        }
      })
    })
  })
  </script>
  
  <style scoped lang="scss" src="@/assets/header.scss"></style>
  