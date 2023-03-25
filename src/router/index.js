import { createRouter, createWebHistory } from 'vue-router';
import CatalogMain from '@/components/catalog/CatalogMain.vue';
import PricesPage from '@/components/PricesPage.vue';

const routes = [
  {
    path: '/catalog',
    name: 'catalog',
    component: CatalogMain,
  }, {
    path: '/prices',
    name: 'price-page',
    component: PricesPage,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
