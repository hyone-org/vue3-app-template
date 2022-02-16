import { CoreUI } from '@hyone/core-ui';
import '@hyone/core-ui/dist/lib/style.css';

const UIPlugin = {
  install(Vue) {
    CoreUI.install(Vue);
  },
};

export { UIPlugin };
