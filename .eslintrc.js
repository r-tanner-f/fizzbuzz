'use strict';

module.exports = {
    extends: 'airbnb',
    installedESLint: true,
    parserOptions: {
      sourceType: 'script',
      ecmaVersion: 6,
    },
    env: {
      browser: false,
      node: true,
    },
    plugins: [
        'react',
    ],
    rules: {
      'consistent-return': 'off',
      'no-restricted-syntax': ['off', 'ForInStatement'],
      'no-underscore-dangle': 'off',
      indent: ['error', 2],
      'max-len': ['error', {
        ignoreComments: true,
        code: 100
      }],
      'no-multi-spaces': 'off',
      'no-param-reassign': 'off',
      'new-cap': 'off',
      strict: [
        'error',
        'global',
      ],
      'no-console': 'off',
      'guard-for-in': 'off',
      'prefer-rest-params': 'off',
    },
};
