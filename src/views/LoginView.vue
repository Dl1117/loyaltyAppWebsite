<script setup>
import { ref, onMounted } from 'vue'

const iframeLoaded = ref(false)
const isLoading = ref(true)

const handleIframeLoad = () => {
  iframeLoaded.value = true
  isLoading.value = false
}

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false
  }, 5000)
})
</script>

<template>
  <div class="overflow-hidden mt-20">
    <!-- Loading overlay -->
    <div v-if="isLoading" class="inset-0 bg-white z-50 flex flex-col items-center justify-center">
      <div class="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-600"></div>
      <p class="mt-4 text-gray-600">Loading content...</p>
    </div>

    <div
      v-show="!isLoading"
      class="w-full h-[720px] md:rounded-xl shadow-xl overflow-hidden md:border"
    >
      <iframe
        src="https://h5.wbwin01.com/#/login"
        class="w-full h-full border-0"
        @load="handleIframeLoad"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        scrolling="no"
        sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
</template>

<style>
/* Ensure no scrollbars appear */
</style>
