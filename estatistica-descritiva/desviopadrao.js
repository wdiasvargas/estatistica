//desviopadrao
/*
* created by williamdias
* */
"use strict";
var variancia = require('./variancia');
function desviopadrao(array) {
  return Math.sqrt(variancia(array))
}
module.exports = desviopadrao;
// var k = [1,2,3,4];
// console.log(desviopadrao(k));
