"use strict";
var variancia = require('./variancia');
function covariancia(arrayX,arrayY) {
  return (variancia(arrayX)*variancia(arrayY))/arrayX.length - 1;
}
module.exports = covariancia;

var k = [1,2,3,4];
var t = [7,8,5,7];
console.log(covariancia(k,t));
