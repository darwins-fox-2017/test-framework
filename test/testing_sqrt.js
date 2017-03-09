const should  = require('chai').should()
const sqrt    = require('../features/sqrt')

describe('Sqrt: (a)', () => {
  it('Testing type of params are numbers', () => {
    sqrt("25").should.equal('Should be a number!');
  }),
  it('Should return 5', () => {
    sqrt(25).should.equal(5);
  })
})
