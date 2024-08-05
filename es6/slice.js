const numbers = [1, 2, 3, 4, 4, 5, 76, 87, 8, 23];
const result = numbers.slice(0, 3);
console.log(result);
console.log(numbers); //it won't change the actual array
const numbers2 = [1, 2, 3, 4, 5];
const ans = numbers2.slice(3, 4);
console.log(ans);
