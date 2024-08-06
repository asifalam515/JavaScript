function stopWatch() {
  var startTime = Date.now();
  function getDelay() {
    console.log(Date.now() - startTime);
  }
  return getDelay;
}
var timer = stopWatch();
// create a fake delay
for (var i = 1; i < 100000000; i++) {
  var a = Math.random() * 1000000;
}
console.dir(timer);
