//poisson
/*
 * created by williamdias
 * */
'use strict';

import fatorial from './fatorial';
import E from './E';
export default (k,lambda,t) => (Math.pow(E,(-lambda * t)) * Math.pow((lambda * t),k)) / fatorial(k);

