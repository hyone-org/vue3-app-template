import {
  BText, BButton, BCard, BInput, BIcon, BSelect, BLoading, BAvatar, BSuspense,
} from '@components/ui/atoms';

import { BToast } from '@components/ui/molecules';

const BuserPartnersUIPlugin = {
  install(Vue) {
    this.installAtoms(Vue);
    this.installMolecules(Vue);
  },
  installAtoms(Vue) {
    Vue.component('BButton', BButton);
    Vue.component('BCard', BCard);
    Vue.component('BText', BText);
    Vue.component('BInput', BInput);
    Vue.component('BIcon', BIcon);
    Vue.component('BSelect', BSelect);
    Vue.component('BLoading', BLoading);
    Vue.component('BAvatar', BAvatar);
    Vue.component('BSuspense', BSuspense);
  },
  installMolecules(Vue) {
    // Molecules
    Vue.component('BToast', BToast);
  },
};

export { BuserPartnersUIPlugin };
