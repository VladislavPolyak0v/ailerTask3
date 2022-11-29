let numberIn = 600851475143;

setTimeout(() => {
  for (let i = 2; i < Math.sqrt(numberIn); i++) {
    if (numberIn % i === 0) {
      numberIn = numberIn / i;
    }
  }
  console.log(numberIn);
})
