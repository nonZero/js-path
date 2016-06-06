// Built-in types like strings and numbers also have constructors that create
// equivalent wrapper objects.
var myNumber = 12;
var myNumberObj = new Number(12);
myNumber == myNumberObj; // = true

// Except, they aren't exactly equivalent.
typeof myNumber; // = 'number'
typeof myNumberObj; // = 'object'
myNumber === myNumberObj; // = false
if (0) {
    // This code won't execute, because 0 is falsy.
}
if (new Number(0)) {
    // This code will execute, because wrapped numbers are objects, and objects
    // are always truthy.
}

// However, the wrapper objects and the regular builtins share a prototype, so
// you can actually add functionality to a string, for instance.
String.prototype.firstCharacter = function () {
    return this.charAt(0);
};
"abc".firstCharacter(); // = "a"
