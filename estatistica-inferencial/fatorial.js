//fatorial
/*
 * created by williamdias
 * */
'use strict';
import fatorial from './fatorial';
export default (n) => (n == 0) ? 1 : n * fatorial(n-1);

