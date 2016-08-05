'use strict';
function quadrado (array) {
  return array.map(function(a,b){
    return Math.pow(a,2)
  })
}
module.exports = quadrado;
