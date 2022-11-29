const number = 600851475143;

function getMax(num) {
  let out;
  for (let i = 2; i < Math.sqrt(num); i++) {
    if (num % i === 0) {
      out.push(i);
    }
  }
  return out;
}

console.log(getMax(number));