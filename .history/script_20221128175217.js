// const numberIn = 600851475143;

// console.time('time')
// function getMax(num) {
//   let numberOut;
//   for (let i = 2; i < Math.sqrt(num); i++) {
//     if (num % i === 0) {
//       numberOut = i;
//     }
//   }
//   return numberOut;
// }

// console.log(getMax(numberIn));
// // getMax(numberIn);
// console.timeEnd('time')

console.time('time');
function updateNOD(n) {
  let res = n % 2 ? 1 : 2
  
  while (!(n % 2)) {
    n /= 2
  }
  
  for (var q=3; q*q<n; q+=2) {
    for (; !(n%q); n/=q) {
      res = q
    }
  }
  
  return res > n ? res : n
}

console.log(updateNOD(600851475143))
