<script setup>
import horseCartoonVideo from '@/assets/video/horse.mp4'

// Import your images directly

import Karen from '@/assets/people/karen.jpg'
import Magen from '@/assets/people/magen.jpg'
import Noah from '@/assets/people/noah.jpg'
import Tiger from '@/assets/topFreeSlotGamesOnline/tiger.png'
import Train from '@/assets/topFreeSlotGamesOnline/train.png'
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
  Masjid,
  LookingForCoins,
  LookingForCoinsBottom,
  LookingForCoinsTop,
  StarIcon,
  WaveBackground,
  ZeusBackground,
  MobileZeusBackground,
  PlayerReviewLarge,
} from '@/assets/icons'
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import PlayNowButton from '@/assets/icons/playNowButton/PlayNowButton.png'
import CloverLady from '@/assets/homeBackground/SlotGameCarousel/CloverLady.png'
import SugarRush from '@/assets/homeBackground/SlotGameCarousel/SugarRush.png'
import IceScape from '@/assets/homeBackground/SlotGameCarousel/IceScape.png'
import LuckyPiggy from '@/assets/homeBackground/SlotGameCarousel/LuckyPiggy.png'

const showMore = ref(false)

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

const currentSlide = ref(0)
const windowWidth = ref(window.innerWidth)

const slotGames = [
  {
    title: 'Dolphin Reef',
    image: CloverLady,
    description:
      "Dolphin Reef is a slot game by Next Gen Gaming, based in a reef populated with familiar sea creatures. Combining enough of these can result in big wins, and there's a lot of fun to be had in the process.",
  },
  {
    title: 'Sugar Rush',
    image: SugarRush,
    description:
      'Sugar Rush is an online slot developed by Pragmatic Play. It is a high-volatility RTP of 96.5%. It is played on a 7×7 grid with 20 paylines, and it has cascading wins pays mechanisms.',
  },
  {
    title: 'Buffalo King',
    image: IceScape,
    description:
      'Buffalo King is a 6-reel, 4096 ways to win slot game with a Wild West theme. Trigger free spins with 3+ scatter symbols and enjoy multipliers up to 5x on wild wins.',
  },
  {
    title: 'Wolf Gold',
    image: LuckyPiggy,
    description:
      'Wolf Gold takes you to the American wilderness with a 5×3 layout and 25 paylines. Features include stacked wilds, respins, and a chance to win one of three jackpots.',
  },
]

const visibleSlides = computed(() => {
  if (windowWidth.value < 640) return 1
  else return 2
})

const nextSlide = () => {
  if (currentSlide.value < slotGames.length - visibleSlides.value) {
    currentSlide.value++
  }
}

const prevSlide = () => {
  if (currentSlide.value > 0) {
    currentSlide.value--
  }
}
// const playerReviewBackground = ref(window.innerWidth >= 1080 ? PlayerReviewLarge : PlayersReviews)
const playerReviewBackground = ref(PlayersReviews)

onMounted(() => {
  window.addEventListener('resize', () => {
    windowWidth.value = window.innerWidth
    if (currentSlide.value > slotGames.length - visibleSlides.value) {
      currentSlide.value = Math.max(0, slotGames.length - visibleSlides.value)
    }
    // playerReviewBackground.value = windowWidth.value >= 1080 ? FantasyScene : PlayersReviews
    // playerReviewBackground.value = windowWidth.value >= 1080 ? FantasyScene : PlayersReviews
    console.log('new background image', playerReviewBackground.value)
  })
})
const isMobileView = ref(false)

// Function to check if it's a mobile view
const checkMobileView = () => {
  isMobileView.value = window.innerWidth <= 768
}

// Watch the window resize event to dynamically adjust the value
onMounted(() => {
  checkMobileView()
  window.addEventListener('resize', checkMobileView)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', checkMobileView)
})
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
        class="mt-10 px-8 py-4 text-2xl font-bold rounded-full bg-yellow-400 text-black hover:bg-yellow-500 transition-all  shadow-lg"
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
    <div class="pl-5 pr-5 w-full md:flex-1 text-black text-sm leading-relaxed md:px-6">
      <h1 class="text-2xl md:text-3xl font-bold mb-4 text-[#00BBFF]">GET EXTRA BONUS NOW !</h1>
      <br />
      <p>
        <strong
          >Slotomania, the world's #1 free slots game, was developed in 2011 by Playtika®.</strong
        ><br /><br />
        Slotomania offers 170+ free online slot games, various fun features, mini-games, free
        bonuses, and more online or free-to-download apps. Join millions of players and enjoy a
        fantastic experience on the web or any device; from PCs to tablets and cell phones (on
        Google Play, Apple iPhone or iPad App Store, or Facebook Gaming). <br /><br />Get 1 million
        free Coins as a Welcome Bonus, just for downloading the game! Although it may replicate
        Vegas-style slot machines, there are no cash prizes. Slotomania's focus is on exhilarating
        gameplay and fostering a happy global community. <br /><br />Slotomania is a pioneer in the
        slot industry - with over 11 years of refining the game, it is a pioneer in the slot game
        industry. Many of its competitors have adopted similar features and techniques to
        Slotomania, such as collectibles and group play.
      </p>
    </div>
  </div>

  <div class="mt-20 bg-gradient-to-b from-white via-white to-[#f1fafd]">
    <!-- WHY SLOTOMANIA Title centered at the top of all the images -->
    <div class="mb-8">
      <h2 class="text-2xl md:text-3xl font-bold text-center text-[#00BBFF]">WHY EXTRA BONUS?</h2>
    </div>

    <!-- Grid layout for mobile, flex row for desktop -->
    <ul
      class="grid grid-cols-2 gap-x-4 gap-y-6 md:gap-y-4 px-4 md:px-0 md:flex md:flex-row md:justify-center md:gap-10"
    >
      <li
        v-for="(image, index) in imagesSentences"
        :key="index"
        :class="[
          'flex flex-col items-center h-full -mb-5 md:col-span-1',
          imagesSentences.length % 2 === 1 && index === imagesSentences.length - 1
            ? 'col-span-2 justify-self-center'
            : 'col-span-1',
        ]"
      >
        <div class="flex flex-col items-center h-full mb-10 md:-mb-5">
          <img
            :src="image.image"
            alt="Slotomania Image"
            class="w-30 h-20 object-contain mb-4 md:-mb-8 mx-auto z-10"
          />

          <div class="bg-white md:pt-14 pt-6 pb-6 text-center rounded-lg px-2">
            <div>
              <h3 class="font-semibold text-[#0068A9] whitespace-nowrap">{{ image.title }}</h3>
              <h3 class="text-sm text-[#00BBFF] whitespace-nowrap">
                {{ image.sentence }}
              </h3>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>

  <!-- Halloween Background Section -->
  <div class="w-full relative">
    <div class="absolute inset-0 -z-10">
      <div
        class="w-full h-full bg-cover bg-center opacity-30"
        :style="`background-image: url(${Masjid})`"
      ></div>
    </div>
    <div class="relative z-0">
      <img :src="HalloweenBackground" alt="Halloween Background" class="w-full" />
    </div>

    <!-- Blue Cloud Transition -->
    <div class="relative w-full z-20 -mt-[15%] md:-mt-[20.5%]">
      <img :src="BlueCloud" alt="Blue Cloud" class="w-full h-auto" />
    </div>
  </div>

  <div
    class="relative z-0 bg-no-repeat -mt-1 pb-80"
    :style="{
      backgroundImage: `url(${FantasyScene})`,
      backgroundPosition: '10% 20%',
      backgroundSize: 'cover',

      // backgroundSize: '100% 100%',
    }"
  >
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
    <div class="mt-20 px-4">
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
  </div>

  <!-- Slotomania Players Reviews section -->
  <div class="relative">
    <!-- Background gradient container -->
    <div class="relative z-0 pb-24">
      <div
        class="px-4 md:px-40 pb-80 z-10 pt-8 bg-gradient-to-b from-custom-blue-12 to-custom-blue-13 backdrop-blur-3xl"
      >
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

    <!-- Overlapping image with higher z-index -->
    <div class="absolute bottom-0 left-0 right-0 z-10">
      <img :src="PlayersReviews" alt="Players Reviews Background" class="w-full h-auto" />
    </div>
  </div>

  <div class="relative pt-40 2xl:pt-80">
    <!-- Absolute background -->
    <div class="absolute inset-0 z-0">
      <img
        :src="WaveBackground"
        alt="Wave Background"
        class="w-full h-full object-cover object-bottom"
      />
    </div>

    <!-- Content with relative positioning -->
    <div class="relative z-10 px-4 md:px-32 flex flex-col mt-20 pb-20">
      <div class="text-3xl font-extrabold text-custom-blue-12 neuron mb-8">
        <h1>TOP FREE SLOT GAMES ONLINE</h1>
      </div>

      <!-- Carousel Container -->
      <div class="relative mt-20">
        <!-- Carousel Slides -->
        <div class="overflow-hidden">
          <div
            class="flex transition-transform duration-500 ease-in-out"
            :style="{ transform: `translateX(-${(currentSlide * 100) / visibleSlides}%)` }"
          >
            <div
              v-for="(game, index) in slotGames"
              :key="index"
              class="flex-shrink-0 px-2"
              :style="{ width: `${100 / visibleSlides}%` }"
            >
              <div class="overflow-hidden h-full flex flex-col">
                <img :src="game.image" :alt="game.title" class="w-full h-full" />
              </div>
            </div>
          </div>
        </div>

        <!-- Progress Bar -->
        <div class="flex items-center justify-center mt-8 gap-2">
          <button
            @click="prevSlide"
            class="bg-custom-blue-12 rounded-full p-1"
            :disabled="currentSlide === 0"
            :class="{ 'opacity-50 cursor-not-allowed': currentSlide === 0 }"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            @click="nextSlide"
            class="bg-custom-blue-12 rounded-full p-1"
            :disabled="currentSlide >= slotGames.length - visibleSlides"
            :class="{
              'opacity-50 cursor-not-allowed': currentSlide >= slotGames.length - visibleSlides,
            }"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          <div class="flex-grow max-w-2xl bg-gray-200 rounded-full h-2.5">
            <div
              class="bg-custom-blue-12 h-2.5 rounded-full transition-all duration-500 ease-in-out"
              :style="{ width: `${(currentSlide / (slotGames.length - visibleSlides)) * 100}%` }"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="-mt-24 relative mb-16">
    <!-- Top Decorative Image -->
    <div>
      <img :src="LookingForCoinsBottom" class="w-full" />
    </div>

    <!-- Container with Background and Overlay -->
    <div class="relative flex flex-col md:flex-row items-center">
      <!-- Responsive Background Image -->
      <img
        :src="LookingForCoins"
        alt="Looking For Coins"
        class="w-full h-[400px] sm:h-[500px] md:h-[900px] lg:h-[900px] object-cover"
      />

      <!-- Overlayed Content -->
      <div class="absolute inset-0 flex items-center justify-center md:justify-start px-4 md:px-10">
        <div
          class="max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl text-white text-center md:text-left p-4 md:p-6 rounded-xl"
        >
          <h2 class="text-xl sm:text-2xl md:text-3xl font-bold mb-3 whitespace-nowrap">
            LOOKING FOR FREE COINS?
          </h2>
          <br />
          <p class="mb-6">
            You're in luck! We provide you with over 15 amazing ways to get them... EVERY DAY!
            <br class="hidden md:block" />
            Find links on our social media channels and posts, notifications, emails, or even grab
            your daily in-game Store Bonus. Collecting epic free Coins and freebies is super easy in
            Slotomania!
          </p>
          <br />
          <button
            class="hidden md:inline-flex px-5 py-2 bg-transparent hover:bg-yellow-600 text-white font-bold rounded-full border border-white transition-colors"
          >
            COLLECT COINS
          </button>
        </div>
      </div>
    </div>

    <!-- Bottom Decorative Image -->
    <div>
      <img :src="LookingForCoinsTop" class="w-full z-40" />
    </div>
  </div>

  <div v-if="!isMobileView" class="relative 2xl:pt-[200px] pb-[100px] z-20">
    <!-- Absolute background -->
    <div class="-mt-80 absolute inset-0 z-0">
      <img :src="ZeusBackground" alt="Zeus Background" class="w-full h-full object-cover" />
    </div>

    <!-- Content with relative positioning -->
    <div class="relative z-10">
      <div class="max-w-[500px] mx-auto px-4 pt-80 backdrop-brightness-100">
        <h1 class="text-[36px] md:text-[44px] font-bold text-center mb-8 text-[#00BBFF]">
          EXTRA BONUS FAQ
        </h1>

        <div class="space-y-4">
          <div
            v-for="(faqItem, index) in faq"
            :key="index"
            class="overflow-hidden transition-all duration-200"
          >
            <!-- Question -->
            <div
              class="flex justify-between items-center cursor-pointer hover:bg-gray-200 pb-2 transition-colors duration-200"
              :class="{ 'border-b border-[#00BBFF]': activeIndex !== index }"
              @click="toggleAnswer(index)"
            >
              <div class="flex items-center gap-6 md:gap-8">
                <img :src="StarIcon" alt="Star Icon" />
                <h3 class="font-semibold text-base md:text-lg text-[#00BBFF]">
                  {{ faqItem.question }}
                </h3>
              </div>
              <svg
                class="w-5 h-5 transform transition-transform duration-200 text-[#00BBFF]"
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

            <!-- Answer -->
            <div
              class="transition-all duration-200 ease-in-out overflow-hidden"
              :class="activeIndex === index ? 'max-h-screen border-b border-[#00BBFF]' : 'max-h-0'"
            >
              <div class="p-4 ml-5 md:ml-20 mr-5 md:mr-10">
                <p class="text-gray-700">{{ faqItem.answer }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-20">
        <div class="flex flex-col md:flex-row items-center">
          <!-- Image container - made slightly smaller -->
          <div class="w-full md:w-1/2">
            <!-- <img
            :src="LucyJackpotBackground"
            alt="Lucy Jackpot Background"
            class="w-full max-w-[500px] mx-auto object-contain"
          /> -->
          </div>

          <!-- Text content -->
          <div class="w-full mt-48 pl-20 md:w-1/2 text-center md:text-left p-6">
            <p class="text -lg font-medium mb-2 text-[#00BBFF]">ARE YOU READY</p>
            <h2 class="text-3xl md:text-4xl font-bold mb-6 text-[#00BBFF]">FOR FREE SLOTS?</h2>
            <img :src="PlayNowButton" alt="logo" class="h-20" />
          </div>
        </div>
      </div>
    </div>
  </div>

  <div v-if="isMobileView" class="-mt-20">
    <div class="max-w-[500px] mx-auto px-4 pt-[10px] backdrop-brightness-100">
      <h1 class="text-[25px] font-bold text-center mb-8 text-[#00BBFF]">EXTRA BONUS FAQ</h1>

      <div class="space-y-4">
        <div
          v-for="(faqItem, index) in faq"
          :key="index"
          class="overflow-hidden transition-all duration-200"
        >
          <!-- Question -->
          <div
            class="flex justify-between items-center cursor-pointer hover:bg-gray-200 pb-2 transition-colors duration-200"
            :class="{ 'border-b border-[#00BBFF]': activeIndex !== index }"
            @click="toggleAnswer(index)"
          >
            <div class="flex items-center gap-6 md:gap-8">
              <img :src="StarIcon" alt="Star Icon" />
              <h3 class="font-semibold text-base md:text-lg text-[#00BBFF]">
                {{ faqItem.question }}
              </h3>
            </div>
            <svg
              class="w-5 h-5 transform transition-transform duration-200 text-[#00BBFF]"
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

          <!-- Answer -->
          <div
            class="transition-all duration-200 ease-in-out overflow-hidden bg-white"
            :class="activeIndex === index ? 'max-h-screen border-b border-[#00BBFF]' : 'max-h-0'"
          >
            <div class="bg-white p-4 ml-5 md:ml-20 mr-5 md:mr-10">
              <p class="text-gray-700">{{ faqItem.answer }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-5">
      <div class="relative w-full h-[600px] md:h-[500px] overflow-hidden">
        <!-- Background image container - ensures full image visibility -->
        <div class="absolute inset-0">
          <img
            :src="MobileZeusBackground"
            alt="Mobile Zeus Background"
            class="w-full h-full object-cover object-left md:object-[65%_center]"
          />
        </div>

        <!-- Text content overlay - pushed to right -->
        <div class="absolute inset-0 flex items-center justify-end pr-4 md:pr-20 mb-44">
          <div class="text-right max-w-[300px] md:max-w-none">
            <p class="text-lg font-medium mb-2 text-[#00BBFF]">ARE YOU READY</p>
            <h2 class="text-xl md:text-4xl font-bold mb-6 text-[#00BBFF] whitespace-nowrap">
              FOR FREE SLOTS?
            </h2>
            <img :src="PlayNowButton" alt="Play Now" class="w-25 h-10 inline-block" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="mt-20 flex justify-center px-4 mb-5">
    <div class="text-center max-w-2xl w-full">
      <!-- Title -->
      <div class="w-full md:overflow-visible">
        <h1 class="text-[20px] md:text-[20px] font-bold text-[#00BBFF] mb-4 inline-block">
          Slotomania, the world’s #1 free slots game, was developed in 2011 by Playtika®
        </h1>
      </div>

      <!-- Collapsible Content Container -->
      <div class="relative text-base text-gray-800 leading-relaxed transition-all duration-300 m">
        <!-- Content -->
        <div
          :class="[
            'overflow-hidden transition-all duration-300',
            showMore ? 'max-h-[9999px]' : 'max-h-[150px]',
          ]"
        >
          <p class="max-w-prose mx-auto">
            Slotomania offers 170+ free online slot games, various fun features, mini-games, free
            bonuses, and more online or free-to-download apps. Join millions of players and enjoy a
            fantastic experience on the web or any device; from PCs to tablets and cell phones (on
            Google Play, Apple iPhone or iPad App Store, or Facebook Gaming).
            <br />
            Get 1 million free Coins as a Welcome Bonus, just for downloading the game! Although it
            may replicate Vegas-style slot machines, there are no cash prizes. Slotomania's focus is
            on exhilarating gameplay and fostering a happy global community.
            <br />
            Slotomania is a pioneer in the slot industry – with over 11 years of refining the game.
            Many of its competitors have adopted similar features and techniques to Slotomania, such
            as collectibles and group play.
          </p>

          <!-- Fade-only overlay on content (not affecting button) -->
          <div
            v-if="!showMore"
            class="absolute bottom-10 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent pointer-events-none"
          ></div>
        </div>

        <!-- See More Toggle -->
        <div class="mt-4">
          <button
            class="text-[#00BBFF] font-semibold underline focus:outline-none"
            @click="showMore = !showMore"
          >
            {{ showMore ? 'See Less' : 'See More' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
