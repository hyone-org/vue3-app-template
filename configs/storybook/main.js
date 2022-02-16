/* eslint-disable no-param-reassign */
const { rules } = require('../project/rules-config');
const { alias } = require('../project/alias-config');

module.exports = {
  stories: [
    '../../src/**/*.stories.mdx',
    '../../src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-viewport',
    'storybook-design-token',
  ],
  framework: '@storybook/vue3',
  core: {
    builder: 'webpack5',
  },
  webpackFinal: async (config) => {
    config.module.rules = [...config.module.rules, ...rules];

    config.resolve.alias = { ...config.resolve.alias, ...alias };

    return {
      ...config,
    };
  },
};
