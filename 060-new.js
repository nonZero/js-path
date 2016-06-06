// new

// When you call a function with the `new` keyword, a new object is created, and
// made available to the function via the `this` keyword. Functions designed to be
// called like that are called constructors.

"use strict";

var MyConstructor = function () {
    this.myNumber = 5;
};
var myNewObj = new MyConstructor(); // = {myNumber: 5}
myNewObj.myNumber; // = 5


// Another example:

var Point = function (x, y) {
    this.x = x;
    this.y = y;
};

var p1 = new Point(10, 5);
console.log(p1.x, p1.y);
var p2 = new Point(3, 2);
console.log(p2.x, p2.y);


// Another example:

var Point = function (x, y) {
    this.x = x;
    this.y = y;
    this.show = function() {
        console.log(this.x, this.y);
    }
};

var p1 = new Point(10, 5);
p1.show();
var p2 = new Point(3, 2);
p2.show();


