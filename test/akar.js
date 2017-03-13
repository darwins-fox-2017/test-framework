'use strict'
const should = require('chai').should()
const akar = require('../fitur/fiturAkar')

describe('Pengecekan fitur akar', () => {
  it('harus mengembalikan 3 ', () => {
    akar(9).should.equal(3)
  })

  it('inputan harus number', () => {
    akar('2').should.equal('inputan harus number')
  })
})
