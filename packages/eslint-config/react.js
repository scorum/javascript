module.exports = {
  extends: [
    'airbnb/rules/react',
    'airbnb/rules/react-a11y',
    'airbnb/hooks',
    require.resolve('./rules/react'),
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
