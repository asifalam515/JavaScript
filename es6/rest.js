const numbers = [1, 2, 3, 4, 5, 6, 7, 7, 9, 10];
const myFunc = (a, ...params) => {
  console.log(params);
};
myFunc(5, 6, 10, 12, 34);
