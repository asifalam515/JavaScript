const cars = ["bmw", "volvo", "mercedes"];
// cars.unshift("honda");
// cars.toString();
const car2 = ["honda", "toyota", "lexus", "mazda"];
const shop = cars.concat(car2);
for (var i = 0; i < cars.length; i++) {
  console.log(cars[i], typeof cars[i]);
}
console.log(shop);
