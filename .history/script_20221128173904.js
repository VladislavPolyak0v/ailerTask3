const numberIn = 600851475143;

// console.time('time')
function getMax(num) {
  let numberOut;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      numberOut = i;
    }
  }
  return numberOut;
}

console.log(getMax(numberIn));
// console.timeEnd('time')