'use strict';
var combinacao = require("./combinacao");
function pascal (x,r,p){
  var q = 1 - p;
    return combinacao((x-1),(r-1))*Math.pow(p,r)*Math.pow(q,(x-r));
  }
module.exports = pascal;
