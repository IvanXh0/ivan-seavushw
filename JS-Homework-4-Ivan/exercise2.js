function findNumber(array, type) {
  let result = [];
  if (type === "even") {
    for (let num of array) {
      if (num % 2 === 0) {
        result.push(num);
      }
    }
    return result;
  } else if (type === "odd") {
    for (let num of array) {
      if (num % 2 !== 0) {
        result.push(num);
      }
    }
    return result;
  } else {
    console.log("The type was not correct, please enter odd or even value.");
    return null;
  }
}

console.log(findNumber([2, 4, 6, 8, 10, 11, 15, 16], "even"));

console.log(findNumber([2, 4, 6, 8, 10, 11, 15, 16], "odd"));

console.log(
  "==================================================================="
);
