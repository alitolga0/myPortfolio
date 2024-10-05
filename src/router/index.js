import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/Home.vue';
import mAbout from '../views/About.vue';
import ServicesPage from '../views/Services.vue'; 
import ContactPage from '../views/Contact.vue';  

const routes = [
  {
    path: '/',
    name: 'Anasayfa',
    component: HomePage,
  },
  {
    path: '/about',
    name: 'Hakkımda',
    component: mAbout,
  },
  {
    path: '/services', 
    name: 'Hizmetler',
    component: ServicesPage, 
  },
  {
    path: '/contact',
    name: 'Bize Ulaşın',
    component: ContactPage, 
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
