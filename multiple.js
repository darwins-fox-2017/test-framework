function multiple(x, y){
  if (x && y) {
     if (typeof x == 'number' && typeof y == 'number'){
       return x * y;
     } else {
       return 'Tipe data salah'
     }
  } else {
    return "Paramater Kurang"
  }
}

module.exports = multiple
