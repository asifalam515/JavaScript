const numbers = [1, 23, 345, 6];
const foundIndex = numbers.findIndex(
  (currentValue, index, array) => currentValue > 2
);
console.log(foundIndex);
