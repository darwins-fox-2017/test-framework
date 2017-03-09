let mocha = require('mocha')
let should = require('chai').should()
// add
let add = require('../add')
let sub = require('../sub')
let multiple = require('../multiple')
let div = require('../div')
let power = require('../power')
let sqrt = require('../sqrt')

describe('Test fungsi matematikan', function(){
  describe('Penambahan', function(){
    it('Seharusnya mengembalkan 7 jika value paramaternya 3 dan 4', function(){
      add(3,4).should.equal(7)
    })
    it('Harus keluar Paramater Kurang jika salah satu paramater tidak diisi', function(){
      add(3).should.equal('Paramater Kurang')
    })
  })
  describe('Pengurangan', function(){
    it('Seharusnya mengembalkan 5 jika value paramaternya 9 dan 4', function(){
      sub(9,4).should.equal(5)
    })
    it('Harus keluar Paramater Kurang jika salah satu paramater tidak diisi', function(){
      sub(3).should.equal('Paramater Kurang')
    })
    it('Harus keluar "Tipe data salah", jika type data yang dimasukan bukan angka', function(){
      sub("3",2).should.equal('Tipe data salah')
    })
  })
  describe('Perkalian', function(){
    it('Seharusnya mengembalkan 30 jika value paramaternya 5 dan 6', function(){
      multiple(5,6).should.equal(30)
    })
    it('Harus keluar Paramater Kurang jika salah satu paramater tidak diisi', function(){
      multiple(3).should.equal('Paramater Kurang')
    })
    it('Harus keluar "Tipe data salah", jika type data yang dimasukan bukan angka', function(){
      multiple("3",2).should.equal('Tipe data salah')
    })
  })
  describe('Pembagian', function(){
    it('Seharusnya mengembalkan 5 jika value paramaternya 25 dan 5', function(){
      div(25,5).should.equal(5)
    })
    it('Harus keluar Paramater Kurang jika salah satu paramater tidak diisi', function(){
      div(3).should.equal('Paramater Kurang')
    })
    it('Harus keluar "Tipe data salah", jika type data yang dimasukan bukan angka', function(){
      div("3",2).should.equal('Tipe data salah')
    })
  })
  describe('Perpangkatan', function(){
    it('Seharusnya mengembalkan 625 jika value paramaternya 25', function(){
      power(25).should.equal(625)
    })
    it('Harus keluar Paramater Kurang jika salah satu paramater tidak diisi', function(){
      power().should.equal('Paramater Kurang')
    })
    it('Harus keluar "Tipe data salah", jika type data yang dimasukan bukan angka', function(){
      power("3",2).should.equal('Tipe data salah')
    })
  })
  describe('Akar', function(){
    it('Seharusnya mengembalkan 9 jika value paramaternya 3', function(){
      sqrt(9).should.equal(3)
    })
    it('Harus keluar Paramater Kurang jika salah satu paramater tidak diisi', function(){
      sqrt().should.equal('Paramater Kurang')
    })
    it('Harus keluar "Tipe data salah", jika type data yang dimasukan bukan angka', function(){
      sqrt("9").should.equal('Tipe data salah')
    })
  })
})
