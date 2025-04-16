<template>
  <div
    :class="[
      'w-full fixed top-0 left-0 right-0 transition-all duration-300 ease-in-out',
      { 'bg-black shadow-md': scrollPosition > 0 },
    ]"
    class="z-50"
  >
    <div class="w-full flex justify-between items-center py-4">
      <!-- Desktop: Nav + Logo inline from left to right -->
      <div v-show="!mobile" class="hidden md:flex items-center gap-6 ml-20 mr-0">
        <!-- Navigation Links -->
        <ul class="flex items-center gap-6 font-medium text-sm">
          <li v-for="item in navItems" :key="item.label">
            <router-link
              :to="{ name: item.route }"
              class="text-white border-b border-transparent hover:border-blue-400 hover:text-blue-400 transition-all duration-300 py-2 px-1"
            >
              {{ item.label }}
            </router-link>
          </li>
        </ul>
      </div>
      <!-- Logo appears after nav -->
      <div class="absolute left-1/2 transform -translate-x-1/2 mt-5">
        <img :src="ExtrabonusLogo" alt="logo" class="h-6 md:h-12 transition-all duration-300" />
      </div>
      <div v-show="!mobile" class="flex items-center gap-6 mr-20">
        <div v-for="item in socialMedia" :key="item.label">
          <img :src="item.icon" :alt="item.label" class="w-6 h-6" />
        </div>
      </div>

      <!-- Mobile: Burger Icon -->
      <div class="md:hidden flex items-center justify-between w-full px-4">
        <button
          @click="toggleMobileNav"
          class="text-white text-xl transition-transform duration-500"
          :class="{ 'rotate-180': mobileNav }"
        >
          <img :src="BurgerDropdownIcon" alt="menu" class="w-6 h-6" />
        </button>
      </div>
    </div>

    <!-- Mobile Dropdown Nav -->
    <transition name="fade">
      <ul
        v-show="mobileNav"
        class="md:hidden bg-black bg-opacity-90 text-white px-[5%] py-4 space-y-3 font-medium uppercase"
      >
        <li v-for="item in navItems" :key="'m-' + item.label">
          <router-link :to="{ name: item.route }" class="block text-sm hover:text-blue-400">
            {{ item.label }}
          </router-link>
        </li>
      </ul>
    </transition>
  </div>
</template>

<script>
import {
  YoutubeIcon,
  InstagramIcon,
  FacebookIcon,
  BurgerDropdownIcon,
  ExtrabonusLogo,
} from '@/assets/icons'

export default {
  name: 'Navigation',
  data() {
    return {
      scrollPosition: 0,
      mobile: false,
      mobileNav: false,
      navItems: [
        { label: 'Home', route: 'home' },
        { label: 'About', route: '' },
        { label: 'Promotion', route: 'promotion' },
        { label: 'Register', route: '' },
        { label: 'Login', route: '' },
      ],
      socialMedia: [
        { label: 'Youtube', icon: YoutubeIcon, route: '' },
        { label: 'Facebook', icon: FacebookIcon, route: '' },
        { label: 'Instagram', icon: InstagramIcon, route: '' },
      ],
      BurgerDropdownIcon: BurgerDropdownIcon,
      ExtrabonusLogo: ExtrabonusLogo,
    }
  },
  methods: {
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav
    },
    handleScroll() {
      this.scrollPosition = window.scrollY
    },
    checkMobile() {
      this.mobile = window.innerWidth < 768
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
    window.addEventListener('resize', this.checkMobile)
    this.checkMobile() // Initialize mobile state
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
    window.removeEventListener('resize', this.checkMobile)
  },
}
</script>

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
