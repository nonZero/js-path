// Variables

// Variables are declared with the `var` keyword. JavaScript is dynamically
// typed, so you don't need to specify type. Assignment uses a single `=`
// character.
var someVar = 10;
console.log(someVar);

someVar = 5;
console.log(someVar);

// There's shorthand for performing math operations on variables:
someVar += 5; // equivalent to someVar = someVar + 5; someVar is 10 now
someVar *= 10; // now someVar is 100

// and an even-shorter-hand for adding or subtracting 1
someVar++; // now someVar is 101
someVar--; // back to 100

// Variables declared without being assigned to are set to undefined.
var anotherVar; // = undefined
console.log(anotherVar);

// If you want to declare a couple of variables, then you could use a comma
// separator
var a = 2, b = 4;
