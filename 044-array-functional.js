// Array methods - functional

var arr = [
    'banana',
    'apple',
    'melon',
    'pear',
    'orange'
];

var arr2 = arr.map(function (x) {
    return x.toUpperCase();
});

console.log(arr2);

var arr3 = arr.map(function (x) {
    return x.charAt(0) == "a";
});

console.log(arr3);

var f = function (x) {
    return x.charAt(0) == "a";
};

var arr4 = arr.map(f);
console.log(arr4);

console.log(arr.every(f));
console.log(arr.some(f));
console.log(arr.filter(f));
