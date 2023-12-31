import { createRouter, createWebHistory } from 'vue-router';
import Detalhes from '../components/DetalhesPessoa.vue';

const routes = [
 
  {
    path: '/detalhes/:id', 
    name: 'detalhes',
    component: Detalhes, 
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
