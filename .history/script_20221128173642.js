const number = 600851475143;

console.time('test')
function getMax(num) {
  let out;
  for (let i = 2; i < Math.sqrt(num); i++) {
    if (num % i === 0) {
      out = i;
    }
  }
  return out;
}

// console.log(getMax(number));
