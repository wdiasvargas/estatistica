//covariancia
/*
 * created by williamdias
 * */
"use strict";
import variancia from './variancia';
export default (arrayX,arrayY) => (variancia(arrayX) * variancia(arrayY)) / arrayX.length - 1;
