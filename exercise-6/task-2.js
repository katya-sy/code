const getSumOfNumbers = (number, type = "odd") => {
  let sum = 0;

  for (let index = 0; index <= number; index++) {
    switch (type) {
      case "odd":
        if (index % 2 === 1) sum += index;
        break;
      case "even":
        if (index % 2 === 0) sum += index;
        break;
      case "":
        sum += index;
        break;
    }
  }

  return sum;
};

console.log(getSumOfNumbers(10, ""));
