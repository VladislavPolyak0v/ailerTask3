const numberIn = 600851475143;

function getMax(num) {
  let numberOut;
  for (let i = 2; i < Math.sqrt(num); i++) {
    if (num % i === 0) {
      numberOut = i;
    }
  }
  return numberOut;
}

getMax()
