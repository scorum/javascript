module.exports = {
  plugins: [
    "prettier",
  ],
  extends: [
    'plugin:prettier/recommended',
    require.resolve('../rules/prettier'),
  ],
};
