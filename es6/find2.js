const numbers = [234, 23, 2235, 56, 45, 67, 11];
const least = numbers.find((currentValue, currentIndex, arr) => {
  //   return v < 15;
  console.log(arr);
  return currentValue < 50;
});
console.log(least);
