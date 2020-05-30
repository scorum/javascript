module.exports = {
  rules: {
    'prettier/prettier': [
      'error',
      {
        printWidth: 120,
        useTabs: false,
        semi: true,
        singleQuote: true,
        quoteProps: 'as-needed',
        jsxSingleQuote: false,
        bracketSpacing: true,
        jsxBracketSameLine: false,
        rangeStart: 0,
        rangeEnd: Infinity,
        requirePragma: false,
        insertPragma: false,
        proseWrap: 'preserve',
        htmlWhitespaceSensitivity: 'css',
        endOfLine: 'lf',
      },
    ],
  },
};
