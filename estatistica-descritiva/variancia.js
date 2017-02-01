'use strict';
var sigma = require('./sigma');
var quadrado = require('./quadrado');

function variancia (array) {
  return ((sigma(quadrado(array)) - (Math.pow(sigma(array),2))/(array.length))/(array.length-1));
 }
module.exports = variancia;
