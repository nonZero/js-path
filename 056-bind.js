// Bind

"use strict";
// But, `call` and `apply` are only temporary. When we want it to stick, we can
// use `bind`.

var myObj = {
    myString: "Hello world!"
};

var f = function (s) {
    console.log(this.myString + s);
};

var boundFunc = f.bind(myObj);
boundFunc(" And Hello Saturn!"); // = "Hello World! And Hello Saturn!"
