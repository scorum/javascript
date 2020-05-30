module.exports = {
  rules: {
    "padding-line-between-statements": [
      "error",
      { "blankLine": "always", "prev": "block-like", "next": "*" },
      { "blankLine": "always", "prev": "*", "next": "block-like" },
    ],
    "no-multiple-empty-lines": ["error", { "max": 1 }],
    "comma-dangle": ["error", {
      "arrays": "always-multiline",
      "objects": "always-multiline",
      "imports": "always-multiline",
      "exports": "always-multiline",
      "functions": "ignore",
    }],
    "max-len": ["error", 120, 2, {
      "ignoreUrls": true,
      "ignoreComments": false,
      "ignoreRegExpLiterals": true,
      "ignoreStrings": true,
      "ignoreTemplateLiterals": true,
    }],
    "no-mixed-operators": 0,
    "no-underscore-dangle": 0,
    "lines-between-class-members": 0,
    "implicit-arrow-linebreak": 0,
    "no-array-constructor": 0,
  },
};
