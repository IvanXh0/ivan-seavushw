// HOMEWORK #3

// Write a javascript function that:

//     When given any array of strings (should work with array with any number of elements)
//     It will create one big string and return it
//     Ex:["Hello", "there", "students", "of", "SEDC", "!"]
//     Result: "Hello there students of SEDC!"

function createBigString(strings) {
  const bigString = strings.join(" ");
  return bigString;
}

const bigString = ["Hello", "my", "name", "is", "Ivan"];

console.log(createBigString(bigString));

console.log(
  "==================================================================="
);
