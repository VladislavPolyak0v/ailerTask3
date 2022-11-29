const numberIn = 600851475143;

console.time('time')
function getMaxSimple(num) {
  let numberOut;
  for (let i = 2; i < Math.sqrt(num); i++) {
    if (num % i === 0) {
      num = num i;
      // numberOut.push(i);
    }
  }
  return numberOut;
}

console.log(getMaxSimple(numberIn));
console.timeEnd('time')


// var number = 600851475143;

// for (var index = 2; index < number ** 0.5; index++) {
//     if( number % index === 0) { number /= index}
// }
// console.log(number);