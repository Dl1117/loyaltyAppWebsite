<template>
  <div class="mt-20 md:mt-20 px-4 md:px-40">
    <!-- YouTube Video Embed -->
    <div class="mb-10 aspect-w-16 aspect-h-9">
      <iframe
        width="100%"
        height="450"
        :src="videoSource"
        title="Lucky 7th Bonus Video"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        class="rounded-lg shadow-lg"
      ></iframe>
    </div>

    <!-- Lucky 7 Bonus Image -->
    <div class="mb-10 flex justify-center">
      <img
        src="@/assets/lucky7bonus/lucky71680x600_(1).avif"
        alt="Lucky 7 Bonus"
        class="w-full max-w-4xl rounded-lg shadow-md"
      />
    </div>
  </div>

  <!-- Bonus Details Section -->
  <div class="mt-10 md:mt-20 px-4 md:px-40">
    <div class="text-center mb-10">
      <h1 class="text-3xl font-bold mb-6">LUCKY 7TH BONUS</h1>
      <button
        class="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
      >
        JOIN NOW
      </button>
    </div>

    <!-- Rules Section -->
    <div class="mb-12 text-center">
      <h4 class="text-2xl font-semibold mb-6">RULES</h4>
      <ul class="list-disc list-inside text-gray-700 space-y-3 max-w-2xl mx-auto text-left">
        <li>Winbox account must register under our website.</li>
        <li>
          Turnover of Rescue Bonus will be counted 1.5x on the 7th/17th/27th (12 PM to next day
          11:59 AM) every month.
        </li>
        <li>
          Contact our customer service to ensure your Winbox account is added to our friend list.
        </li>
        <li>The system will automatically add Rescue Bonus to your Winbox account before 12 AM.</li>
        <li>Only available for Slots games in Winbox.</li>
      </ul>
      <p class="mt-6 text-gray-700">Example:</p>
      <div class="flex justify-center my-6">
        <img
          src="@/assets/lucky7bonus/Rescue_bonus-05.avif"
          alt="Rescue Bonus Example"
          class="w-full max-w-2xl rounded-lg shadow-md"
        />
      </div>
      <div class="text-center mt-8">
        <button
          class="px-8 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors duration-200 font-medium"
        >
          CLAIM RESCUE BONUS
        </button>
      </div>
    </div>
  </div>

  <!-- Contact Section -->
  <div class="mt-16 text-center pb-16">
    <div class="flex justify-center">
      <img
        src="@/assets/lucky7bonus/one_time_contact.avif"
        alt="One Time Contact"
        class="w-full max-w-md rounded-lg shadow-md"
      />
    </div>
    <button
      class="mt-6 px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200 font-medium"
    >
      CONTACT US
    </button>
  </div>
</template>

<script setup>
// Define the video source URL
const videoSource = 'https://www.youtube.com/embed/FubkBYSj_Iw?list=TLGG6k9xqdEVTU8xNjA0MjAyNQ&t=1s'
</script>
