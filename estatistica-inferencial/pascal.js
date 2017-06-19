//pascal
/*
 * created by williamdias
 * */
'use strict';
import combinacao from './combinacao';
export default (x,r,p) => combinacao((x-1),(r-1))*Math.pow(p,r)*Math.pow((1-p),(x-r));
