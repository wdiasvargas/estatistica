//correlacao
/*
 * created by williamdias
 * */
"use strict";
import covariancia  from './covariancia';
import desviopadrao from './desviopadrao';
export default (arrayX,arrayY) => (covariancia(arrayX,arrayY) / desviopadrao(arrayX) * desviopadrao(arrayY));

