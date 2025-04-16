<template>
  <div class="mt-12 md:mt-20 px-4 md:px-10 lg:px-20">
    <!-- Video Section -->
    <div class="mb-12 aspect-w-16 aspect-h-9">
      <iframe
        width="100%"
        height="450"
        :src="videoSource"
        title="Rescue Bonus Video"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        class="rounded-xl shadow-xl"
      ></iframe>
    </div>

    <!-- Main Banner -->
    <div class="mb-12 rounded-xl overflow-hidden shadow-lg">
      <img
        src="@/assets/rescueBonus/rescue_bonus.avif"
        alt="Rescue Bonus Banner"
        class="w-full h-auto"
      />
    </div>

    <!-- Claim Bonus Section -->
    <div class="bg-white rounded-xl shadow-md overflow-hidden p-6 md:p-8 mb-12">
      <div class="text-center mb-8">
        <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">CLAIM YOUR RESCUE BONUS</h1>
        <p class="text-lg text-gray-700 max-w-3xl mx-auto">
          Get up to RM50,000 Rescue Bonus depending on your betting turnover. The more you play, the
          bigger your bonus!
        </p>
      </div>

      <div class="flex justify-center mb-10">
        <button
          class="px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-lg font-bold text-lg transition-colors duration-200 shadow-md"
        >
          CLAIM RESCUE BONUS NOW
        </button>
      </div>

      <!-- Bonus Example Image -->
      <div class="mb-12">
        <img
          src="@/assets/rescueBonus/Rescue_bonus-01.avif"
          alt="Bonus Example"
          class="w-full max-w-3xl mx-auto rounded-lg shadow-md"
        />
      </div>
    </div>

    <!-- Turnover Table Section -->
    <div class="bg-white rounded-xl shadow-md overflow-hidden p-6 md:p-8 mb-12">
      <h2 class="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">TURNOVER TABLE</h2>

      <div class="overflow-x-auto">
        <table class="w-full border-collapse">
          <thead>
            <tr class="bg-gray-100">
              <th class="p-4 text-left">No.</th>
              <th class="p-4 text-left">Username</th>
              <th class="p-4 text-left">Turnover</th>
              <th class="p-4 text-left">Bonus Claimed</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(record, index) in displayedRecords"
              :key="index"
              :class="index % 2 === 0 ? 'bg-white' : 'bg-gray-50'"
            >
              <td class="p-4 border-b border-gray-200">{{ index + 1 }}</td>
              <td class="p-4 border-b border-gray-200">{{ record.username }}</td>
              <td class="p-4 border-b border-gray-200">RM{{ record.turnover.toLocaleString() }}</td>
              <td class="p-4 border-b border-gray-200">RM{{ record.bonus.toLocaleString() }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="flex justify-center mt-6">
        <button
          @click="shuffleRecords"
          class="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-200"
        >
          SHOW DIFFERENT RECORDS
        </button>
      </div>
    </div>

    <!-- How It Works Section -->
    <div class="bg-white rounded-xl shadow-md overflow-hidden p-6 md:p-8 mb-12">
      <h2 class="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">HOW IT WORKS</h2>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div class="bg-gray-50 p-6 rounded-lg">
          <div class="text-4xl font-bold text-red-600 mb-4">1</div>
          <h3 class="text-xl font-semibold mb-3">Play Games</h3>
          <p class="text-gray-700">Play your favorite casino games and accumulate turnover</p>
        </div>
        <div class="bg-gray-50 p-6 rounded-lg">
          <div class="text-4xl font-bold text-red-600 mb-4">2</div>
          <h3 class="text-xl font-semibold mb-3">Check Turnover</h3>
          <p class="text-gray-700">Monitor your monthly turnover in your account</p>
        </div>
        <div class="bg-gray-50 p-6 rounded-lg">
          <div class="text-4xl font-bold text-red-600 mb-4">3</div>
          <h3 class="text-xl font-semibold mb-3">Claim Bonus</h3>
          <p class="text-gray-700">
            Receive your Rescue Bonus automatically based on your turnover
          </p>
        </div>
      </div>

      <div class="flex justify-center">
        <img
          src="@/assets/rescueBonus/Rescue_bonus-02.avif"
          alt="How It Works"
          class="w-full max-w-2xl rounded-lg shadow-md"
        />
      </div>
    </div>

    <!-- Rules Section -->
    <div class="bg-white rounded-xl shadow-md overflow-hidden p-6 md:p-8">
      <h2 class="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">RULES</h2>

      <ul class="space-y-4 max-w-3xl mx-auto">
        <li class="flex items-start gap-3">
          <span
            class="bg-red-100 text-red-800 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold mt-1"
            >1</span
          >
          <span class="text-gray-700 text-lg"
            >Rescue Bonus will be calculated based on your monthly turnover</span
          >
        </li>
        <li class="flex items-start gap-3">
          <span
            class="bg-red-100 text-red-800 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold mt-1"
            >2</span
          >
          <span class="text-gray-700 text-lg">Turnover of 7th/17th/27th will be counted 1.5x</span>
        </li>
        <li class="flex items-start gap-3">
          <span
            class="bg-red-100 text-red-800 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold mt-1"
            >3</span
          >
          <span class="text-gray-700 text-lg">Minimum turnover of RM10,000 to qualify</span>
        </li>
        <li class="flex items-start gap-3">
          <span
            class="bg-red-100 text-red-800 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold mt-1"
            >4</span
          >
          <span class="text-gray-700 text-lg"
            >Bonus will be credited automatically before 12 AM</span
          >
        </li>
        <li class="flex items-start gap-3">
          <span
            class="bg-red-100 text-red-800 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold mt-1"
            >5</span
          >
          <span class="text-gray-700 text-lg">Only available for Slots games in Winbox</span>
        </li>
      </ul>

      <div class="flex justify-center mt-10">
        <button
          class="px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-lg font-bold text-lg transition-colors duration-200 shadow-md"
        >
          JOIN NOW TO CLAIM BONUS
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const videoSource = 'https://www.youtube.com/embed/xkNTnDdLP-g?list=TLGGIrrlNS60nc0xNjA0MjAyNQ'

// Sample data for turnover records
const allRecords = ref([
  { username: 'Player***23', turnover: 125430, bonus: 12543 },
  { username: 'Winbox***88', turnover: 98760, bonus: 9876 },
  { username: 'Lucky***77', turnover: 85620, bonus: 8562 },
  { username: 'Slot***99', turnover: 74210, bonus: 7421 },
  { username: 'Jackpot***55', turnover: 65320, bonus: 6532 },
  { username: 'Diamond***12', turnover: 58970, bonus: 5897 },
  { username: 'Gold***33', turnover: 47890, bonus: 4789 },
  { username: 'Silver***44', turnover: 36540, bonus: 3654 },
  { username: 'Bronze***66', turnover: 28760, bonus: 2876 },
  { username: 'Platinum***11', turnover: 19870, bonus: 1987 },
  { username: 'VIP***22', turnover: 15430, bonus: 1543 },
  { username: 'Newbie***09', turnover: 12340, bonus: 1234 },
])

const displayedRecords = ref([])

// Function to shuffle and display random records
const shuffleRecords = () => {
  // Shuffle array
  const shuffled = [...allRecords.value].sort(() => 0.5 - Math.random())
  // Get 5 random records
  displayedRecords.value = shuffled.slice(0, 5)
}

// Initialize with random records
onMounted(() => {
  shuffleRecords()

  // Auto shuffle every 5 seconds
  setInterval(shuffleRecords, 5000)
})
</script>

<style>
/* Custom styles if needed */
</style>
