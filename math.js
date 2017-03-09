module.exports = {
  add: function (a,b) {
    if(a == null || b == null){
      return "must 2 numbers"
      }
      else if(isNaN(a) || isNaN(b)){
        return "variabel must be number"
      }else{
        return a+b;
    }
  },
  substract: function (a,b) {
    if(a == null || b == null){
      return "must 2 numbers"
      }
      else if(isNaN(a) || isNaN(b)){
        return "variabel must be number"
      }else{
        return a-b;
    }
  },
  multiply:function (a,b) {
    if(a == null || b == null){
      return "must 2 numbers"
      }
      else if(isNaN(a) || isNaN(b)){
        return "variabel must be number"
      }else{
        return a*b;
    }
  },
  devide:function (a,b){
    if(a == null || b == null){
      return "must 2 numbers"
      }
      else if(isNaN(a) || isNaN(b)){
        return "variabel must be number"
      }else{
        return a/b;
    }
  },
  exponent:function (a) {
    if(isNaN(a)){
      return "variabel must be number"
    }else{
      return Math.pow(a,2);
    }
  },
  root:function (a) {
    if(isNaN(a)){
      return "variabel must be number"
    }else{
      return Math.sqrt(a);
    }
  }
}
