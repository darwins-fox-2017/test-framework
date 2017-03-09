const should  = require('chai').should()
const add     = require('../features/add')

describe('Add: a + b', () => {
  it('Testing 2 params', () => {
    add(10).should.equal('It should 2 params!');
  }),
  it('Testing type of params are numbers', () => {
    add("5", "5").should.equal('Should be a number!');
  }),
  it('Should return 10', () => {
    add(5, 5).should.equal(10);
  })
})
