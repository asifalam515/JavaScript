const age = 10;

var msz = age >= 18 ? "you are ready to go" : "you are too young to go";
console.log(msz);

isChild = age > 10 ? true : false;
console.log(isChild);

// do multiple things using ternary
var type = age > 18 ? "adult" : age < 10 ? "child" : "young man";
console.log(type);

//shorter ternary
const isLoggedIn = true;
// const access = isLoggedIn ? true : false;
const access = isLoggedIn;
