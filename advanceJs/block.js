// block hoisting for var
// var a = 10;
// {
//   // compound statement
//   var a = 100;
//   let b = 20;
//   const c = 200;
//   console.log(a);
// }
// {
//   a = 200;
// }
// console.log(a);

// block hoisting for let and const

// let a = 100;
// {
//   let a = 10;
//   console.log(a);
// }
// console.log(a);

// legal and illegal shadowing
const a = 100;
{
  const a = 20;
  console.log(a);
}
console.log(a);
if (10 < 20) console.log("10 is lesser than 20"); //js expect one statement here
// by grouping or using block we can use multiple statement
