// .call() and .apply()

// We can also specify a context for a function to execute in when we invoke it
// using `call` or `apply`.

var myObj = {
    myString: "Hello world!"
};

var anotherFunc = function (s) {
    console.log(this.myString + s);
};
anotherFunc.call(myObj, " And Hello Moon!"); // = "Hello World! And Hello Moon!"

// The `apply` function is nearly identical, but takes an array for an argument
// list.

anotherFunc.apply(myObj, [" And Hello Sun!"]); // = "Hello World! And Hello Sun!"

// This is useful when working with a function that accepts a sequence of
// arguments and you want to pass an array.

console.log(Math.min(42, 6, 27)); // = 6
console.log(Math.min([42, 6, 27])); // = NaN (uh-oh!)
console.log(Math.min.apply(Math, [42, 6, 27])); // = 6

