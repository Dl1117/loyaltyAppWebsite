<script setup>
import { RouterView } from 'vue-router'
import Navigation from './components/Navigation.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="h-full w-full">
    <Navigation />

    <router-view />
    <Footer />
  </div>
</template>
