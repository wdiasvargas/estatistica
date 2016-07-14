'use strict';
var fatorial = require('./fatorial.js');
const e = 2.71828;
 function poisson(k,lambda) {
  return Math.pow(e,(-lambda))*Math.pow((lambda),k)/fatorial(k)
}
module.exports = poisson;
