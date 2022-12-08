const phones = 30;
const priceOfOnePhone = 119.95;
const taxRate = 1.05;

let totalPrice = (priceOfOnePhone * taxRate) * phones;

console.log(`The total cost is $${totalPrice}.`);
alert(`The total cost is $${totalPrice}.`);
