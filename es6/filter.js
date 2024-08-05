const numbers = [1, 2, 3, 4, 4, 5, 76, 87, 8, 23];
const greaterThan10 = numbers.filter((currentValue, currentIndex, array) => {
  return currentValue > 10;
});
console.log(greaterThan10);
