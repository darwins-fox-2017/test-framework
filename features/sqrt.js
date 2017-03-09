const sqrt = (a) => {
  if (typeof a !== "number") {
    return 'Should be a number!'
  } else {
    return Math.sqrt(a)
  }
}

module.exports = sqrt
