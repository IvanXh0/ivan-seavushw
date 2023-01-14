// Task 5

// Delete all elements of the array except the numbers

let arr = [5, 12, "someword", undefined, 15, 23, true, "string"];

for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] !== "number") {
    arr.splice(i, i);
  }
}

console.log("Only the numbers from the given array are: ");
console.log(arr);
