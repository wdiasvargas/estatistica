'use strict';
<<<<<<< HEAD
var fatorial = require('./fatorial');
function combinacao(n,p) {
  return fatorial(n)/(fatorial(p)*fatorial((n-p)))

}
module.exports = combinacao;
//console.log(combinacao(6,4));
=======
var fatorial = require("./fatorial");
function combinacao (n,p){
    return fatorial(n)/(fatorial(p)*(fatorial((n-p))));
  }
module.exports = combinacao;
>>>>>>> 1e49ed97ce9020bab6a84cb25524fecdf5d39d30
