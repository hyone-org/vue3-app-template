import { HomePage } from '@pages/home-page';
import { SessionsPage } from '@pages/sessions-page';

const routes = [
  {
    path: '/', component: HomePage, name: 'Home', meta: { layout: 'ApplicationLayout' },
  },
  {
    path: '/sessions', component: SessionsPage, name: 'Session', meta: { layout: 'PinkEmptyLayout' },
  },
];

export { routes };
