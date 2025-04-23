<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import WbLogo from '@/assets/icons/wbLogo/WbLogo.png'
import WbLogo1 from '@/assets/icons/wbLogo/WbLogo1.png'
import Facebook from '@/assets/icons/socialMedia/facebook.png'
import Instagram from '@/assets/icons/socialMedia/instagram.png'
import Whatsapp from '@/assets/icons/socialMedia/whatsapp.png'
import footerCertification from '@/assets/icons/footerIcon/footerCertification.png'
import footerLicense from '@/assets/icons/footerIcon/footerLicense.png'
import footerPayment from '@/assets/icons/footerIcon/footerPayment.png'
import footerSecurity from '@/assets/icons/footerIcon/footerSecurity.png'

// Reactive state for mobile detection
const mobile = ref(false)

// Footer links similar to the image
const footerLinks = [
  { label: 'COOKIE SETTINGS', route: '' },
  { label: 'TERMS OF SERVICE', route: '' },
  { label: 'PRIVACY NOTICE', route: '' },
  { label: 'POKIES', route: '' },
  { label: 'RESPONSIBLE GAMING', route: '' },
]

// Social media links
const socialMediaLinks = [
  { label: 'Facebook', icon: Facebook, route: '' },
  { label: 'Instagram', icon: Instagram, route: '' },
  { label: 'Whatsapp', icon: Whatsapp, route: '' },
]

// Check if mobile
const checkMobile = () => {
  mobile.value = window.innerWidth < 768
}

// Lifecycle hooks
onMounted(() => {
  window.addEventListener('resize', checkMobile)
  checkMobile() // Initialize mobile state
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', checkMobile)
})
</script>

<template>
  <!-- Desktop Footer -->
  <div
    v-if="!mobile"
    class="bg-gradient-to-t from-blue-900 via-blue-500 to-blue-300 text-white py-12 px-32 flex flex-col gap-10"
  >
    <div class="grid grid-cols-3 items-center px-10">
      <!-- Column 1: Logo -->
      <div class="flex justify-start">
        <img :src="WbLogo1" alt="logo" class="h-12" />
      </div>

      <!-- Column 2: Social Media Icons -->
      <div class="flex justify-center gap-2">
        <img :src="Whatsapp" alt="whatsapp" class="w-8 h-8" />
        <img :src="Instagram" alt="instagram" class="w-8 h-8" />
        <img :src="Facebook" alt="facebook" class="w-8 h-8" />
      </div>

      <!-- Column 3: Security -->
      <div class="flex flex-col gap-2 afacad items-end">
        <span>Security</span>
        <img :src="footerSecurity" alt="footerSecurity" class="h-8" />
      </div>
    </div>

    <div class="grid grid-cols-3 items-center border-t border-white afacad pt-8 px-10">
      <!-- Column 1: License -->
      <div class="flex flex-col gap-2 items-start">
        <span>License</span>
        <img :src="footerLicense" alt="footerLicense" class="h-8" />
      </div>

      <!-- Column 2: Certification -->
      <div class="flex flex-col gap-2 items-center">
        <span>Certification</span>
        <img :src="footerCertification" alt="footerCertification" class="h-14" />
      </div>

      <!-- Column 3: Supported Bank Payment -->
      <div class="flex flex-col gap-2 items-end">
        <span>Supported Bank Payment</span>
        <img :src="footerPayment" alt="footerPayment" class="h-14" />
      </div>
    </div>

    <div class="border-t border-white afacad">
      <p class="text-lg text-center pt-4">© 2025 by Winbox88.one All Rights Reserved.</p>
    </div>
  </div>

  <!-- Mobile Footer -->
  <div v-else class="bg-custom-blue-11 text-white flex flex-col">
    <!-- Logo Section -->
    <div class="flex justify-center py-6">
      <img :src="WbLogo" alt="logo" class="h-12" />
    </div>

    <!-- Footer Links -->
    <div class="flex flex-col items-center gap-4 py-4">
      <router-link
        v-for="link in footerLinks"
        :key="link.label"
        :to="{ name: link.route }"
        class="text-white text-sm font-medium hover:text-blue-300"
      >
        {{ link.label }}
      </router-link>
    </div>

    <!-- Follow Us Section -->
    <div class="flex flex-col items-center py-6 border-t border-purple-800 mt-4">
      <p class="text-sm mb-4">FOLLOW US ON</p>
      <div class="flex gap-6">
        <a
          v-for="social in socialMediaLinks"
          :key="social.label"
          href="#"
          class="w-8 h-8 rounded-full flex items-center justify-center"
        >
          <img :src="social.icon" :alt="social.label" class="w-8 h-8" />
        </a>
      </div>
    </div>

    <!-- Copyright -->
    <div class="py-4 text-center text-xs">
      <p>© 2025 by Winbox88.one All Rights Reserved.</p>
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
