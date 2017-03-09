const should  = require('chai').should()
const substract  = require('../features/substract')

describe('Substract: a - b', () => {
  it('Testing 2 params', () => {
    substract(10).should.equal('It should 2 params!');
  }),
  it('Testing type of params are numbers', () => {
    substract("10", "5").should.equal('Should be a number!');
  }),
  it('Should return 5', () => {
    substract(10, 5).should.equal(5);
  })
})
