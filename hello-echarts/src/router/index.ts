import { createRouter, createWebHistory } from 'vue-router';

export const routes = [
  {
    path: '/',
    redirect: { name: 'DataSet' },
  },
  {
    path: '/my-chart',
    name: 'MyChart',
    component: () => import('../views/MyChart.vue'),
  },
  {
    path: '/dataset',
    name: 'DataSet',
    component: () => import('../views/DataSet.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
