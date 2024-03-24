import { createRouter, createWebHistory } from 'vue-router';

import MainColaps from "@/components/MainColaps.vue";
import MainCheck from "@/components/MainCheck.vue";

const routes = [
  { path: '/', component: MainColaps },
  { path: '/about', component: MainCheck }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;