'use strict'
const should = require('chai').should()
const pengurangan = require('../fitur/fiturPengurangan')

describe('Pengecekan fitur pengurangan', () => {
  it('harus mengembalikan 2 apabila 5 - 3 ', () => {
    pengurangan(5, 3).should.equal(2)
  })

  it('tidak boleh memasukan 1 parameter', () => {
    pengurangan(2).should.equal('2 parameter harus di isi')
  })

  it('inputan harus number', () => {
    pengurangan('5', '2').should.equal('inputan harus number')
  })
})
