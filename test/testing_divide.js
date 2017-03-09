const should  = require('chai').should()
const divide  = require('../features/divide')

describe('Divide: a + b', () => {
  it('Testing 2 params', () => {
    divide(100).should.equal('It should 2 params!');
  }),
  it('Testing type of params are numbers', () => {
    divide("100", "5").should.equal('Should be a number!');
  }),
  it('Should return 20', () => {
    divide(100, 5).should.equal(20);
  })
})
