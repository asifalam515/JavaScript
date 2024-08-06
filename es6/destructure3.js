const numbers = [1, 2, 4, 5, 55, [12, 100, 24], 8, 10, 44];
const [, , , , , [, hundred, age], , ,] = numbers;
console.log(hundred);
// swap using destructuring
var a = 10;
var b = 20;

[b, a] = [a, b];
console.log(a);
console.log(b);
