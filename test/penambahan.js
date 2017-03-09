'use strict'
const should = require('chai').should()
const pertambahan = require('../fitur/fiturPenambahan')

describe('Pengecekan fitur pertambahan', () => {
  it('harus mengembalikan 5 apabila 2 + 3 ', () => {
    pertambahan(2, 3).should.equal(5)
  })

  it('tidak boleh memasukan 1 parameter', () => {
    pertambahan(2).should.equal('2 parameter harus di isi')
  })

  it('inputan harus number', () => {
    pertambahan('2', '3').should.equal('inputan harus number')
  })
})
