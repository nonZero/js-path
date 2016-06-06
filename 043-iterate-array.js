// Iterating over an array
"use strict";

var arr = [
    'banana',
    'apple',
    'melon',
    'pear',
    'orange'
];

// The classic way:
for (var i = 0; i < arr.length; i++) {
    console.log(i, arr[i]);
}

// The functional way:
arr.forEach(function (v, i) {
    console.log(i, v);
});
