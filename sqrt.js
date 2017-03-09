function sqrt(x){
  if (x) {
     if (typeof x == 'number'){
       return Math.sqrt(x)
     } else {
       return 'Tipe data salah'
     }
  } else {
    return "Paramater Kurang"
  }
}

module.exports = sqrt
