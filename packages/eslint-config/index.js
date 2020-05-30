module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    "prettier"
  ],
  extends: [
    'eslint-config-airbnb-base',
    'plugin:prettier/recommended',
  ].concat([
    './rules/best-practices',
    './rules/errors',
    './rules/es6',
    './rules/style',
    './rules/variables',
    './rules/import',
    './rules/prettier',
  ].map(require.resolve)),
  env: {
    es6: true,
  },
  globals: {},
  rules: {},
};
