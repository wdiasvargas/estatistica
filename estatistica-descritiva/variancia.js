//variancia
/*
 * created by williamdias
 * */
'use strict';
import somatorio from './somatorio';
import quadrado from './quadrado';

export default (array) => ((somatorio(quadrado(array)) - (Math.pow(somatorio(array),2)) / (array.length))/(array.length-1));
