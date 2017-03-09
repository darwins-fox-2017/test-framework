let should = require('chai').should()
let math = require('../math')

describe("Testing Basic Aritmatik", function () {
  describe("Testing Add", function () {
    it("should return 3 numbers", function () {
      math.add(1,2).should.equal(3)
    })
    it("should return must 2 numbers", function () {
      math.add(2).should.equal("must 2 numbers")
    })
    it("should return variabel must be number", function () {
      math.add("hello",2).should.equal("variabel must be number")
    })
    it("should not return 7", function () {
      math.add(2,3).should.not.equal(7)
    })
  })

  describe("Testing Substract", function () {
    it("should return 5 numbers", function () {
      math.substract(7,2).should.equal(5)
    })
    it("should return must 2 numbers", function () {
      math.substract(2).should.equal("must 2 numbers")
    })
    it("should return variabel must be number", function () {
      math.substract("hello",2).should.equal("variabel must be number")
    })
    it("should not return 7", function () {
      math.substract(7,3).should.not.equal(7)
    })
  })

  describe("Testing Multiply", function () {
    it("should return 14 numbers", function () {
      math.multiply(7,2).should.equal(14)
    })
    it("should return must 2 numbers", function () {
      math.multiply(2).should.equal("must 2 numbers")
    })
    it("should return variabel must be number", function () {
      math.multiply("hello",2).should.equal("variabel must be number")
    })
    it("should not return 7", function () {
      math.multiply(7,3).should.not.equal(7)
    })
  })

  describe("Testing Devide", function () {
    it("should return 4 numbers", function () {
      math.devide(8,2).should.equal(4)
    })
    it("should return must 2 numbers", function () {
      math.devide(2).should.equal("must 2 numbers")
    })
    it("should return variabel must be number", function () {
      math.devide("hello",2).should.equal("variabel must be number")
    })
    it("should not return 7", function () {
      math.devide(8,2).should.not.equal(7)
    })
  })

  describe("Testing Exponent", function () {
    it("should return 49 numbers", function () {
      math.exponent(7).should.equal(49)
    })
    it("should return variabel must be number", function () {
      math.exponent("hello").should.equal("variabel must be number")
    })
    it("should not return 56", function () {
      math.exponent(7).should.not.equal(56)
    })
  })

  describe("Testing Root", function () {
    it("should return 6 numbers", function () {
      math.root(36).should.equal(6)
    })
    it("should return variabel must be number", function () {
      math.root("hello").should.equal("variabel must be number")
    })
    it("should not return 7", function () {
      math.root(36).should.not.equal(7)
    })
  })

})
