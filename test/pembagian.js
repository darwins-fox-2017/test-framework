'use strict'
const should = require('chai').should()
const pembagian = require('../fitur/fiturPembagian')

describe('Pengecekan fitur pembagian', () => {
  it('harus mengembalikan 6 apabila 12 / 2 ', () => {
    pembagian(12, 2).should.equal(6)
  })

  it('tidak boleh memasukan 1 parameter', () => {
    pembagian(12).should.equal('2 parameter harus di isi')
  })

  it('inputan harus number', () => {
    pembagian('12', '2').should.equal('inputan harus number')
  })
})
