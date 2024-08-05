const numbers = [1, 2, 3, 4, 4, 5, 6, 76, 87, 8, 23];
var fIndex = numbers.findIndex((currentValue, currentIndex, array) => {
  //   return !currentValue % 2 == 0;
  return currentIndex > 6;
});
console.log(fIndex);
