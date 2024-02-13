function getMathResult([num1, sign, num2]) {
  const number1 = +num1;
  const number2 = +num2;

  if (!isNaN(number1) && !isNaN(number2)) {
    switch (sign) {
      case "+":
        return number1 + number2;
      case "-":
        return number1 - number2;
      case "/":
        return number1 / number2;
      case "*":
        return number1 * number2;
      case ">":
        return number1 > number2;
      case "<":
        return number1 < number2;
      default:
        return "Error";
    }
  } else return "Error";
}

console.log(getMathResult(["1", "+", "12"]));

// в процессе
