import { createApp } from 'vue';
import { router } from '@router';
import { BuserPartnersUIPlugin, LayoutPlugin, SentryPlugin } from '@plugins';
import Maska from 'maska';
import App from './app.vue';

createApp(App)
  .use(SentryPlugin, { router })
  .use(router)
  .use(BuserPartnersUIPlugin)
  .use(LayoutPlugin)
  .use(Maska)
  .mount('#root');
