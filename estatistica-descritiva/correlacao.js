//correlacao
"use strict";
var covariancia = require('./covariancia');
var desviopadrao = require('./desviopadrao');
function correlacao(arrayX,arrayY) {
  return covariancia(arrayX,arrayY)/desviopadrao(arrayX)*desviopadrao(arrayY)
}
module.exports = correlacao;
var k = [1,2,3,4];
var t = [7,8,5,7];
console.log(correlacao(k,t));
