const numberIn = 600851475143;

console.time('time')
function getMaxSimple(num) {
  const arr = [];
  let numberOut;
  for (let i = 2; i < Math.sqrt(num); i++) {
    if (num % i === 0) {
      // numberOut = i;
      arr.push()
    }
  }
  return numberOut;
}

console.log(getMaxSimple(numberIn));
console.timeEnd('time')
