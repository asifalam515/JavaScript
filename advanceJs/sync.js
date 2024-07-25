const processOrder = (customer) => {
  console.log(`Processing order for ${customer}`);
  var currentTime = new Date().getTime();
  //   while (currentTime + 3000 >= new Date().getTime()) {
  //     // Busy wait to simulate processing time
  //   }
  setTimeout(() => {
    //asynchronous function
    console.log(`cooking completed`);
  }, 3000);
  console.log(`Order processed for ${customer}`);
};

console.log(`Take the order for customer 1`);
processOrder("customer 1");
console.log(`Complete order for customer 1`);
