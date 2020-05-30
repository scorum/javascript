module.exports = {
  plugins: [
    "jest",
  ],
  env: {
    jest: true,
    es2020: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
  globals: {
    shallow: false,
  },
  rules: {
    "jest/no-disabled-tests": 2,
    "jest/expect-expect": 2,
    "jest/no-focused-tests": 2,
    "jest/no-identical-title": 2,
    "jest/no-jest-import": 2,
    "jest/valid-expect-in-promise": 2,
    "jest/valid-describe": 2,
    "jest/prefer-to-have-length": 2,
    "jest/prefer-to-be-undefined": 2,
    "jest/prefer-to-be-null": 2,
    "jest/valid-expect": 2,
    "jest/consistent-test-it": [2,
    {
      "fn": "test",
      "withinDescribe": "test"
    }],
  }
};
