module.exports = {
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  extends: [
    'eslint-config-airbnb-base',
  ].concat([
    './rules/best-practices',
    './rules/errors',
    './rules/es6',
    './rules/style',
    './rules/variables',
    './rules/import',
  ].map(require.resolve)),
  env: {
    es6: true,
  },
  globals: {},
  rules: {},
};
