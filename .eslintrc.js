module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    'vue/setup-compiler-macros': true,
  },
  extends: ['airbnb-base', 'plugin:vue/base', 'plugin:vue/vue3-recommended', 'plugin:storybook/recommended'],
  rules: {
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    'import/no-unresolved': 'off',
    'no-unused-vars': ['error', {
      argsIgnorePattern: '^_',
    }],
    'max-len': ['error', {
      code: 120,
      tabWidth: 2,
      ignoreUrls: true,
    }],
  },
};
