function getDivisorsCount(number = 1) {
  let divisorsCount = 0;

  if (number < 0 || !Number.isInteger(number))
    console.log("Число должно быть целым и больше нуля!!!");
  else {
    for (let index = 1; index <= number; index++) {
      if (number % index === 0) {
        divisorsCount++;
      }
    }
  }

  return divisorsCount;
}

console.log(getDivisorsCount(12));
