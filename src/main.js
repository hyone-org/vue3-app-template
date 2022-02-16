import { createApp } from 'vue';
import { router } from '@router';
import { UIPlugin, LayoutPlugin } from '@plugins';
import Maska from 'maska';
import App from './app.vue';

createApp(App)
  .use(router)
  .use(UIPlugin)
  .use(LayoutPlugin)
  .use(Maska)
  .mount('#root');
