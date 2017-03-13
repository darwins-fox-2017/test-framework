'use strict'
const should = require('chai').should()
const perkalian = require('../fitur/fiturPerkalian')

describe('Pengecekan fitur perkalian', () => {
  it('harus mengembalikan 6 apabila 2 * 3 ', () => {
    perkalian(2, 3).should.equal(6)
  })

  it('tidak boleh memasukan 1 parameter', () => {
    perkalian(2).should.equal('2 parameter harus di isi')
  })

  it('inputan harus number', () => {
    perkalian('2', '3').should.equal('inputan harus number')
  })
})
