// this

"use strict";

// When functions attached to an object are called, they can access the object
// they're attached to using the `this` keyword.
var myObj = {
    myString: "Hello world!",
    myFunc: function () {
        return this.myString;
    }
};
console.log(myObj.myFunc()); // = "Hello world!"

// !!!!!!!!!HOWEVER!!!!!!!!!!!

// What this is set to has to do with how the function is called, not where
// it's defined. So, our function doesn't work if it isn't called in the
// context of the object.
var myFunc = myObj.myFunc;
myFunc(); // = "this" is undefined:
// in strict mode this raises an error.
// when not in strict mode, this **fails silently**!!!!!

// Inversely, a function can be assigned to the object and gain access to it
// through `this`, even if it wasn't attached when it was defined.
var myOtherFunc = function () {
    return this.myString.toUpperCase();
};
myObj.myOtherFunc = myOtherFunc;
console.log(myObj.myOtherFunc()); // = "HELLO WORLD!"

