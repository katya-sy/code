const numbers = [10, 4, 100, -5, 54, 2];

let sum1 = 0;
for (let index = 0; index < numbers.length; index++) {
  sum1 += numbers[index] ** 3;
}

let sum2 = 0;
for (const number of numbers) {
  sum2 += number ** 3;
}

let sum3 = 0;
numbers.forEach((number) => (sum3 += number ** 3));

const sum4 = numbers.reduce((sum, number) => sum + number ** 3, 0);

console.log(sum1);
console.log(sum2);
console.log(sum3);
console.log(sum4);
