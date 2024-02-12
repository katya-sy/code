function getSumOfSequence(number) {
  const array = [];
  for (let index = 1; index <= number; index++) {
    array.push(index);
  }

  return array[0] + array[array.length - 1];
}

console.log(getSumOfSequence(5));
