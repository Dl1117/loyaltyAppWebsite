import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PromotionView from '../views/PromotionView.vue'
import ClaimAngPaoNowView from '../views/ClaimAngPaoNowView.vue'
import ScratchAndWinView from '../views/ScratchAndWinView.vue'
import Lucky7BonusView from '../views/Lucky7BonusView.vue'
import WelcomeBonusView from '../views/WelcomeBonusView.vue'
import MarcMarquezGiveawayView from '../views/MarcMarquezGiveawayView.vue'
import RescueBonusView from '@/views/RescueBonusView.vue'
import RegisterView from '@/views/RegisterView.vue'
import LoginView from '@/views/LoginView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/promotion',
      name: 'promotion',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: PromotionView,
    },
    {
      path: '/promotion/claim-angpau-now',
      name: 'claimAngpauNow',
      component: ClaimAngPaoNowView,
    },
    {
      path: '/promotion/scratch-and-win',
      name: 'scratchAndWin',
      component: ScratchAndWinView,
    },
    {
      path: '/promotion/lucky-7th-bonus',
      name: 'lucky7Bonus',
      component: Lucky7BonusView,
    },
    {
      path: '/promotion/welcome-bonus',
      name: 'welcomeBonus',
      component: WelcomeBonusView,
    },
    {
      path: '/promotion/marc-marquez-giveaway',
      name: 'marcMarquezGiveaway',
      component: MarcMarquezGiveawayView,
    },
    {
      path: '/promotion/rescue-bonus',
      name: 'rescueBonus',
      component: RescueBonusView,
    },

    {
      path: '/register',
      name: 'register',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: RegisterView,
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: LoginView,
    },
  ],
})

export default router
