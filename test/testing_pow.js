const should  = require('chai').should()
const pow     = require('../features/pow')

describe('Pow: (a, b)', () => {
  it('Testing 2 params', function() {
    pow(10).should.equal('It should 2 params!');
  }),
  it('Testing type of params are numbers', () => {
    pow("100", "2").should.equal('Should be a number!');
  }),
  it('Should return 25', () => {
    pow(5, 2).should.equal(25);
  })
})
