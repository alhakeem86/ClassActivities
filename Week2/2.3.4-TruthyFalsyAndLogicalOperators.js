// Logical Operators
// what do you expect each line to print?
console.log(true && false);
//false//
console.log(true || false);
//true or false//
console.log(!true);
//false//
console.log(!(true && false));
//true//
console.log(false || !false);
//true or false//

// Logical Operators and Truthy/Falsy
// ? what do you expect each line to print?
console.log(undefined || null);
//undefined or null//
console.log(!``);
//undifined//
console.log(!(1 && "false"));
//false//
console.log(NaN || !"true");
//false//
// Set the age variable below equal to a number,
// then use conditional operators to construct an expression that returns...
// "full menu" if the age is over 10,
// and "kids menu" if the age is less than 10

let age;
age = 38;
if (age > 10) {
  console.log("full menu.");
} else {
  console.log("kids menu.");
}

// Using only logical operators (no comparison operators),
// write an if statement that prints...
//  "The number is zero" when num is 0.

let num = 0;
if (num === 0) {
  console.log("the number is zero");
} else {
  console.log("the number is not zero");
}

// Write your if statement here *
