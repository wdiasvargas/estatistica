//combinacao
/*
 * created by williamdias
 * */
'use strict';
import fatorial from './fatorial';
export default (n,p) => fatorial(n) / (fatorial(p) * fatorial( (n-p)))

