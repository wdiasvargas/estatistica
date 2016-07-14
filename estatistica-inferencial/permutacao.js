'use strict';
var fatorial = require('./fatorial');
function permutacao (k,p) {
  return fatorial(k)/fatorial(p);
}
module.exports = permutacao;
//console.log(permutacao(3,2));
