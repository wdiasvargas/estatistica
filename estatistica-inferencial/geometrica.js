'use strict';
function geometrica (x,p){
  var q = 1-p;
    return p * (Math.pow(q,x-1));
  }
module.exports = geometrica;
