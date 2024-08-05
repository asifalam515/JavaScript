// function bankAccount(initialBalance) {
//   var balance = initialBalance;
//   return function () {
//     return balance;
//   };
// }
// var account = bankAccount(1000);
// console.log(account());
// account.balance = 40000;
(function () {
  var num1 = 3;
  var num2 = 10;
  var sum = function () {
    return function () {
      return num1 + num2;
    };
  };
  var myFunction = sum();
  console.dir(myFunction);
  console.dir(myFunction());
  num1 = 10;
  num2 = 20;
  console.dir(myFunction);
  console.dir(myFunction());
})();
