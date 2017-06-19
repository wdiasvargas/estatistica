//binomial
/*
 * created by williamdias
 * */
'use strict';
import combinacao from './combinacao';
export default (n,k,p) => combinacao(n,k) * Math.pow(p,k) * Math.pow(1-p,(n-k));


