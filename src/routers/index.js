import { createRouter, createWebHistory } from 'vue-router';

import Tree from "@/pages/TreePage.vue";
import Table from "@/pages/TablePage.vue";
import Home from "@/pages/Home.vue"; 

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home 
    },
    {
      path: '/tree',
      name: 'tree',
      component: Tree
    },
    {
      path: '/table',
      name: 'table',
      component: Table
    },
  ]
});

const routerFactory = () => {
  return router;
};

export default routerFactory;
