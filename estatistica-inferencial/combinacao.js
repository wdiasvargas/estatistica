'use strict';
var fatorial = require('./fatorial');
function combinacao(n,p) {
  return fatorial(n)/(fatorial(p)*fatorial((n-p)))

}
module.exports = combinacao;
//console.log(combinacao(6,4));
