import { app } from '@storybook/vue3';
import { UIPlugin } from '@plugins/ui-plugin';
import Maska from 'maska';
import { transformSource, tokenFiles } from './helper';

app.use(UIPlugin).use(Maska);

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    expanded: true,
  },
  docs: {
    transformSource,
  },
  designToken: {
    files: tokenFiles,
  },
};
