'use strict';
function bernoulli (x,p){
  var q = 1 - p;
    return Math.pow(p,x)*Math.pow(q,(1-x))
  }
module.exports = bernoulli;
