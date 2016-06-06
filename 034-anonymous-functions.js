// Anonymous Functions

// Instead of using function as a statement:
// function myFunction(){
//     return 123;
// }
// functions can also be declared as expressions:

var myFunction = function () {
    return 123;
};
console.log(myFunction()); //  123

// NOTICE:
// 1. function(){} is an expression, hence the semicolon.
// 2. There are some implications when a function is declared in
//    as a statement - function hoisting, which means you can
//    call the function before it is declared.
//    this does *NOT* work with function expressions.
var f = function f() {
    return "Hello";
};


// We define the higher order function again...
var callTwice = function (f) {
    f();
    f();
};

// Anonymous functions are heavily used in javascript:
callTwice(function () {
    console.log("Hi!");
});

// Function expressions can still have names for referencing themself,
// for readability, and for easier debugging:
callTwice(function sayHi() {
    console.log("Hi!");
});
