const one = () => {
  two(); //hold
  console.log("one");
};
const two = () => {
  three(); //hold
  console.log("two");
};
const three = () => {
  console.log("three");
};
one();
