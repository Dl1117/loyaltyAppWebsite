<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import {
  YoutubeIcon,
  InstagramIcon,
  FacebookIcon,
  BurgerDropdownIcon,
  ExtrabonusLogo,
} from '@/assets/icons'
import WbLogo from '@/assets/icons/wbLogo/WbLogo.png'
import PlayNowButton from '@/assets/icons/playNowButton/PlayNowButton.png'

// Reactive state
const scrollPosition = ref(0)
const mobile = ref(false)
const mobileNav = ref(false)

const navItems = [
  { label: 'Home', route: 'home' },
  { label: 'About', route: '' },
  { label: 'Promotion', route: 'promotion' },
  { label: 'Register', route: 'register' },
  { label: 'Login', route: 'login' },
]

const socialMedia = [
  { label: 'Youtube', icon: YoutubeIcon, route: '' },
  { label: 'Facebook', icon: FacebookIcon, route: '' },
  { label: 'Instagram', icon: InstagramIcon, route: '' },
]

// Methods
const toggleMobileNav = () => {
  mobileNav.value = !mobileNav.value
}

const handleScroll = () => {
  scrollPosition.value = window.scrollY
}

const checkMobile = () => {
  mobile.value = window.innerWidth < 768
}

// Lifecycle hooks
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  window.addEventListener('resize', checkMobile)
  checkMobile() // Initialize mobile state
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('resize', checkMobile)
})
</script>

<template>
  <div
    :class="[
      'w-full fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out',
      { 'bg-custom-blue-11 shadow-md': scrollPosition > 0 },
      { 'bg-gradient-to-b from-black/50 to-transparent': scrollPosition === 0 },
    ]"
  >
    <!-- Desktop Navigation -->
    <div v-if="!mobile" class="w-full flex justify-between items-center py-4 px-32">
      <img :src="WbLogo" alt="logo" class="h-12" />

      <!-- Navigation Links -->
      <ul class="flex flex-grow items-center justify-evenly font-medium text-lg neuron">
        <li v-for="item in navItems" :key="item.label">
          <router-link
            :to="{ name: item.route }"
            class="text-white border-b border-transparent hover:border-blue-400 hover:text-blue-400 transition-all duration-300 py-2 px-1"
          >
            {{ item.label }}
          </router-link>
        </li>
      </ul>

      <img :src="PlayNowButton" alt="logo" class="h-12" />
    </div>

    <!-- Mobile Navigation -->
    <div
      v-else
      :class="['w-full py-4 transition-all duration-300', { 'bg-custom-blue-11 ': mobileNav }]"
    >
      <!-- Mobile Header with Logo and Burger -->
      <div class="flex items-center justify-between w-full px-4">
        <!-- Logo (Mobile) -->
        <div class="flex justify-center w-full">
          <img :src="WbLogo" alt="logo" class="h-10" />
        </div>

        <!-- Burger Menu Button -->
        <button
          @click="toggleMobileNav"
          class="text-white text-xl transition-transform duration-500 absolute right-4"
          :class="{ 'rotate-180': mobileNav }"
        >
          <img :src="BurgerDropdownIcon" alt="menu" class="w-6 h-6" />
        </button>
      </div>

      <!-- Mobile Dropdown Nav -->
      <transition name="fade">
        <ul
          v-show="mobileNav"
          class="bg-custom-blue-11 bg-opacity-90 text-white px-[5%] py-4 space-y-4 font-medium uppercase neuron"
        >
          <li v-for="item in navItems" :key="'m-' + item.label">
            <router-link
              :to="{ name: item.route }"
              class="block text-lg text-center hover:text-blue-400"
            >
              {{ item.label }}
            </router-link>
          </li>

          <!-- Social Media Icons (Mobile) -->
          <!-- <li class="pt-4">
            <div class="flex items-center gap-6">
              <div v-for="item in socialMedia" :key="'m-' + item.label">
                <img :src="item.icon" :alt="item.label" class="w-6 h-6" />
              </div>
            </div>
          </li> -->
        </ul>
      </transition>
    </div>
  </div>
</template>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
