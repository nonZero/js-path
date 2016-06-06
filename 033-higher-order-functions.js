// JavaScript functions are first class objects, so they can be reassigned to
// different variable names and passed to other functions as arguments
function myFunction(){
    return 123;
}

var f = myFunction;
console.log(f()); //  123


// Example of a higher order function
function callTwice(f) {
    f();
    f();
}

function sayHi() {
    console.log("Hi!");
}


callTwice(sayHi);

