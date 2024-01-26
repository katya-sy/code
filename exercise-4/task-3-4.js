const userAnswer = prompt("Как Вас зовут?").toLowerCase().trim();
const userAge = +prompt("Сколько Вам лет").trim();
alert(`Вас зовут ${userAnswer} и Вам ${userAge} лет`);
console.log(typeof userAge);
