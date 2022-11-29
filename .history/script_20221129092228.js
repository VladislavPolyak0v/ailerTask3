let numberIn = 600851475143;

// console.time('time')
// function getMaxSimple(num) {
//   let numberOut;
//   for (let i = 2; i < Math.sqrt(num); i++) {
//     if (num % i === 0) {
//       numberOut = i;
//       // numberOut.push(i);
//     }
//   }
//   return numberOut;
// }

// console.log(getMaxSimple(numberIn));
// console.timeEnd('time')


// var number = 600851475143;

// for (var index = 2; index < number ** 0.5; index++) {
//     if( number % index === 0) { number /= index}
// }
// console.log(number);

console.time('timer')

for (let i = 987; i < Math.sqrt(numberIn); i++) {
  if (numberIn % i === 0) {
    numberIn = numberIn / i;
  }
}

console.log(numberIn);
console.timeEnd('timer')