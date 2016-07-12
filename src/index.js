'use strict';

/** @module FizzBuzz */

/**
 * Returns 'Fizz' for multiples of 3, 'Buzz' for multiples of 5,
 * and 'FizzBuzz' for multiples of both.
 * @param {Number} i - The integer to test
 * @returns {String}
 * @example
 * fizzBuzz(3)  === 'Fizz'
 * fizzBuzz(5)  === 'Buzz'
 * fizzBuzz(15) === 'FizzBuzz'
 */
module.exports = function fizzBuzz(i) {
  const fizz = !(i % 3);
  const buzz = !(i % 5);

  if (fizz && buzz) { return 'FizzBuzz'; }
  if (fizz)         { return 'Fizz';     }
  if (buzz)         { return 'Buzz';     }

  return String(i);
};
