const car = {
  name: "Bmw",
  model: "m3",
  price: "100k",
  color: "white",
  fullName: function () {
    return this.name + " " + this.model;
  },
};
let stringCar = JSON.stringify(car);
console.log(stringCar);
