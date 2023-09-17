// Follow the steps below to create a **while** loop that TOTALS the numbers from 1 to 100

// 1) create a variable to represent the current number
let currentNum = 0;
// 2) create a variable to represent the current total
let currentTotal = 0;
// 3) write a while loop that sums the numbers from 1 to 100
// Now using the same variables you created in steps 1 and 2, create a **for** loops that TOTALS the numbers from 1 to 100

// 1) write a for loop that sums the numbers from 1 to 100

while (currentNum < 99) {
  currentNum++;
  // eslint-disable-next-line no-unused-vars
  currentTotal = currentNum;
  console.log(currentNum);
}

for (let newcurrentNum = 0; newcurrentNum <= 100; newcurrentNum++) {
  console.log(newcurrentNum);
}
