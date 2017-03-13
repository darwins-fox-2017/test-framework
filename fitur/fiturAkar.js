'use strict'

let akar = (a) => {
  if (typeof a !== 'number') {
    return 'inputan harus number'
  } else {
    return Math.sqrt(a)
  }
}

module.exports = akar
