'use strict';
function bernoulli (x,p){
    return Math.pow(p,x)*Math.pow((1-p),(1-x))
  }
module.exports = bernoulli;
