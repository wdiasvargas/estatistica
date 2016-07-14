'use strict';
var fatorial = require('./fatorial');
function permutacao (n,p) {
  return fatorial(n)/fatorial((n-p));
}
module.exports = permutacao;
console.log(permutacao(3,2));
