// Functions

// JavaScript functions are declared with the `function` keyword.
function myFunction1(thing){
    return thing.toUpperCase();
}
console.log(myFunction1("foo")); // = "FOO"

// Note that the value to be returned must start on the same line as the
// `return` keyword, otherwise you'll always return `undefined` due to
// automatic semicolon insertion. Watch out for this when using Allman style.
function myFunction2(){
    return // <- semicolon automatically inserted here
    {thisIsAn: 'object literal'}
}
console.log(myFunction2()); // = undefined


