import { createRouter, createWebHistory } from 'vue-router';
import CatalogMain from '@/components/catalog/CatalogMain.vue';
import PricesMain from '@/components/prices/PricesMain.vue';

const routes = [
  {
    path: '/',
    name: 'catalog',
    component: CatalogMain,
  }, {
    path: '/prices',
    name: 'price-page',
    component: PricesMain,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
