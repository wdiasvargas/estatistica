'use strict';
var fatorial = require('./fatorial.js');
const e = 2.71828;
 function poisson(k,lambda,t) {
  return (Math.pow(e,(-lambda*t))*Math.pow((lambda*t),k))/fatorial(k)
}
module.exports = poisson;
