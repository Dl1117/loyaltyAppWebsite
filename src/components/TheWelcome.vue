<script setup>
import horseCartoonVideo from '@/assets/video/horse.mp4'
import Karen from '@/assets/people/karen.jpg'
import Magen from '@/assets/people/magen.jpg'
import Noah from '@/assets/people/noah.jpg'
import Tiger from '@/assets/topFreeSlotGamesOnline/tiger.png'
import Train from '@/assets/topFreeSlotGamesOnline/train.png'
import {
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

onMounted(() => {
  window.addEventListener('resize', () => {
    windowWidth.value = window.innerWidth
    if (currentSlide.value > slotGames.length - visibleSlides.value) {
      currentSlide.value = Math.max(0, slotGames.length - visibleSlides.value)
    }
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

// Slotomania Players Reviews section
const reviewCurrentSlide = ref(0)
const reviewVisibleSlides = computed(() => {
  if (windowWidth.value < 768) return 1
  else if (windowWidth.value < 1024) return 2
  else return 3
})

const nextReviewSlide = () => {
  console.log('Next review slide clicked')
  if (reviewCurrentSlide.value < humanReview.length - reviewVisibleSlides.value) {
    reviewCurrentSlide.value++
    console.log('Current slide updated to:', reviewCurrentSlide.value)
  }
}

const prevReviewSlide = () => {
  console.log('Previous review slide clicked')
  if (reviewCurrentSlide.value > 0) {
    reviewCurrentSlide.value--
    console.log('Current slide updated to:', reviewCurrentSlide.value)
  }
}

// Make sure the review carousel adjusts when window resizes
onMounted(() => {
  // ... existing code ...

  window.addEventListener('resize', () => {
    // ... existing code ...

    // Adjust review carousel when screen size changes
    if (reviewCurrentSlide.value > humanReview.length - reviewVisibleSlides.value) {
      reviewCurrentSlide.value = Math.max(0, humanReview.length - reviewVisibleSlides.value)
    }
  })
})

// For scroll animations
const extraBonusSection = ref(null)
const extraBonusVisible = ref(false)

// Set up intersection observer for scroll animations
onMounted(() => {
  // ... existing code ...

  // Create intersection observer for scroll animations
  const observerOptions = {
    root: null, // use viewport as root
    rootMargin: '-50px', // only trigger when element is 50px inside the viewport
    threshold: 0.4, // trigger when 40% of the element is visible
  }

  const extraBonusObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        extraBonusVisible.value = true
        // Once animation is triggered, we can stop observing
        extraBonusObserver.unobserve(entry.target)
      }
    })
  }, observerOptions)

  // Start observing the element once it's mounted
  if (extraBonusSection.value) {
    extraBonusObserver.observe(extraBonusSection.value)
  }
})

const whyBonusTitle = ref(null)
const whyBonusTitleVisible = ref(false)
const bonusItemsVisible = ref(Array(imagesSentences.length).fill(false))

onMounted(() => {
  // ... existing code ...

  // Observer for the title
  const titleObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          whyBonusTitleVisible.value = true
          titleObserver.unobserve(entry.target)

          // After title appears, start showing items with delay
          setTimeout(() => {
            // Show items in reverse order (bottom to top)
            const reversedIndices = [...Array(imagesSentences.length).keys()]

            reversedIndices.forEach((index, i) => {
              setTimeout(() => {
                bonusItemsVisible.value[index] = true
              }, i * 200) // 200ms delay between each item
            })
          }, 500) // Wait 500ms after title appears
        }
      })
    },
    {
      threshold: 0.5,
      rootMargin: '-50px',
    },
  )

  // Start observing the title
  if (whyBonusTitle.value) {
    titleObserver.observe(whyBonusTitle.value)
  }
})

// For Social section animations
const socialSection = ref(null)
const socialTitleVisible = ref(false)
const socialTextVisible = ref(false)
const mascotSection = ref(null)
const mascotSectionVisible = ref(false)

// Set up intersection observer for Social section
onMounted(() => {
  // ... existing code ...

  // Observer for the social section
  const socialObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // First show the title from left
          socialTitleVisible.value = true

          // Then show the text from right after a short delay
          setTimeout(() => {
            socialTextVisible.value = true
          }, 300)

          socialObserver.unobserve(entry.target)
        }
      })
    },
    {
      threshold: 0.3,
      rootMargin: '-50px',
    },
  )

  // Observer for the mascot section
  const mascotObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          mascotSectionVisible.value = true
          mascotObserver.unobserve(entry.target)
        }
      })
    },
    {
      threshold: 0.2,
      rootMargin: '-50px',
    },
  )

  // Start observing the sections once they're mounted
  if (socialSection.value) {
    socialObserver.observe(socialSection.value)
  }

  if (mascotSection.value) {
    mascotObserver.observe(mascotSection.value)
  }
})

// For Player Reviews section animations
const reviewsTitle = ref(null)
const reviewsTitleVisible = ref(false)
const reviewItemsVisible = ref(Array(humanReview.length).fill(false))

// Set up intersection observer for Player Reviews section
onMounted(() => {
  // ... existing code ...

  // Observer for the reviews title
  const reviewsTitleObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // First show the title
          reviewsTitleVisible.value = true

          // Then show each review item with a staggered delay
          humanReview.forEach((_, index) => {
            setTimeout(
              () => {
                reviewItemsVisible.value[index] = true
              },
              300 + index * 200,
            ) // 300ms initial delay, then 200ms between each item
          })

          reviewsTitleObserver.unobserve(entry.target)
        }
      })
    },
    {
      threshold: 0.3,
      rootMargin: '-50px',
    },
  )

  // Start observing the title once it's mounted
  if (reviewsTitle.value) {
    reviewsTitleObserver.observe(reviewsTitle.value)
  }
})

// For Top Free Slot Games section animations
const topGamesTitle = ref(null)
const topGamesTitleVisible = ref(false)
const gamesCarousel = ref(null)
const gamesCarouselVisible = ref(false)

// Set up intersection observer for Top Free Slot Games section
onMounted(() => {
  // ... existing code ...

  // Observer for the top games title
  const topGamesTitleObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // First show the title
          topGamesTitleVisible.value = true

          // Then show the carousel after a short delay
          setTimeout(() => {
            gamesCarouselVisible.value = true
          }, 300)

          topGamesTitleObserver.unobserve(entry.target)
        }
      })
    },
    {
      threshold: 0.3,
      rootMargin: '-50px',
    },
  )

  // Start observing the title once it's mounted
  if (topGamesTitle.value) {
    topGamesTitleObserver.observe(topGamesTitle.value)
  }
})

// For Looking For Free Coins section animations
const coinsSection = ref(null)
const coinsSectionVisible = ref(false)

// Set up intersection observer for Free Coins section
onMounted(() => {
  // ... existing code ...

  // Observer for the coins section
  const coinsSectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          coinsSectionVisible.value = true
          coinsSectionObserver.unobserve(entry.target)
        }
      })
    },
    {
      threshold: 0.3,
      rootMargin: '-50px',
    },
  )

  // Start observing the section once it's mounted
  if (coinsSection.value) {
    coinsSectionObserver.observe(coinsSection.value)
  }
})

// For FAQ section animations
const faqSection = ref(null)
const faqSectionVisible = ref(false)
const faqItemsVisible = ref(Array(faq.length).fill(false))

// For "Are You Ready" section animations
const readySection = ref(null)
const readySectionVisible = ref(false)

// Set up intersection observers for FAQ and Ready sections
onMounted(() => {
  // ... existing code ...

  // Observer for the FAQ section
  const faqSectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Show the FAQ section title
          faqSectionVisible.value = true

          // Show each FAQ item with a staggered delay
          setTimeout(() => {
            faq.forEach((_, index) => {
              setTimeout(() => {
                faqItemsVisible.value[index] = true
              }, index * 150)
            })
          }, 300)

          faqSectionObserver.unobserve(entry.target)
        }
      })
    },
    {
      threshold: 0.2,
      rootMargin: '-100px',
    },
  )

  // Observer for the "Are You Ready" section
  const readySectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          readySectionVisible.value = true
          readySectionObserver.unobserve(entry.target)
        }
      })
    },
    {
      threshold: 0.3,
      rootMargin: '-50px',
    },
  )

  // Start observing the sections once they're mounted
  if (faqSection.value) {
    faqSectionObserver.observe(faqSection.value)
  }

  if (readySection.value) {
    readySectionObserver.observe(readySection.value)
  }
})
</script>

<template>
  <div class="flex flex-col">
    <!-- Background Video -->
    <div class="w-full h-[500px] md:h-[600px] overflow-hidden relative">
      <video
        class="absolute inset-0 w-full object-cover h-[500px] md:h-[600px] -z-10"
        :src="horseCartoonVideo"
        autoplay
        muted
        loop
        playsinline
      ></video>

      <div class="w-full h-full flex flex-col items-center justify-center text-white gap-2">
        <div class="text-2xl md:text-4xl font-bold drop-shadow-lg">PLAY SLOTOMANIA</div>
        <div class="text-lg md:text-2xl drop-shadow-md">THE #1 FREE SLOT GAME</div>
        <img :src="PlayNowButton" alt="logo" class="mt-10 h-20" />
      </div>

      <!-- Cloud Image - positioned at the bottom -->
    </div>
    <div class="w-ful z-10 lg:-mt-[10rem] 2xl:-mt-[12rem]">
      <img :src="Cloud" alt="Cloud" class="w-full h-auto z-10" />
    </div>

    <div class="flex flex-col md:flex-row items-center gap-6 h-auto md:h-1/3">
      <!-- Top (mobile) / Left (desktop): Image -->
      <div class="w-full md:flex-1">
        <img
          :src="TwoIphones"
          alt="Two Iphones"
          class="w-full h-[600px] md:h-[500px] lg:h-[700px] 2xl:h-[800px] object-contain ml-5 md:ml-10"
        />
      </div>

      <!-- Bottom (mobile) / Right (desktop): Text -->
      <div
        ref="extraBonusSection"
        :class="[
          'pl-5 pr-5 w-full md:flex-1 text-black text-sm leading-relaxed md:px-6 transition-all duration-1000 lg:px-20 2xl:px-20',
          extraBonusVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20',
        ]"
      >
        <h1 class="text-2xl md:text-3xl font-bold mb-4 text-[#00BBFF]">GET EXTRA BONUS NOW !</h1>
        <br />
        <p class="lg:text-base 2xl:text-lg">
          <strong
            >Slotomania, the world's #1 free slots game, was developed in 2011 by
            Playtika®.</strong
          ><br /><br />
          Slotomania offers 170+ free online slot games, various fun features, mini-games, free
          bonuses, and more online or free-to-download apps. Join millions of players and enjoy a
          fantastic experience on the web or any device; from PCs to tablets and cell phones (on
          Google Play, Apple iPhone or iPad App Store, or Facebook Gaming). <br /><br />Get 1
          million free Coins as a Welcome Bonus, just for downloading the game! Although it may
          replicate Vegas-style slot machines, there are no cash prizes. Slotomania's focus is on
          exhilarating gameplay and fostering a happy global community. <br /><br />Slotomania is a
          pioneer in the slot industry - with over 11 years of refining the game, it is a pioneer in
          the slot game industry. Many of its competitors have adopted similar features and
          techniques to Slotomania, such as collectibles and group play.
        </p>
      </div>
    </div>

    <div class="mt-20 bg-gradient-to-b from-white via-white to-[#f1fafd] flex flex-col gap-8">
      <h2
        ref="whyBonusTitle"
        :class="[
          'text-2xl md:text-3xl font-bold text-center text-[#00BBFF] transition-all duration-700',
          whyBonusTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10',
        ]"
      >
        WHY EXTRA BONUS?
      </h2>

      <!-- Grid layout for mobile, flex row for desktop -->
      <ul
        class="grid grid-cols-2 gap-x-4 gap-y-6 md:gap-y-4 md:px-0 md:flex md:flex-row md:justify-center md:gap-10"
      >
        <li
          v-for="(image, index) in imagesSentences"
          :key="index"
          :class="[
            'flex flex-col items-center h-full -mb-5 md:col-span-1 transition-all duration-700',
            imagesSentences.length % 2 === 1 && index === imagesSentences.length - 1
              ? 'col-span-2 justify-self-center'
              : 'col-span-1',
            bonusItemsVisible[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20',
          ]"
        >
          <div class="flex flex-col items-center h-full mb-10 md:-mb-5">
            <img
              :src="image.image"
              alt="Slotomania Image"
              class="w-40 h-32 object-contain mb-4 md:-mb-8 mx-auto z-10"
            />

            <div class="bg-white md:pt-14 pt-6 pb-6 text-center rounded-lg p-10">
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
      <div class="relative w-full z-20 -mt-72 2xl:-mt-80">
        <img :src="BlueCloud" alt="Blue Cloud" class="w-full h-auto" />
      </div>
    </div>

    <div
      class="relative z-0 bg-no-repeat -mt-1 pb-80 2xl:pb-[40rem] pt-40"
      :style="{
        backgroundImage: `url(${FantasyScene})`,
        backgroundSize: 'cover',
      }"
    >
      <!-- SLOTOMANIA GOING SOCIAL -->
      <div
        class="flex flex-col md:flex-row items-center justify-between w-full gap-6 md:gap-0 px-4 md:px-20 py-10 text-white neuron"
        ref="socialSection"
      >
        <div
          class="w-full md:flex-1 text-center transition-all duration-1000"
          :class="socialTitleVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'"
        >
          <div class="text-3xl font-extrabold">EXTRA BONUS GOING SOCIAL</div>
        </div>
        <div
          class="w-full md:flex-1 text-center transition-all duration-1000"
          :class="socialTextVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'"
        >
          <p class="text-lg">
            Slotomania is much more than an entertaining game - it is also a community that believes
            that a family that plays together, stays together. With millions of fans on Slotomania's
            official Facebook page & organic group, "SLOTOMANIA SUPERGROUP", Slotomania's online
            community enjoys special announcements of new games, features, and special activities,
            as well as likeminded players to converse and engage with.
          </p>
        </div>
      </div>

      <!-- MASCOT CONTEXT -->
      <div
        class="mt-20 px-4 transition-all duration-1000"
        ref="mascotSection"
        :class="mascotSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'"
      >
        <ul
          class="w-full flex flex-col md:flex-row flex-wrap justify-center md:justify-between gap-4"
        >
          <li
            v-for="(mascotContext, index) in mascotAndContext"
            :key="index"
            class="w-full md:w-[45%] lg:w-[22%] flex flex-col items-center text-center"
          >
            <!-- Image on top (index 0, 2) -->
            <div v-if="index === 0 || index === 2" class="w-full flex flex-col items-center">
              <img
                :src="mascotContext.image"
                alt="mascot"
                class="w-60 h-60 md:w-72 md:h-72 object-contain z-10 -mt-[3rem] -mb-[7rem] animate-float"
                :style="{ animationDelay: `${index * 0.5}s` }"
              />
              <div
                class="bg-[#009DFF]/70 rounded-xl text-white pt-32 pb-6 px-4 w-[90%] flex flex-col gap-8"
              >
                <p class="font-semibold text-xl md:text-2xl">{{ mascotContext.word1 }}</p>
                <h3 class="text-3xl md:text-5xl font-bold">
                  {{ mascotContext.eyeCatchyWord }}
                </h3>
                <p class="text-base md:text-lg">{{ mascotContext.word2 }}</p>
                <button
                  class="bg-orange-500 hover:bg-orange-600 transition px-4 py-2 rounded-full text-white text-sm font-semibold"
                >
                  JOIN NOW
                </button>
              </div>
            </div>

            <!-- Image on bottom (index 1, 3) -->
            <div v-else class="w-full flex flex-col items-center">
              <div
                class="bg-[#009DFF]/70 rounded-xl text-white pt-6 pb-72 px-4 w-[90%] relative z-10 flex flex-col gap-8"
              >
                <p class="font-semibold text-xl md:text-2xl">{{ mascotContext.word1 }}</p>
                <h3 class="text-3xl md:text-5xl font-bold">
                  {{ mascotContext.eyeCatchyWord }}
                </h3>
                <p class="text-base md:text-lg">{{ mascotContext.word2 }}</p>
                <button
                  class="bg-orange-500 hover:bg-orange-600 transition px-4 py-2 rounded-full text-white text-sm font-semibold"
                >
                  JOIN NOW
                </button>
              </div>
              <img
                :src="mascotContext.image"
                alt="mascot"
                class="-mt-[225px] w-60 h-60 md:w-80 md:h-80 object-contain relative z-20 animate-float"
                :style="{ animationDelay: `${index * 0.5}s` }"
              />
            </div>
          </li>
        </ul>
      </div>
    </div>

    <!-- Slotomania Players Reviews section -->
    <div class="relative">
      <!-- Background gradient container -->
      <div class="relative z-0 pb-24 md:pb-[2rem] 2xl:pb-[10rem] -mt-[15rem] 2xl:-mt-[8rem]">
        <div
          class="px-4 md:px-20 lg:px-10 pb-80 z-10 pt-8 2xl:pt-[8rem] bg-gradient-to-b from-custom-blue-12 to-custom-blue-13 backdrop-blur-3xl flex flex-col gap-10"
        >
          <h2
            ref="reviewsTitle"
            :class="[
              'text-3xl font-bold text-center text-white transition-all duration-700',
              reviewsTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20',
            ]"
          >
            EXTRA BONUS PLAYER'S REVIEWS
          </h2>

          <!-- Reviews container -->
          <div class="relative w-full">
            <!-- Reviews grid -->
            <div class="w-full">
              <ul
                class="w-full grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 mx-auto lg:px-[10rem] 2xl:px-[10rem]"
              >
                <li
                  v-for="(humanReview, index) in humanReview"
                  :key="index"
                  class="flex justify-center mt-4 transition-all duration-700"
                  :class="[
                    reviewItemsVisible[index]
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-20',
                  ]"
                  v-show="(windowWidth < 1024 && index === 0) || windowWidth >= 1024"
                >
                  <div
                    class="h-full bg-custom-grey-9/40 rounded-lg p-10 text-start whitespace-normal w-full max-w-[300px] lg:max-w-[300px] 2xl:max-w-[450px] text-white flex flex-col gap-4"
                  >
                    <img
                      :src="humanReview.image"
                      alt="Profile Picture"
                      class="w-40 h-40 rounded-full mx-auto"
                    />
                    <p class="text-sm">{{ humanReview.review }}</p>
                    <h3 class="font-semibold text-lg mt-auto">
                      {{ humanReview.name }}
                    </h3>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- Overlapping image with higher z-index -->
      <div class="absolute bottom-0 left-0 right-0 z-10">
        <img :src="PlayersReviews" alt="Players Reviews Background" class="w-full h-auto" />
      </div>
    </div>

    <div class="relative pt-40 2xl:-pt-[30rem] 2xl:pb-[10rem]">
      <!-- Absolute background -->
      <div class="absolute inset-0 -z-10">
        <img :src="WaveBackground" alt="Wave Background" class="w-full h-full object-cover" />
      </div>

      <!-- Content with relative positioning -->
      <div class="relative px-4 md:px-32 flex flex-col mt-20 2xl: pb-20">
        <div
          ref="topGamesTitle"
          :class="[
            'text-3xl 2xl:text-4xl font-extrabold text-custom-blue-12 neuron mb-8 transition-all duration-700',
            topGamesTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20',
          ]"
        >
          <h1>TOP FREE SLOT GAMES ONLINE</h1>
        </div>

        <!-- Carousel Container -->
        <div
          class="relative mt-20 transition-all duration-1000"
          ref="gamesCarousel"
          :class="gamesCarouselVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'"
        >
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

    <!-- Top Decorative Image -->
    <div class="-mt-[4rem] lg:-mt-[5rem] 2xl:-mt-[7rem]">
      <img :src="LookingForCoinsBottom" class="w-full" />
    </div>

    <!-- Container with Background and Overlay -->
    <div class="relative flex flex-col md:flex-row items-center xs:-mt-1">
      <!-- Responsive Background Image -->
      <img
        :src="LookingForCoins"
        alt="Looking For Coins"
        class="w-full h-[400px] sm:h-[500px] md:h-[900px] lg:h-[900px] object-cover"
      />

      <!-- Overlayed Content -->
      <div class="absolute inset-0 flex items-center justify-center md:justify-start px-4 md:px-10">
        <div
          ref="coinsSection"
          :class="[
            'max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl text-white text-center md:text-left p-4 md:p-6 rounded-xl transition-all duration-1000',
            coinsSectionVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95',
          ]"
        >
          <h2
            :class="[
              'text-xl sm:text-2xl md:text-3xl font-bold mb-3 whitespace-nowrap transition-all duration-700 delay-300',
              coinsSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10',
            ]"
          >
            LOOKING FOR FREE COINS?
          </h2>
          <br />
          <p
            :class="[
              'mb-6 transition-all duration-700 delay-500',
              coinsSectionVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10',
            ]"
          >
            You're in luck! We provide you with over 15 amazing ways to get them... EVERY DAY!
            <br class="hidden md:block" />
            Find links on our social media channels and posts, notifications, emails, or even grab
            your daily in-game Store Bonus. Collecting epic free Coins and freebies is super easy in
            Slotomania!
          </p>
          <br />
          <button
            class="hidden md:inline-flex px-5 py-2 bg-transparent hover:bg-yellow-600 text-white font-bold rounded-full border border-white transition-all duration-700 delay-700"
            :class="coinsSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'"
          >
            COLLECT COINS
          </button>
        </div>
      </div>
    </div>

    <!-- Bottom Decorative Image -->
    <div class="xs:-mt-1">
      <img :src="LookingForCoinsTop" class="w-full z-40" />
    </div>

    <div
      v-if="!isMobileView"
      class="relative md:pt-[20rem] lg:pt-[25.5rem] 2xl:pt-[40rem] md:-mt-[10rem] lg:-mt-[15rem] pb-[10rem] md:pb-[40rem] z-10 md:h-[70rem] lg:h-[100rem] 2xl:h-[120rem]"
    >
      <!-- Absolute background -->
      <div class="absolute inset-0 -z-10">
        <img :src="ZeusBackground" alt="Zeus Background" class="w-full h-full object-cover" />
      </div>

      <!-- Content with relative positioning -->
      <div class="relative md:-mt-[13rem] 2xl:-mt-[20rem]">
        <div class="max-w-[500px] mx-auto px-4 backdrop-brightness-100" ref="faqSection">
          <h1
            class="text-[36px] md:text-[44px] font-bold text-center mb-8 text-[#00BBFF] transition-all duration-700"
            :class="[faqSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20']"
          >
            EXTRA BONUS FAQ
          </h1>

          <div class="space-y-4">
            <div
              v-for="(faqItem, index) in faq"
              :key="index"
              class="overflow-hidden transition-all"
              :class="[
                faqItemsVisible[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20',
              ]"
              :style="{
                transitionDelay: `${300 + index * 150}ms`,
                transitionDuration: '700ms',
              }"
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
                :class="
                  activeIndex === index ? 'max-h-screen border-b border-[#00BBFF]' : 'max-h-0'
                "
              >
                <div class="p-4 ml-5 md:ml-20 mr-5 md:mr-10">
                  <p class="text-gray-700">{{ faqItem.answer }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="md:-mt-32 lg:mt-[15rem] 2xl:mt-[20rem]">
          <div class="flex flex-col md:flex-row items-center">
            <div class="w-full md:w-1/2"></div>

            <!-- Text content -->
            <div
              class="w-full mt-48 pl-20 md:w-1/2 text-center md:text-left p-6"
              ref="readySection"
              :class="[
                'transition-all duration-1000',
                readySectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20',
              ]"
            >
              <p
                class="text-lg font-medium mb-2 text-[#00BBFF] transition-all duration-700"
                :class="
                  readySectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                "
              >
                ARE YOU READY
              </p>
              <h2
                class="text-3xl md:text-4xl font-bold mb-6 text-[#00BBFF] transition-all duration-700 delay-200"
                :class="
                  readySectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                "
              >
                FOR FREE SLOTS?
              </h2>
              <img
                :src="PlayNowButton"
                alt="logo"
                class="h-20 transition-all duration-700 delay-400"
                :class="readySectionVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="isMobileView" class="-mt-5">
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

    <div class="flex justify-center px-4 mb-5">
      <div class="text-center w-full">
        <!-- Title -->
        <div class="w-full">
          <h1 class="text-lg font-bold mb-4">
            Slotomania, the world’s #1 free slots game, was developed in 2011 by Playtika®
          </h1>
        </div>

        <!-- Collapsible Content Container -->
        <div class="relative text-base text-gray-800 leading-relaxed transition-all duration-300">
          <!-- Content -->
          <div
            :class="[
              'overflow-hidden transition-all duration-300',
              showMore ? 'max-h-[9999px]' : 'max-h-[150px]',
            ]"
          >
            <p class="mx-auto px-10">
              Slotomania offers 170+ free online slot games, various fun features, mini-games, free
              bonuses, and more online or free-to-download apps. Join millions of players and enjoy
              a fantastic experience on the web or any device; from PCs to tablets and cell phones
              (on Google Play, Apple iPhone or iPad App Store, or Facebook Gaming).
              <br />
              Get 1 million free Coins as a Welcome Bonus, just for downloading the game! Although
              it may replicate Vegas-style slot machines, there are no cash prizes. Slotomania's
              focus is on exhilarating gameplay and fostering a happy global community.
              <br />
              Slotomania is a pioneer in the slot industry – with over 11 years of refining the
              game. Many of its competitors have adopted similar features and techniques to
              Slotomania, such as collectibles and group play.
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
  </div>
</template>

<style>
@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
}

.animate-float {
  animation: float 4s ease-in-out infinite;
}
</style>
