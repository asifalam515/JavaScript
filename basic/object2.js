const car = {
  name: "Bmw",
  model: "m3",
  price: "100k",
  color: "white",
  fullName: function () {
    return this.name + " " + this.model;
  },
};
// console.log(typeof car);
const human = new Object();
human.firstName = "asif";
delete human.firstName;
const carArr = Object.values(car);
console.log(carArr);
console.log(car.fullName().toUpperCase());
console.log(human.firstName);
