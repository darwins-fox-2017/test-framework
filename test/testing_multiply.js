const should    = require('chai').should()
const multiply  = require('../features/multiply')

describe('Multiply: a * b', () => {
  it('Testing 2 params', () => {
    multiply(10).should.equal('It should 2 params!');
  }),
  it('Testing type of params are numbers', () => {
    multiply("10", "10").should.equal('Should be a number!');
  }),
  it('Should return 100', () => {
    multiply(10, 10).should.equal(100);
  })
})
