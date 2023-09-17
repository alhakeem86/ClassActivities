let x = 5;
let y = [1, 2, 30];
let z = {
  id: 100,
  name: "myName",
  loggedIn: false
};
// reassign x, y, and z to FALSY values
x = null;
y = undefined;
z = NaN;
// print x, y, and z
console.log(x);
console.log(y);
console.log(z);

const a = "name";
const b = [];
const c = { id: [] };
// try to reassign a, b, and c to FALSY values
//a = NaN;
//b = undefined;
//b = null;
// using BRACKET NOTATION, assign a value to b;
b[0] = a;
c.id = a;
console.log(c);
console.log(b);
console.log(a);
// using DOT NOTATION, assign a PROPERTY to c

// using DOT NOTATION, assign a METHOD to c

// print a, b, and c
