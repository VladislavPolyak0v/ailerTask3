// const numberIn = 600851475143;

// console.time('time')
// function getMaxSimple(num) {
//   let numberOut;
//   for (let i = 2; i < Math.sqrt(num); i++) {
//     if (num % i === 0) {
//       numberOut = i;
//     }
//   }
//   return numberOut;
// }

// console.log(getMaxSimple(numberIn));
// console.timeEnd('time')

function three() {
  let number  = 600851475143
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if ( number % i === 0) {
      number = number / i
    }
  }}
