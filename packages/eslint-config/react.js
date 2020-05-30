const react = require.resolve('./rules/react');

module.exports = {
  extends: [
    'airbnb/rules/react',
    'airbnb/rules/react-a11y',
    'airbnb/hooks',
    './rules/react',
    'prettier/react',
  ],
  parser: 'babel-eslint',
  env: {
    browser: true,
  },
  globals: {
    document: true,
    window: true,
    render: false,
    mount: false,
    React: false,
  },
};
