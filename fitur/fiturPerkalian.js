'use strict'

let perkalian = (a, b) => {
  if (!b) {
    return '2 parameter harus di isi'
  } else if (typeof a !== 'number' || typeof b !== 'number') {
    return 'inputan harus number'
  } else {
    return a * b
  }
}

module.exports = perkalian
