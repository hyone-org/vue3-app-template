import { createRouter, createWebHistory } from 'vue-router';
import { routes } from './routes';
import { beforeEachRoute } from './before-each-route';

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(beforeEachRoute);

export { router };
