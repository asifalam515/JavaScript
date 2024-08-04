var num2 = 120;
var sum = function () {
  var num1 = 3;
  return function () {
    return num1 + num2;
  };
};
const c = sum();
console.dir(c);
console.log("we are going to learn about closure here in toady video!!!");
