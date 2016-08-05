//correlacao
var variancia = require('./variancia');
var sigma = require('./sigma');
function correlacao(arrayX,arrayY) {
  return sigma(variancia(arrayX)*variancia(arrayY))/Math.sqrt(variancia(arrayX)*variancia(arrayY))
}
module.exports = correlacao;
var k = [1,2,3,4];
var t = [7,8,5,7];
console.log(correlacao(k,t));
