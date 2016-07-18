'use strict';
var poisson = require('./poisson');
console.log(poisson(0,0.2,4));
console.log(poisson(1,0.2,4));
console.log(poisson(2,0.2,4));
console.log(poisson(3,0.2,4));
console.log("P(defeitos>=4)",(1-(poisson(0,0.2,4))-poisson(1,0.2,4))-poisson(2,0.2,4)-poisson(3,0.2,4));
