const anObject = {
  left: 1,
  right: 2,
};
delete anObject.right;
// console.log(anObject.right);
let obj1 = {
  value: 10,
};
let obj2 = obj1;
let obj3 = {
  value: 10,
};
console.log(obj1 == obj2); //it will be true hence its comparing ref value address.both are same .so address are sam as well
console.log(obj1 == obj3); //it will be false hence its comparing ref value address.e//it will be true hence its comparing ref value address.even both values  are same but address are different
const score = {
  visitor: 0,
  home: 1,
};
score.home = 2;
score = {
  visitor: 1,
};
