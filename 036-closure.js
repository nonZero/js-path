// Closures
"use strict";

// One of JavaScript's most powerful features is closures. If a function is
// defined inside another function, the inner function has access to all the
// outer function's variables, even after the outer function exits.
var outer = function outer() {
    var s = "hello!";

    var inner = function inner() {
        console.log(s);
    };

    return inner;

};

var f = outer();
// outer have already exited!
// the next line calls inner...
f();
// and s is still there!
