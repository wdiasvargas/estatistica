'use strict';
var sigma = require('./sigma');
var quadrado = require('./quadrado');

function variancia (array) {
  return ((sigma(quadrado(array)) - (Math.pow(sigma(array),2))/(array.length))/(array.length-1));
  //Nao funciona assim pq ?((sigma(quadrado(array))- (quadrado(sigma(array))/(array.length))/(array.length-1))
}
module.exports = variancia;
// var x = [7.0,8.0,5.5,3.0,9.5,10.0,6.0,7.0,7.0,7.5,8.5,5.0,4.5,10.0,6.5]
//
// console.log(variancia(x));
