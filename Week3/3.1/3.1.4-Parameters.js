// Named Parameters
// write a function that takes two named parameters:
// print each named parameter,
// then return the parameters added together
function myTwoParameters(parameter1, parameter2 = 0) {
  console.log(parameter1, parameter2);
  return parameter1 + parameter2;
}
myTwoParameters(20, 60);

// invoke the function and pass in two numbers
myTwoParameters(1, 2);
// invoke the function and pass in more than two numbers
myTwoParameters(1, 2, 3, 4);
// invoke the function and pass in only one number
myTwoParameters(1);
// change the function to set default values for the parameters

// again, invoke the function and pass in only one number
myTwoParameters(1);
// Rest Operator
// add a rest operator to the function's parameters
// add a line to the function's body to print the value of the rest operator
function myRestParameter(parameter1, parameter2, ...parameter3) {
  console.log(`${parameter1}, ${parameter2}`);
  console.log(parameter3);
  return parameter1 + parameter2 + parameter3;
}
myRestParameter(5, 6, 7, 8);
// again, invoke the function and pass in more than two numbers
