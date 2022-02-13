import { ApplicationLayout, PinkEmptyLayout } from '@layouts';

const LayoutPlugin = {
  install(Vue) {
    // eslint-disable-next-line vue/multi-word-component-names
    Vue.component('ApplicationLayout', ApplicationLayout);
    Vue.component('PinkEmptyLayout', PinkEmptyLayout);
  },
};

export { LayoutPlugin };
