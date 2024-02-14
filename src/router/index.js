// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';

// Layouts
import HomeLayout from '@/layouts/HomeLayout.vue';
import AppLayout from '@/layouts/AppLayout.vue';

// Views para HomeLayout
import Home from '@/views/LandingPage/Home.vue';
import Faq from '@/views/LandingPage/Faq.vue';
import Aboutus from '@/views/LandingPage/Aboutus.vue';
import Privacy from '@/views/LandingPage/Privacy.vue';
import Cookies from '@/views/LandingPage/Cookies.vue';
import Legal from '@/views/LandingPage/Legal.vue';
import Support from '@/views/LandingPage/Support.vue';
import Contact from '@/views/LandingPage/Contact.vue';
import Decalogue from '@/views/LandingPage/Decalogue.vue';

// Views para AppLayout
import Feed from '@/views/App/Feed.vue';
import Profile from '@/views/App/Profile.vue';
import FamProfile from '@/views/App/FamProfile.vue';
import Create from '@/views/App/Create.vue';
import Invitation from '@/views/App/Invitation.vue';
import Messages from '@/views/App/Messages.vue';
import Notifications from '@/views/App/Notifications.vue';
import DecalogueApp from '@/views/App/DecalogueApp.vue';
import Settings from '@/views/App/Settings.vue';

// Otras Views
import Signup from '@/views/Signup/Signup.vue';
import Login from '@/views/Login/Login.vue';

// Aquí estaría tu lógica para manejar la autenticación y redirecciones
// por ahora la omitiremos para simplificar el ejemplo

const routes = [
  {
    path: '/',
    component: HomeLayout,
    children: [
      { path: '', component: Home },
      { path: 'faq', component: Faq },
      { path: 'aboutus', component: Aboutus },
      { path: 'privacy', component: Privacy },
      { path: 'cookies', component: Cookies },
      { path: 'legal', component: Legal },
      { path: 'support', component: Support },
      { path: 'contact', component: Contact },
      { path: 'decalogue', component: Decalogue },
      // ... otras rutas que utilizan HomeLayout ...
    ],
  },
  {
    path: '/signup',
    component: Signup
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/app',
    component: AppLayout,
    children: [
      { path: '', component: Feed },
      { path: 'profile', component: Profile },
      { path: 'profile/:id', component: FamProfile },
      { path: 'create', component: Create },
      { path: 'invitation', component: Invitation },
      { path: 'messages', component: Messages },
      { path: 'notifications', component: Notifications },
      { path: 'decalogue', component: DecalogueApp },
      { path: 'settings', component: Settings },
      // ... otras rutas que utilizan AppLayout ...
    ],
  },
  // ... más rutas ...
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
