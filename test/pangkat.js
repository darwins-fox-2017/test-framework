'use strict'
const should = require('chai').should()
const pangkat = require('../fitur/fiturPangkat')

describe('Pengecekan fitur pangkat', () => {
  it('harus mengembalikan 8', () => {
    pangkat(2, 3).should.equal(8)
  })

  it('tidak boleh memasukan 1 parameter', () => {
    pangkat(2).should.equal('2 parameter harus di isi')
  })

  it('inputan harus number', () => {
    pangkat('2', '3').should.equal('inputan harus number')
  })
})
