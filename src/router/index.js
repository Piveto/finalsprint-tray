// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import FaqView from '../views/FaqView.vue';
import CadastroFaq from '../views/CadastroFaq.vue';
import CadastroAdmin from '../views/CadastroAdmin.vue';
import ChatBot from '../views/ChatBot.vue';
import Sobre from '../views/Sobre.vue';
import Tour from '../views/Tour.vue';
import Login from '../views/Login.vue';

const isAuthenticated = () => {
  return !!localStorage.getItem('token');
};

const routes = [
  {
    path: '/',
    name: 'faq',
    component: FaqView,
    meta: { requiresAuth: true }
  },
  {
    path: '/cadastrofaq',
    name: 'cadastro',
    component: CadastroFaq,
    meta: { requiresAuth: true }
  },
  {
    path: '/cadastroadmin',
    name: 'cadastroadmin',
    component: CadastroAdmin,
    meta: { requiresAuth: true }
  },
  {
    path: '/chatbot',
    name: 'chatbot',
    component: ChatBot,
    meta: { requiresAuth: true }
  },
  {
    path: '/sobre',
    name: 'sobre',
    component: Sobre,
    meta: { requiresAuth: true }
  },
  {
    path: '/tour',
    name: 'tour',
    component: Tour,
    meta: { requiresAuth: true }
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!isAuthenticated()) {
      next({ path: '/login', query: { redirect: to.fullPath } });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
