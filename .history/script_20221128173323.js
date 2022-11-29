const number = 600851475143;

function getMax(num) {
  const arr = [];
  for (let i = 2; i < Math.sqrt(num); i++) {
    if (num % i === 0) {
      arr.push(i);
    }
  }
  return arr;
  // const arr = [];
  // for (let i = num; i > Math.sqrt(num); i--) {
  //   // arr.push(i);
  //   if (num % 1 === 0) {
  //     arr.push(i);
  //   }
  //   return arr;
  // }
}

console.log(getMax(number));