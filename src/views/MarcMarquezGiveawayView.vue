<template>
  <div class="mt-12 md:mt-20 px-4 md:px-10 lg:px-20">
    <!-- Main Banner -->
    <div class="mb-10 rounded-xl overflow-hidden shadow-lg">
      <img
        src="@/assets/promotionBanner/wb_telegram_banner_[V2]-04-04.avif"
        alt="Marc Márquez Giveaway Banner"
        class="w-full h-auto object-cover"
      />
    </div>

    <!-- Main Content -->
    <div class="max-w-6xl mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6 md:p-8 mb-12">
      <!-- Title Section -->
      <div class="text-center mb-10">
        <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Join Telegram for Free Prizes
        </h1>
        <p class="text-lg text-gray-700 max-w-3xl mx-auto">
          Get ready for the MM93 Giveaway, where you'll have the chance to win incredible prizes,
          including exclusive Marc Márquez memorable items, high-end electronics, and more! Follow
          us and Join our Telegram group for more details!
        </p>
      </div>

      <!-- Action Buttons -->
      <div class="flex flex-col sm:flex-row justify-center gap-4 mb-12">
        <button
          class="px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-lg font-bold text-lg transition-colors duration-200 shadow-md"
        >
          GET PRIZES NOW!
        </button>
        <button
          class="px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-bold text-lg transition-colors duration-200 shadow-md"
        >
          JOIN TELEGRAM!
        </button>
      </div>

      <!-- Divider -->
      <div class="border-t-2 border-gray-200 my-12"></div>

      <!-- Why Join Section -->
      <div class="mb-16">
        <h2 class="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-10">Why Join?</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          <img
            src="@/assets/marcMarquez/why_join_01_copy.avif"
            alt="Reason 1"
            class="w-full rounded-lg shadow-md"
          />
          <img
            src="@/assets/marcMarquez/why_join_02_copy.avif"
            alt="Reason 2"
            class="w-full rounded-lg shadow-md"
          />
          <img
            src="@/assets/marcMarquez/why_join_03_copy.avif"
            alt="Reason 3"
            class="w-full rounded-lg shadow-md"
          />
          <img
            src="@/assets/marcMarquez/why_join_04_copy.avif"
            alt="Reason 4"
            class="w-full rounded-lg shadow-md"
          />
          <img
            src="@/assets/marcMarquez/why_join_05_copy.avif"
            alt="Reason 5"
            class="w-full rounded-lg shadow-md"
          />
        </div>
      </div>

      <!-- Rules Section -->
      <div class="mb-16">
        <h2 class="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">RULES:</h2>
        <ul class="space-y-4 max-w-3xl mx-auto">
          <li class="flex items-start gap-3">
            <span
              class="bg-red-100 text-red-800 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold"
              >1</span
            >
            <span class="text-gray-700 text-lg"
              >Fill out the google form
              <a href="https://forms.gle/Y22JgJ8x11KCyKsg7" class="text-blue-600 hover:underline"
                >https://forms.gle/Y22JgJ8x11KCyKsg7</a
              ></span
            >
          </li>
          <li class="flex items-start gap-3">
            <span
              class="bg-red-100 text-red-800 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold"
              >2</span
            >
            <span class="text-gray-700 text-lg"
              >More members = Bigger rewards! Invite your friends to win more!</span
            >
          </li>
          <li class="flex items-start gap-3">
            <span
              class="bg-red-100 text-red-800 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold"
              >3</span
            >
            <span class="text-gray-700 text-lg"
              >Winners will be chosen randomly through lucky draw.</span
            >
          </li>
          <li class="flex items-start gap-3">
            <span
              class="bg-red-100 text-red-800 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold"
              >4</span
            >
            <span class="text-gray-700 text-lg">Scan the QR code on the banner to join now!</span>
          </li>
        </ul>
      </div>

      <!-- Action Buttons -->
      <div class="flex flex-col sm:flex-row justify-center gap-4 mb-16">
        <button
          class="px-8 py-4 bg-green-600 hover:bg-green-700 text-white rounded-lg font-bold text-lg transition-colors duration-200 shadow-md"
        >
          FILL OUT FORM!
        </button>
        <button
          class="px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-bold text-lg transition-colors duration-200 shadow-md"
        >
          JOIN TELEGRAM!
        </button>
      </div>

      <!-- QR Code Section -->
      <div class="flex justify-center">
        <img
          src="@/assets/marcMarquez/Just_One_Scan.avif"
          alt="Scan QR Code"
          class="w-full max-w-md rounded-lg shadow-lg"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
// Script setup if needed
</script>
