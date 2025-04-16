<template>
  <div class="bg-gray-900 text-white py-12 px-4">
    <div class="max-w-6xl mx-auto">
      <!-- Logo -->
      <div class="mb-8">
        <h1 class="text-3xl font-bold text-yellow-400">SLOTOMANIA</h1>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- ABOUT Section -->
        <div>
          <h2 class="text-xl font-semibold mb-4 text-yellow-400">ABOUT</h2>
          <ul class="space-y-2">
            <li><a href="#" class="hover:text-yellow-300">FREE COINS</a></li>
            <li><a href="#" class="hover:text-yellow-300">VIP</a></li>
            <li><a href="#" class="hover:text-yellow-300">CUSTOMER SUPPORT</a></li>
            <li><a href="#" class="hover:text-yellow-300">SHOP</a></li>
          </ul>
        </div>

        <!-- FOLLOW US ON Section -->
        <div>
          <h2 class="text-xl font-semibold mb-4 text-yellow-400">FOLLOW US ON</h2>
          <ul class="space-y-2">
            <li><a href="#" class="hover:text-yellow-300">SING</a></li>
            <li><a href="#" class="hover:text-yellow-300">Name Share</a></li>
            <li><a href="#" class="hover:text-yellow-300">App Store</a></li>
            <li><a href="#" class="hover:text-yellow-300">Google Play</a></li>
          </ul>
        </div>

        <!-- COOKIE SETTINGS Section -->
        <div>
          <h2 class="text-xl font-semibold mb-4 text-yellow-400">COOKIE SETTINGS</h2>
          <ul class="space-y-2">
            <li><a href="#" class="hover:text-yellow-300">TERMS OF SERVICE</a></li>
            <li><a href="#" class="hover:text-yellow-300">PRIVACY NOTICE</a></li>
            <li><a href="#" class="hover:text-yellow-300">POKES</a></li>
            <li><a href="#" class="hover:text-yellow-300">RESPONSIBLE GAMING</a></li>
            <li><a href="#" class="hover:text-yellow-300">EU DSA</a></li>
          </ul>
        </div>

        <!-- Legal Text -->
        <div class="md:col-span-1 lg:col-span-1">
          <p class="text-xs text-gray-400">
            SLOTOMANIA IS INTENDED FOR THOSE 21 AND OLDER FOR AMUSEMENT PURPOSES ONLY AND DOES NOT
            OFFER 'REAL MONEY' GAMBLING, OR AN OPPORTUNITY TO WIN REAL MONEY OR REAL PRIZES BASED ON
            GAME PLAY. PLAYING OR SUCCESS IN THIS GAME DOES NOT IMPLY FUTURE SUCCESS AT 'REAL MONEY'
            GAMBLING.
          </p>
          <p class="text-xs text-gray-400 mt-4">
            SLOTOMANIA DOES NOT REQUIRE PAYMENT TO ACCESS AND PLAY, BUT IT ALSO ALLOWS YOU TO
            PURCHASE VIRTUAL ITEMS WITH REAL MONEY. SLOTOMANIA MAY ALSO CONTAIN ADVERTISING. YOU MAY
            REQUIRE AN INTERNET CONNECTION TO PLAY SLOTOMANIA AND ACCESS ITS SOCIAL FEATURES.
          </p>
          <p class="text-xs text-gray-400 mt-4">
            BY ACCESSING AND PLAYING THIS GAME, YOU AGREE TO FUTURE GAME UPDATES AS RELEASED ON THIS
            WEBSITE. YOU MAY CHOOSE TO UPDATE THIS GAME, BUT IF YOU DO NOT UPDATE, YOUR GAME
            EXPERIENCE AND FUNCTIONALITIES MAY BE REDUCED.
          </p>
        </div>
      </div>

      <!-- Copyright -->
      <div class="border-t border-gray-700 mt-8 pt-8">
        <p class="text-xs text-gray-500 text-center">© 2023 SLOTOMANIA. ALL RIGHTS RESERVED.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      scrollPosition: 0,
      mobile: false, // hardcoded for testing
      mobileNav: false,
    }
  },
}
</script>

<style scoped>
/* Additional custom styles if needed */
</style>
