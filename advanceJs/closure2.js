function temporary() {
  let counter = 9;
  return function () {
    return counter + 1;
  };
}

const x = temporary();
// console.log(x);
const ans = x();
console.log(ans);
