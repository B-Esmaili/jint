// Copyright 2009 the Sputnik authors.  All rights reserved.
/**
 * Every execution context has associated with it a scope chain.
 * A scope chain is a list of objects that are searched when evaluating an
 * Identifier
 *
 * @path ch10/10.2/10.2.2/S10.2.2_A1_T3.js
 * @description Checking scope chain containing function declarations
 */

var x = 0;

function f1(){
  function f2(){
    return x;
  };
  return f2();
  
  var x = 1;
}

if(!(f1() === undefined)){
  $ERROR("#1: Scope chain disturbed");
}


