//fatorial
/*
 * created by williamdias
 * */
'use strict';
import fatorial from './fatorial';
export default (n) => (f=[]) => (n == 0 || n == 1)? 1: (f[n] > 0)? f[n]:f[n] = (n * fatorial(n - 1)(f));
