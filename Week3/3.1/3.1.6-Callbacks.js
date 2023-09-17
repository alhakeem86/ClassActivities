// "regular" functions
function greet(name) {
  return `Hello ${name}!`;
}
function welcome(name) {
  return `${name}, welcome!`;
}
function informAboutSale(name) {
  return `${name}, we're having a sale!`;
}
let a = greet("Laid");
let v = welcome(a);
let d = informAboutSale(v);
// function that takes a callback function as an argument
function getNameAndShowMessage(callback) {
  const name = prompt("Please Enter Your Name: ");
  alert(` ${d} ${callback} `);
}
// pass each "regular" function into getAndShowMessage as a callback function
getNameAndShowMessage("we will call you back");
