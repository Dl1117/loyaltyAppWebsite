<template>
  <div class="mt-20 md:mt-20 pr-40 pl-40">
    <!-- Banner Image -->
    <div>
      <img :src="ClaimAngpauNow" alt="Claim AngPau Now Banner" class="w-full h-auto" />
    </div>

    <!-- Tutorial Section -->
    <div class="mt-10 max-w-screen-lg mx-auto flex gap-10">
      <div class="relative flex-1">
        <!-- Tutorial Images -->
        <div class="flex overflow-x-hidden space-x-6">
          <img
            v-for="(image, index) in tutorialImages"
            :key="index"
            :src="image"
            alt="Tutorial Image"
            class="w-full h-auto flex-shrink-0 rounded-lg transition-all duration-300 ease-in-out"
            :class="{
              'opacity-100 transform scale-100': currentImageIndex === index,
              'opacity-0 transform scale-90': currentImageIndex !== index,
            }"
          />
        </div>

        <!-- Arrows for Navigation -->
        <button
          @click="goToPrevImage"
          class="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black text-white p-2 rounded-full focus:outline-none"
        >
          &lt;
        </button>
        <button
          @click="goToNextImage"
          class="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black text-white p-2 rounded-full focus:outline-none"
        >
          &gt;
        </button>
      </div>

      <!-- Steps to Claim Angpao (On the right) -->
      <div class="flex-1">
        <h1 class="text-2xl font-bold text-center mb-4">How to claim your Angpao?</h1>

        <div v-for="(step, index) in tutorialSteps" :key="index" class="mb-4">
          <h3 class="text-xl font-semibold">Step {{ index + 1 }}:</h3>
          <p>{{ step }}</p>
        </div>

        <div class="flex justify-center gap-4 mt-6">
          <button class="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Android Download
          </button>
          <button class="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600">
            Claim Ang Pao Now
          </button>
        </div>
      </div>
    </div>

    <!-- Download and Claim Buttons -->

    <!-- Additional Section -->
    <div class="mt-20 text-center mb-10">
      <p>Play Now! Claim Rescue Bonus Now!</p>
      <div class="flex justify-center gap-4 mt-6">
        <button class="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          JOIN NOW
        </button>
        <button class="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600">
          Claim Rescue Bonus
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { ClaimAngpauNow } from '@/assets/icons'
import claimAngPauTutorial from '@/assets/howToClaimAngPaoTutorial/TutorialHowToClaimAngPao.webp'
import claimAngPauTutorial2 from '@/assets/howToClaimAngPaoTutorial/TutorialHowToClaimAngPao2.webp'
import claimAngPauTutorial3 from '@/assets/howToClaimAngPaoTutorial/TutorialHowToClaimAngPao3.webp'
import claimAngPauTutorial4 from '@/assets/howToClaimAngPaoTutorial/TutorialHowToClaimAngPao4.webp'

// Array of tutorial images
const tutorialImages = [
  claimAngPauTutorial,
  claimAngPauTutorial2,
  claimAngPauTutorial3,
  claimAngPauTutorial4,
]

// Keep track of the current image index
const currentImageIndex = ref(0)

// Steps to Claim Angpao
const tutorialSteps = [
  'Click Winbox Download from website.',
  'Click on Free Angpau Icon on the right after Winbox Login.',
  'Click on Register free account, Referral UID: WI888OX',
  'Claim Angpau after register Winbox.',
]

// Function to go to the previous image
const goToPrevImage = () => {
  currentImageIndex.value =
    (currentImageIndex.value - 1 + tutorialImages.length) % tutorialImages.length
}

// Function to go to the next image
const goToNextImage = () => {
  currentImageIndex.value = (currentImageIndex.value + 1) % tutorialImages.length
}
</script>

<style scoped>
/* Hide the scrollbar */
.scrollbar-hidden::-webkit-scrollbar {
  display: none;
}

.scrollbar-hidden {
  -ms-overflow-style: none; /* for Internet Explorer */
  scrollbar-width: none; /* for Firefox */
}
</style>
