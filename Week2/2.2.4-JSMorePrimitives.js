// create five variables and assign them values
let myName = "Zaid";
let myAge = 38;
let haveChild = true;
let Favorites;
let myPet = null;
// each variable should reference a different primitive data type
// REMEMBER: you should never DELIBERATELY assign "undefined" to a variable

// print the type of each variable in this order:
// string, number, boolean, undefined, null
typeof myName;
typeof myAge;
typeof haveChild;
typeof Favorites;
typeof myPet;

// create a variable that references a template literal
// inside the template literal, use two of the above variables
console.log(`"hey my name is ${myName} and my age is${myAge} " `);
// reassign the value of the variable that references "null"
myPet = "cat";
// print the value and its type
typeof myPet;
// print a variable that causes a ReferenceError
let otherVariable;
// alter the previous line to no longer cause a ReferenceError
console.log(otherVariable);
