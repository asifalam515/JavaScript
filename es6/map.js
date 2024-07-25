const numbers = [11, 3, 45, 7, 2, 7, 2, 7, 2];
const result = numbers.map((value, index, array) => {
  return value * 2;
});
console.log(result);
console.log(numbers); //actual array didn't change
