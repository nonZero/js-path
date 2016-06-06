// for - in

// The for/in statement iterates over every property across the entire prototype chain.
var description = "";
var person = {fname:"Paul", lname:"Ken", age:18};
for (var x in person){
    description += person[x] + " ";
}

// To only consider properties attached to the object itself
// and not its prototypes, use the `hasOwnProperty()` check.
var description = "";
var person = {fname:"Paul", lname:"Ken", age:18};
for (var x in person){
    if (person.hasOwnProperty(x)){
        description += person[x] + " ";
    }
}

// For/in should not be used to iterate over an Array where the index order
// is important, as there is no guarantee that for/in will return the indexes
// in any particular order.
