// console.log('hello world');

// nonblocking

// setTimeout(function() {
//   console.log('hello');
// }, 1000);
// console.log('world');

// blocking

let start = new Date().getTime();
while (new Date().getTime() < start + 1000);
console.log('world');