import { createRouter, createWebHistory } from 'vue-router'

import Home from './views/HomePage.vue'
import Contact from './views/ContactPage.vue'
import Booking from './views/BookingPage.vue'
import Legal from './views/LegalPage.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/kontakt', component: Contact },
  { path: '/termin', component: Booking },
  { path: '/rechtliches', component: Legal },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
