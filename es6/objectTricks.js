const myObj = {
  founder: "Brendon",
  name: "javaScript",
  age: 23,
  job: "web",
};
const keys = Object.keys(myObj);
const values = Object.values(myObj);
const entry = Object.entries(myObj);
// console.log(keys);
// console.log(values);
// console.log(entry);

// object shorthand

let age = 23;
let fvrtNumber = 25;
const human = {
  name: "asif",
  country: "Bangladesh",
  age,
  fvrtNumber,
};
console.log(human);
