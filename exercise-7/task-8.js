function getMathResult(array) {
  if (array.length < 3) {
    return "Error count";
  }

  const allowedSigns = ["+", "-", "/", "*", ">", "<"];
  const [sign] = array.filter((element) => allowedSigns.includes(element));

  const numbers = array
    .filter((item) => !isNaN(parseFloat(item)))
    .map((item) => +item);

  if (numbers.length !== 2) {
    return "Error numbers";
  }

  const number1 = numbers[0],
    number2 = numbers[1];

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
}

console.log(getMathResult(["1", "fkj", "+", "12"]));
