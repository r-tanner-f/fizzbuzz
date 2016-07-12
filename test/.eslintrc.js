'use strict';

module.exports = {
  extends: '../.eslintrc.js',
  plugins: ['mocha'],
  env: {
    mocha: true,
  },
  rules: {
    'mocha/no-skipped-tests': 'error',
    'mocha/no-exclusive-tests': 'error',
    'mocha/no-pending-tests': 'error',
    'mocha/handle-done-callback': 'error',
    'mocha/no-global-tests': 'error',
  }
}
