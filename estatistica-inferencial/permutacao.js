//permutacao
/*
 * created by williamdias
 * */
'use strict';
import fatorial from './fatorial';
export default (n,p) => (n) => (p) =>  fatorial(n) / fatorial(p);
