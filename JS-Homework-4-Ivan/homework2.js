// HOMEWORK #2

// Write a function that will take an array of 5 numbers as an argument and return the sum.

// Print it in the console or in alert

function sumFunc(arrayOfFive) {
  let total = 0;
  for (let num of arrayOfFive) {
    total += num;
  }
  return total;
}

console.log(sumFunc([1, 5, 6, 7, 8]));

// BONUS: Write another function called validateNumber() that checks if a number is a valid number and call it for every number. If one of the numbers of the array is invalid show an error message instead of a result.

function validateNumber(numbers) {
  if (!Array.isArray(numbers)) {
    return "Input must be an array of numbers";
  }

  for (const number of numbers) {
    if (typeof number !== "number" || isNaN(number)) {
      return "Input is not a number";
    }
  }

  return true;
}

console.log(validateNumber([1, 4, 5, 6, 7]));
console.log(validateNumber([1, 4, 5, "test", 7]));
console.log(validateNumber(1));

console.log(
  "==================================================================="
);
