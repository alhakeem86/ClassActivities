// refactor the functions below into arrow syntax
let myNumber = () => {
  return ((2 ** 2 + 3) % 4) * 14;
};
console.log(myNumber());

let greet = name => {
  return `Hello, ${name}`;
};
console.log(greet("zaid"));

const timeOfDayGreet = (name, timeOfDay) => {
  return `Hello, ${name}, good ${timeOfDay}`;
};
console.log(timeOfDayGreet("ali", "sunday"));

let triple = num => {
  let triple = num * 3;
  return triple / 2;
};
console.log(triple(3));

let sumTowNumber = (num1, num2) => {
  let sum = num1 + num2;
  console.log(`The sum of your numbers is ${sum}.`);
  return sum;
};
console.log(sumTowNumber(4, 7));
