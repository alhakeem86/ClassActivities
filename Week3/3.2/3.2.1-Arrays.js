// create an Array using an Array literal
const myNewArray = ["zaid", "ali"];
// access the 1st item in the Array
const myfirstItem = myNewArray[0];
myNewArray[0];
// access the last item in the Array
const mylastItem = myNewArray[1];
myNewArray[1];
// print the length of the Array
console.log(myNewArray.length);
// use the length property to access the last item in the Array
let mylastitemlength = myNewArray.length - 1;
console.log(mylastitemlength);
// with for...of, loop over the Array, modify the value and add to a different Array
const myloopArray = ["noor", "joy", "sara", "yassen"];
for (let array of myloopArray) {
  console.log(array);
}
