'use strict';
function fatorial (n){
    if(n == 0)
      return 1;
    else {
      return  n * fatorial(n-1);
      }
  }
module.exports = fatorial;
