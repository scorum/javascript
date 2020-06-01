module.exports = {
  rules: {
    'import/prefer-default-export': 0,
    'import/no-extraneous-dependencies': 0,
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling'],
      },
    ],
  },
};
