'use strict';

const expect = require('chai').expect;
const fizzBuzz = require('../index');
const range = require('lodash.range');

const expectedOutput = require('./fixtures').expectedOutput;

it('should return "Fizz" when passed 3', () => {
  expect(fizzBuzz(3)).to.equal('Fizz');
});

it('should return "Buzz" when passed 5', () => {
  expect(fizzBuzz(5)).to.equal('Buzz');
});

it('should return "FizzBuzz" when passed 15', () => {
  expect(fizzBuzz(15)).to.equal('FizzBuzz');
});

it('should return correctly for all integers between 1 and 100', () => {
  expect(range(1, 101).map(i => fizzBuzz(i))).to.deep.equal(expectedOutput);
});
