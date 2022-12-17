// Homework #5

// Title: Looping structures

// Description: Write a JavaScript function that will return:
// The sum of the MAX and MIN numbers from an array with numbers
// Ex: arr = [3, 5, 6, 8, 11]
// Output: Max: 11, Min: 3, Sum: 14

function sumMaxMin(numberArray) {
  const minNumber = Math.min(...numberArray);
  const maxNumber = Math.max(...numberArray);
  let result = minNumber + maxNumber;
  return result;
}

console.log(sumMaxMin([2, 4, 5, 6, 15, 22]));

console.log(
  "==================================================================="
);
