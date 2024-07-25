const numbers = [11, 3, 45, 7, 2, 7, 2, 7, 2];
let sum = numbers.reduce((total, value, index, array) => {
  //   console.log(total);
  return total + value;
}, 10);
console.log(sum);
