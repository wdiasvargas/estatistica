'use strict';
import poisson from './poisson';
console.info(poisson(0,0.2,4));
console.info(poisson(1,0.2,4));
console.info(poisson(2,0.2,4));
console.info(poisson(3,0.2,4));

console.info("P(defeitos>=4)",(1-(poisson(0,0.2,4))-poisson(1,0.2,4))-poisson(2,0.2,4)-poisson(3,0.2,4));
