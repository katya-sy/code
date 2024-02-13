const array = [];

for (let index = 0; index < 3; index++) {
  const arr = [];
  for (let index = 1; index <= 5; index++) {
    arr.push(index);
  }
  array.push(arr);
}

console.log(array);
