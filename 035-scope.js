// Scope

"use strict";

// JavaScript has function scope;
// functions get their own scope...
var x = 100;
var f = function () {
    var x = 9999;
    console.log(x);
};
console.log(x);
f();
console.log(x);

// ...but other blocks do not.
if (true) {
    var i = 5;
}

console.log(i); // = 5 - not undefined as you'd expect in a block-scoped language


// if a function does not declare a variable as local with var, it can still
// access and change "outer" variables.  More on this soon.

var i = 123;
function increase() {
    console.log(i);
    i = 456;
    console.log(i);
}

console.log(i);
increase();
console.log(i);
