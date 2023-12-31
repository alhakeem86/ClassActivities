// bracket and dot notation
const key = "1";
const obj = {
  key: console.log("the key is 'key'"),
  1: console.log("the key is 1")
};

// what will the following lines print?
obj[key];
//"the key is 1"//
obj.key;
//"the key is 'key'"//
obj["key"];
//"the key is 'key'"//

// Create an object with at least four properties, each with a different data type.
const movie = {
  id: "tt0084787",
  title: "The Thing",
  rating: "R",
  collection: ["year", "length", "cast"]
};

// Name one of the four properties "collection" and set its value to an Array or Object.
// Access a value in the "collection" property
if (movie.collection) {
  movie.collection.forEach(member => {
    console.log(`collection info: ${member}`);
  });
}
// Practice with nested Arrays and Objects
const keys = ["key", "1", "method", "favorites", "list"];

// Add a method to an Object
let myobj = {
  method: function() {
    return "the key is 'method' and it calls refers to a function";
  }
};
obj.method();

// Fill in your favorite movie, number and color below
let myfavorites = {
  movie: "titanic",
  number: 1,
  color: "red"
};
console.log(myfavorites.movie);
// Add a list (a.k.a array) to an Object
let objlist = ["a", "b", 3, "d", ["e", 4, 5], { f: 6 }];
// Using the 'for...in' loop to iterate over 'obj' object ...
// how many lines will the following statement print?
//6 lines//
// what do you expect to see on each line?
//Key is: 0 and value is: a
//Key is: 1 and value is: b
// Key is: 2 and value is: 3
// Key is: 3 and value is: d
// Key is: 4 and value is: e,4,5
//Key is: 5 and value is: [object Object]
for (let key in objlist) {
  console.log(`Key is: ${key} and value is: ${objlist[key]}`);
}
console.log(`${objlist[3]} , ${objlist[4][1]} , ${objlist[5]}`);

// Use a template literal to print a sentence about your favorite things

// Access the values "b", 4, and 6 from obj.list
