import { createRouter, createWebHistory } from 'vue-router';
import multiguard from 'vue-router-multiguard';
import { routes } from './routes';
import { authGuard } from './auth-guard';
import { setTitleByMeta } from './set-title-by-meta';

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(
  multiguard([
    setTitleByMeta,
    authGuard,
  ]),
);

export { router };
