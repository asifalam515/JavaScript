const cars = ["bmw", "volvo", "mercedes"];
cars.splice(0, 0, "honda", "toyota"); // কেটে নতুন ইলিমেন্ট সং যুক্তি করা (startPosition,NumberOfDeletedItem,....including items)
const myCar = cars.slice(0, 1); //It will take only start to end items
// console.log(myCar);

const numbers = [123, 45, 64, 243, 5678];
// console.log(numbers.find(() => {}));

const cars2 = ["bmw", "volvo", "mercedes"];
const cars3 = ["bmw", "volvo", "mercedes"];
console.log(cars2 === cars3); //False
const cars4 = cars2;
console.log(cars4 === cars2); //true coz both are them same array and their memory is same
