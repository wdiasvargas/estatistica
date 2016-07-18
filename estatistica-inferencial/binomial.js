'use strict';
var combinacao = require('./combinacao');
function binomial (n,k,p) {
  return combinacao(n,k)*Math.pow(p,k)*Math.pow(1-p,(n-k))
}
module.exports = binomial;
console.log(binomial(6,6,0.1429));
