<script setup>
import horseCartoonVideo from '@/assets/video/horse.mp4'

// Import your images directly
import CardImg1 from '@/assets/fourLittleCardsMascot/card-img-1.png'
import CardImg2 from '@/assets/fourLittleCardsMascot/card-img-2.png'
import CardImg3 from '@/assets/fourLittleCardsMascot/card-img-3.png'
import CardImg4 from '@/assets/fourLittleCardsMascot/card-img-4.png'
import Karen from '@/assets/people/karen.jpg'
import Magen from '@/assets/people/magen.jpg'
import Noah from '@/assets/people/noah.jpg'
import Tiger from '@/assets/topFreeSlotGamesOnline/tiger.png'
import Train from '@/assets/topFreeSlotGamesOnline/train.png'
import BackgroundMouseGold from '@/assets/homeBackground/background_desktop.jpg'
import LucyJackpotBackground from '@/assets/homeBackground/lucy_footer.png'
import {
  RouletteTable,
  Jackpot,
  Cloud,
  TwoIphones,
  SlotMachine,
  Trophy,
  Puzzle,
  Gift,
  MoneyBag,
  BlueCloud,
  HalloweenBackground,
  FantasyScene,
  PlayersReviews,
  Astronaut,
  RabbitSkateBoard,
  PokerCow,
  Wukong,
} from '@/assets/icons'
import { ref } from 'vue'
import PlayNowButton from '@/assets/icons/playNowButton/PlayNowButton.png'

const activeIndex = ref(null)

const toggleAnswer = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index
}
const imagesSentences = [
  {
    image: SlotMachine,
    title: 'OVER 170',
    sentence: 'FREE-TO-PLAY SLOTS',
  },
  {
    image: Trophy,
    title: 'WORLD’S #1 FREE',
    sentence: 'SOCIAL SLOT GAME',
  },
  {
    image: Puzzle,
    title: 'BIGGEST ONLINE',
    sentence: 'SLOT COMMUNITY',
  },
  {
    image: Gift,
    title: 'NEW EXCITEMENT',
    sentence: 'EVERY DAY',
  },
  {
    image: MoneyBag,
    title: '1 MILLION COINS',
    sentence: 'WELCOME BONUS',
  },
]

const mascotAndContext = [
  {
    image: Wukong,
    word1: 'OVER',
    word2: 'FANS ON FACEBOOK',
    eyeCatchyWord: '13M',
    button: '',
  },
  {
    image: RabbitSkateBoard,
    word1: '',
    word2: 'MEMBERS IN THE BIGGEST ONLINE SLOT COMMUNITY',
    eyeCatchyWord: '+700k',
    button: '',
  },
  {
    image: PokerCow,
    word1: '',
    word2: 'CHANNELS ON YOUTUBE, FACEBOOK & INSTAGRAM',
    eyeCatchyWord: '3',
    button: '',
  },
  {
    image: Astronaut,
    word1: 'MORE THAN',
    word2: 'OF PLAYERS ARE IN SLOTOCLANS',
    eyeCatchyWord: '60%',
    button: '',
  },
]

const humanReview = [
  {
    image: Karen,
    name: 'Karen',
    review:
      "Love playing these slots! I wake up in the middle of the night sometimes just to play! This is still my FAVORITE slots game to play. I don't think they make 'em as good as Slotomania!!!!!!😘🥰😍💋",
  },
  {
    image: Magen,
    name: 'Magen',
    review:
      'This game is digital joy. You have been warned lol .It just keeps getting better - usually I get bored with slot games, but not this one, though. Love this game. A lot of fun. ❤ 😍 💖 ❣ Love it.',
  },
  {
    image: Noah,
    name: 'Noah',
    review:
      'This is my favorite game, so much fun, always adding new & exciting things. Love the different album themes. So many awesome games, perks, & bonuses. Really fun & unique game app which I love with cool fb groups that help you trade cards & give help for free!',
  },
]

const topFreeSlotGamesOnline = [
  {
    image: Tiger,
    title: 'Arctic Tiger Jr.',
    context:
      'If you love the Slotomania crowd favorite game Arctic Tiger, you’ll love this cute sequel! This is yet another addition to our Junior Series game selection, along with Mighty Silver Jr. and Silver Lion Jr. Spin an adventure with two new ways to win Free Spins and unlock a new Free Spins Feature!',
  },
  {
    image: Train,
    title: 'Crazy Train',
    context:
      'Hop aboard Slotomania’s ride of riches, the Crazy Train! Add up your Sticky Wild Free Spins by triggering wins with as many Golden Scatters as you can during gameplay. Stop the train to win multipliers to maximize your Coin prize!',
  },
]

const faq = [
  {
    question: 'Can I play slots for free on Slotomania?',
    answer:
      'Absolutely! Slotomania has a huge variety of free slot games for you to spin and enjoy! Whether you’re looking for classic slots or video slots, they are all free to play.',
  },
  {
    question: 'How do I pick a good slot machine?',
    answer:
      'Rest assured that we’re committed to making all of our slot games FUNtastic! They are all unique in their own way so picking the best one for you can be tricky. To better understand each slot machine, click on the “Pay Table” option inside the menu in each slot. Once you’ve found the slot machine you like best, get to spinning and winning!',
  },
  {
    question: 'What is the most popular free slot game in Slotomania?',
    answer:
      'Slotomania has a wide variety of over 170 free slot games, and brand-new releases every other week! Our players have their favorites, you just need to find yours.',
  },
  {
    question: 'Where can I play Slotomania’s free slots?',
    answer:
      'We aim to provide fun & excitement for you to look forward to every day. The beauty of Slotomania is that you can play it anywhere.',
  },
  {
    question: 'Is there a trick to winning slots?',
    answer:
      'As under-whelming as it may sound, Slotomania’s free online slot games use a random number generator – so everything just boils down to luck! Spinning slots is a game of possibilities. However, having a broad knowledge about different free casino slot games and their rules will certainly help you understand your chances better. Just hit the SPIN button and find out the answer to the burning question: What Will Today Spin?',
  },
]
</script>

<template>
  <div class="relative w-full h-[500px] md:h-[600px] overflow-hidden">
    <!-- Background Video -->
    <video
      class="absolute top-0 left-0 w-full h-full object-cover z-0"
      :src="horseCartoonVideo"
      autoplay
      muted
      loop
      playsinline
    ></video>

    <!-- Centered Text Overlay -->
    <div
      class="absolute inset-0 z-10 flex flex-col items-center justify-center text-white text-center px-4"
    >
      <div class="text-2xl md:text-4xl font-bold drop-shadow-lg">PLAY SLOTOMANIA</div>
      <div class="text-lg md:text-2xl mt-2 drop-shadow-md">THE #1 FREE SLOT GAME</div>
      <!-- <button
        class="mt-10 px-8 py-4 text-2xl font-bold rounded-full bg-yellow-400 text-black hover:bg-yellow-500 transition-all border-2 border-black shadow-lg"
      >
        PLAY NOW
      </button> -->
      <img :src="PlayNowButton" alt="logo" class="h-20" />
    </div>
  </div>

  <!-- Cloud Image - positioned between sections -->
  <div class="relative w-full z-20 -mt-[15%] md:-mt-[15%]">
    <img :src="Cloud" alt="Cloud" class="w-full h-auto" />
  </div>

  <div class="flex flex-col md:flex-row items-center gap-6 h-auto md:h-1/3">
    <!-- Top (mobile) / Left (desktop): Image -->
    <div class="w-full md:flex-1">
      <img
        :src="TwoIphones"
        alt="Two Iphones"
        class="w-full h-[300px] md:h-[500px] object-contain ml-5 md:ml-10"
      />
    </div>

    <!-- Bottom (mobile) / Right (desktop): Text -->
    <div class="w-full md:flex-1 text-black text-sm leading-relaxed md:px-6">
      <h1 class="text-2xl md:text-3xl font-bold mb-4">GET EXTRA BONUS NOW !</h1>
      <p>
        Slotomania, the world's #1 free slots game, was developed in 2011 by Playtika®. Slotomania
        offers 170+ free online slot games, various fun features, mini-games, free bonuses, and more
        online or free-to-download apps. Join millions of players and enjoy a fantastic experience
        on the web or any device; from PCs to tablets and cell phones (on Google Play, Apple iPhone
        or iPad App Store, or Facebook Gaming). Get 1 million free Coins as a Welcome Bonus, just
        for downloading the game! Although it may replicate Vegas-style slot machines, there are no
        cash prizes. Slotomania's focus is on exhilarating gameplay and fostering a happy global
        community. Slotomania is a pioneer in the slot industry - with over 11 years of refining the
        game, it is a pioneer in the slot game industry. Many of its competitors have adopted
        similar features and techniques to Slotomania, such as collectibles and group play.
      </p>
    </div>
  </div>

  <div class="mt-20">
    <!-- WHY SLOTOMANIA Title centered at the top of all the images -->
    <div class="mb-8">
      <h2 class="text-2xl md:text-3xl font-bold text-center">WHY EXTRA BONUS?</h2>
    </div>

    <!-- Grid layout for mobile, flex row for desktop -->
    <ul class="grid grid-cols-2 gap-4 md:flex md:flex-row md:justify-center md:gap-10 px-4 md:px-0">
      <li
        v-for="(image, index) in imagesSentences"
        :key="index"
        class="col-span-2 md:col-span-1"
        :class="{
          'col-start-1 md:col-start-auto':
            imagesSentences.length % 2 === 1 && index === imagesSentences.length - 1,
        }"
      >
        <div class="flex flex-col items-center h-full">
          <img
            :src="image.image"
            alt="Slotomania Image"
            class="w-30 h-20 object-contain mb-4 md:-mb-8 mx-auto z-10"
          />

          <div class="bg-gray-100 w-full md:pt-14 pt-6 pb-6 text-center rounded-lg px-4">
            <div>
              <h3 class="font-semibold">{{ image.title }}</h3>
              <h4 class="text-sm mt-2">{{ image.sentence }}</h4>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>

  <!-- Halloween Background Section -->
  <div class="mt-20 w-full relative">
    <div>
      <img :src="HalloweenBackground" alt="Halloween Background" class="w-full" />
    </div>

    <!-- Blue Cloud Transition -->
    <div class="relative w-full z-20 -mt-[15%] md:-mt-[20.5%]">
      <img :src="BlueCloud" alt="Blue Cloud" class="w-full h-auto" />
    </div>
  </div>

  <div class="relative z-0 -mt-1">
    <div class="absolute -z-10">
      <img :src="FantasyScene" alt="3D Fantasy Scene" class="h-46" />
    </div>

    <!-- SLOTOMANIA GOING SOCIAL -->
    <div
      class="flex flex-col md:flex-row items-center justify-between w-full gap-6 md:gap-0 px-4 md:px-20 py-10"
    >
      <div class="w-full md:flex-1 text-center">
        <div class="text-2xl font-bold">SLOTOMANIA GOING SOCIAL</div>
      </div>
      <div class="w-full md:flex-1 text-center">
        <p class="text-sm md:text-base">
          Slotomania is much more than an entertaining game - it is also a community that believes
          that a family that plays together, stays together. With millions of fans on Slotomania's
          official Facebook page & organic group, "SLOTOMANIA SUPERGROUP", Slotomania's online
          community enjoys special announcements of new games, features, and special activities, as
          well as likeminded players to converse and engage with.
        </p>
      </div>
    </div>

    <!-- MASCOT CONTEXT -->
    <div class="mt-20 px-4 md:px-20 pb-20">
      <ul
        class="w-full flex flex-col md:flex-row flex-wrap justify-center md:justify-between gap-4"
      >
        <li
          v-for="(mascotContext, index) in mascotAndContext"
          :key="index"
          class="w-full md:w-[45%] lg:w-[22%] flex flex-col items-center text-center relative"
        >
          <!-- Image on top (index 0, 2) -->
          <div v-if="index === 0 || index === 2" class="w-full flex flex-col items-center relative">
            <img
              :src="mascotContext.image"
              alt="mascot"
              class="w-48 h-48 md:w-56 md:h-56 object-contain mb-[-5rem] z-10 relative"
            />
            <div class="bg-[#009DFF] rounded-xl text-white pt-20 pb-6 px-4 w-[90%] opacity-80">
              <p class="font-semibold text-xl md:text-2xl">{{ mascotContext.word1 }}</p>
              <h3 class="text-3xl md:text-4xl font-bold my-2">{{ mascotContext.eyeCatchyWord }}</h3>
              <p class="text-base md:text-lg">{{ mascotContext.word2 }}</p>
              <button
                class="mt-4 bg-orange-400 hover:bg-orange-500 transition px-4 py-2 rounded-full text-white text-sm font-semibold"
              >
                JOIN NOW
              </button>
            </div>
          </div>

          <!-- Image on bottom (index 1, 3) -->
          <div v-else class="w-full flex flex-col items-center">
            <div
              class="bg-[#009DFF] rounded-xl text-white pt-6 pb-60 px-4 w-[90%] opacity-80 relative z-10"
            >
              <p class="font-semibold text-xl md:text-2xl">{{ mascotContext.word1 }}</p>
              <h3 class="text-3xl md:text-4xl font-bold my-2">{{ mascotContext.eyeCatchyWord }}</h3>
              <p class="text-base md:text-lg">{{ mascotContext.word2 }}</p>
              <button
                class="mt-4 bg-orange-400 hover:bg-orange-500 transition px-4 py-2 rounded-full text-white text-sm font-semibold"
              >
                JOIN NOW
              </button>
            </div>
            <img
              :src="mascotContext.image"
              alt="mascot"
              class="-mt-[225px] w-48 h-48 md:w-80 md:h-80 object-contain relative z-20"
            />
          </div>
        </li>
      </ul>
    </div>

    <!-- Slotomania Players Reviews with custom background that overwrites FantasyScene -->
    <div
      class="mt-40 relative z-0 bg-cover bg-center"
      :style="`background-image: url(${PlayersReviews});`"
    >
      <div class="px-4 md:px-40 pb-20 relative z-10">
        <h2 class="text-2xl font-bold text-center mb-8">SLOTOMANIA PLAYER'S REVIEWS</h2>
        <ul
          class="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scroll-smooth whitespace-nowrap"
        >
          <li
            v-for="(humanReview, index) in humanReview"
            :key="index"
            class="inline-flex flex-col items-center p-4 bg-gray-100 rounded-lg snap-start min-w-[250px] md:min-w-[300px]"
          >
            <div class="text-center whitespace-normal">
              <img
                :src="humanReview.image"
                alt="Profile Picture"
                class="w-24 h-24 rounded-full mb-4 mx-auto"
              />
              <h3 class="font-semibold text-lg mb-2">{{ humanReview.name }}</h3>
              <p class="text-sm text-gray-700">{{ humanReview.review }}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <div class="mt-20">
    <div>
      <div class="text-2xl font-bold text-center mb-8">
        <h1>TOP FREE SLOT GAMES ONLINE</h1>
        <button>See all games</button>
      </div>

      <div>
        <ul class="flex flex-wrap justify-between gap-6">
          <li
            v-for="(topFreeSlotGame, index) in topFreeSlotGamesOnline"
            :key="index"
            class="flex-1 min-w-[250px] flex flex-col items-center p-4 rounded-lg"
          >
            <img
              :src="topFreeSlotGame.image"
              alt="Game image"
              class="w-50 h-80 -mb-40 object-contain z-50"
            />
            <div class="bg-gray-100 pt-10">
              <h3 class="font-semibold text-lg mb-2">{{ topFreeSlotGame.title }}</h3>
              <p class="text-sm text-gray-700">{{ topFreeSlotGame.context }}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <div class="mt-20 relative mb-20">
    <!-- Container with image background and text overlay -->
    <div class="relative flex flex-col md:flex-row items-center">
      <!-- Background image -->
      <img
        :src="BackgroundMouseGold"
        alt="Background Mouse Gold"
        class="w-full h-[600px] md:h-[600px] object-cover"
      />

      <!-- Text overlay -->
      <div class="absolute inset-0 flex items-center justify-center md:justify-start">
        <div class="container mx-auto px-4 md:px-6 lg:px-8">
          <div
            class="max-w-md bg-transparent text-white p-6 md:p-8 rounded-lg text-center md:text-left"
          >
            <h2 class="text-2xl md:text-3xl font-bold mb-4">LOOKING FOR FREE COINS?</h2>
            <p class="mb-6">
              You're in luck! We provide you with over 15 amazing ways to get them... EVERY DAY!
              <br class="hidden md:block" />
              Find links on our social media channels and posts, notifications, emails, or even grab
              your daily in-game Store Bonus. Collecting epic free Coins and freebies is super easy
              in Slotomania!
            </p>
            <button
              class="hidden md:inline-flex px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-bold rounded-lg transition-colors"
            >
              COLLECT COINS
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="mt-20 max-w-4xl mx-auto px-4 mb-20">
    <h2 class="text-2xl font-bold text-center mb-8">FREE SLOTS FAQ</h2>

    <div class="space-y-4">
      <div
        v-for="(faqItem, index) in faq"
        :key="index"
        class="border border-gray-200 rounded-lg overflow-hidden transition-all duration-200"
        :class="{ 'shadow-md': activeIndex === index }"
      >
        <!-- FAQ Question with toggle -->
        <div
          class="flex justify-between items-center cursor-pointer bg-gray-100 hover:bg-gray-200 p-4 transition-colors duration-200"
          @click="toggleAnswer(index)"
        >
          <h3 class="font-semibold text-lg">{{ faqItem.question }}</h3>
          <svg
            class="w-5 h-5 transform transition-transform duration-200"
            :class="{ 'rotate-180': activeIndex === index }"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>

        <!-- FAQ Answer - Using Tailwind's transition utilities -->
        <div
          class="transition-all duration-200 ease-in-out overflow-hidden"
          :class="activeIndex === index ? 'max-h-screen' : 'max-h-0'"
        >
          <div class="bg-white p-4 border-t border-gray-200">
            <p class="text-gray-700">{{ faqItem.answer }}</p>
          </div>
        </div>
      </div>
      <div>
        As under-whelming as it may sound, Slotomania’s free online slot games use a random number
        generator – so everything just boils down to luck! Spinning slots is a game of
        possibilities. However, having a broad knowledge about different free casino slot games and
        their rules will certainly help you understand your chances better. Just hit the SPIN button
        and find out the answer to the burning question: What Will Today Spin?
      </div>
    </div>
  </div>

  <div class="mt-20">
    <div class="flex flex-col md:flex-row items-center">
      <!-- Image container - made slightly smaller -->
      <div class="w-full md:w-1/2">
        <img
          :src="LucyJackpotBackground"
          alt="Lucy Jackpot Background"
          class="w-full max-w-[500px] mx-auto object-contain"
        />
      </div>

      <!-- Text content -->
      <div class="w-full md:w-1/2 text-center md:text-left p-6">
        <p class="text-lg font-medium mb-2">ARE YOU READY</p>
        <h2 class="text-3xl md:text-4xl font-bold mb-6">FOR FREE SLOTS?</h2>
        <button
          class="px-8 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-bold rounded-lg transition-colors"
        >
          PLAY NOW
        </button>
      </div>
    </div>
  </div>
</template>
