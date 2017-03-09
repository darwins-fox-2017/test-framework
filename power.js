function power(x){
  if (x) {
     if (typeof x == 'number'){
       return x * x;
     } else {
       return 'Tipe data salah'
     }
  } else {
    return "Paramater Kurang"
  }
}

module.exports = power
