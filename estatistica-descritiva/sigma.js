'use strict';
function sigma (array) {
  return array.reduce(function(a, b)  { return a + b })
}
module.exports = sigma
