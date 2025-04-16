<template>
  <div class="mt-20 md:mt-20">
    <h1 class="text-xl md:text-2xl font-bold text-center mb-6 md:mb-8">WINBOX PROMOTION</h1>

    <div class="w-full max-w-screen-xl mx-auto px-4 md:px-10 lg:px-20">
      <div
        class="grid grid-cols-1 md:grid-cols-2 gap-x-4 md:gap-x-8 lg:gap-x-12 gap-y-4 md:gap-y-6 mb-10"
      >
        <div
          v-for="(promotionCard, index) in promotionCards"
          :key="index"
          class="flex flex-col items-center bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden transform hover:-translate-y-1 transition-transform duration-200"
        >
          <img
            :src="promotionCard.image"
            alt="Promotion Banner"
            class="w-full h-auto mb-3 md:mb-4"
          />
          <div class="ml-4 md:ml-5 mb-4 md:mb-5">
            <h3 class="font-semibold text-base md:text-lg mb-1 md:mb-2">
              {{ promotionCard.title }}
            </h3>
            <p class="text-xs md:text-sm text-gray-700">{{ promotionCard.context }}</p>
          </div>

          <div class="flex flex-row gap-10 mt-auto mb-4">
            <router-link
              v-if="promotionCard.learnMoreLink"
              :to="{ name: promotionCard.learnMoreLink }"
              class="flex-1 px-10 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm md:text-base whitespace-nowrap text-center"
            >
              Learn More
            </router-link>
            <!-- Join Now Button -->
            <button
              class="flex-1 px-10 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg text-sm md:text-base whitespace-nowrap"
            >
              Join Now
            </button>
          </div>
        </div>
      </div>
      <!-- Content Sections -->
      <div class="prose prose-lg max-w-none mb-16">
        <h2 class="text-2xl font-bold text-gray-900 mb-6">
          Malaysia Online Casino Promotion | Free Credit New Register Casino Malaysia | Winbox Free
          Credit
        </h2>

        <div class="mb-10">
          <h3 class="text-xl font-semibold text-gray-800 mb-4">
            Win Highest Malaysia Online Casino Promotion
          </h3>
          <p class="text-gray-700 mb-6 leading-relaxed">
            Get a chance to win the
            <a href="#" @click.prevent="scrollToTop" class="underline hover:text-blue-600"
              >Malaysia Online Casino Promotion</a
            >
            | playing Winbox casino games. Winbox games are here to provide you with one of the best
            experiences that you can have for the most thrilling experience. More
            <span class="underline cursor-pointer hover:text-blue-600">About Winbox</span>.
          </p>
        </div>

        <div class="mb-10">
          <h3 class="text-xl font-semibold text-gray-800 mb-4">
            Enjoy Getting The Free Credit Casino No Deposit Malaysia 2025!
          </h3>
          <p class="text-gray-700 mb-4 leading-relaxed">
            Promotional rewards at Winbox online casino, you just need to get them after
            <span class="underline cursor-pointer hover:text-blue-600">Winbox Login</span>. With the
            <span class="underline cursor-pointer hover:text-blue-600">free credit</span> new
            register casino Malaysia at our site. You can win the following:
          </p>
          <ul class="list-disc pl-5 space-y-2 text-gray-700">
            <li class="pl-2">Welcome rewards</li>
            <li class="pl-2">Slot gaming rewards</li>
            <li class="pl-2">Sportsbook rewards</li>
            <li class="pl-2">Live gaming rewards and many more</li>
          </ul>
        </div>

        <div class="p-5 rounded-lg">
          <h4 class="text-lg font-medium text-gray-800">
            Check out more of Winbox features:
            <span class="underline cursor-pointer hover:text-blue-600"
              >Live Roulette Games Malaysia</span
            >
            |
            <span class="underline cursor-pointer hover:text-blue-600"
              >Football Betting Online Malaysia</span
            >
            |
            <span class="underline cursor-pointer hover:text-blue-600">918 Download Malaysia</span>
            |
            <span class="underline cursor-pointer hover:text-blue-600">Ekor 4D Betting</span>
          </h4>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import {
  RescueBonusBanner,
  MarcMarquezGiveaway,
  WelcomeBonus,
  Lucky7Bonus,
  ScratchAndWin,
  ClaimAngpauNow,
} from '@/assets/icons'

export default {
  name: 'Promotion',
  data() {
    return {
      scrollPosition: 0,
      mobile: false,
      mobileNav: false,

      // Promotion Cards Array
      promotionCards: [
        {
          image: RescueBonusBanner,
          title: 'RESCUE BONUS',
          context:
            'Keep playing your favorite online casino games by claiming your monthly Rescue Bonus! Get up to RM50,000 Rescue Bonus depending on your betting turnover.',
          learnMoreLink: 'rescueBonus',
          joinNowLink: '',
        },
        {
          image: MarcMarquezGiveaway,
          title: 'Marc Marquez Giveaway',
          context:
            'Get ready to win the most amazing prizes in the Marc Márquez Giveaway! With over RM100,000 worth of FREE prizes waiting for you, don’t miss this perfect chance to take home Kawasaki Ninja, amazing Apple products, and special Marc Márquez signature items.',
          learnMoreLink: 'marcMarquezGiveaway',
          joinNowLink: '',
        },
        {
          image: WelcomeBonus,
          title: 'WELCOME BONUS 100%',
          context:
            'Welcome new player 100% bonus no cumbersome steps required! Start your Winbox winning journey with us now, Hurry up!',
          learnMoreLink: 'welcomeBonus',
          joinNowLink: '',
        },
        {
          image: Lucky7Bonus,
          title: 'LUCKY 7th BONUS',
          context:
            'Every 7th/17th/27th of the month, Winbox will boost all Slots players’ turnover 1.5x , let all of slots player get a higher Rescue Bonus',
          learnMoreLink: 'lucky7Bonus',
          joinNowLink: '',
        },
        {
          image: ScratchAndWin,
          title: 'SCRATCH AND WIN',
          context:
            'Wanna have more exciting BONUS? Get your unique bonus code and scratch up to RM2,888 daily!',
          learnMoreLink: 'scratchAndWin',
          joinNowLink: '',
        },
        {
          image: ClaimAngpauNow,
          title: 'CLAIM ANGPAU NOW!',
          context:
            "Every day, as long as the red envelope buoy lights up, you can grab the red envelope immediately. There is only one chance to grab a red envelope a day, don't miss it!",
          learnMoreLink: 'claimAngpauNow',
          joinNowLink: '',
        },
      ],
    }
  },
  methods: {
    scrollToTop() {
      this.$refs.topElement.scrollIntoView({ behavior: 'smooth' })
    },
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav
    },
    handleScroll() {
      this.scrollPosition = window.scrollY
    },
    checkMobile() {
      this.mobile = window.innerWidth < 768
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
    window.addEventListener('resize', this.checkMobile)
    this.checkMobile() // Initialize mobile state
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
    window.removeEventListener('resize', this.checkMobile)
  },
}
</script>
