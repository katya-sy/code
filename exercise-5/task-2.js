const questions = [
  "1. Сколько будет 2 + 2?",
  "2. Сколько будет 2 * 2?",
  "3. У Пети было 5 яблок. 3 из них он съел, 1 отдал другу. Сколько яблок у Пети осталось?",
  "4. У Маши было 10 конфет. 2 она съела, 1 отдала другу. После мама дала Маше еще 5 конфет. Сколько в итоге конфет осталось у Маши?",
  "5. Сколько будет 2 + 2*2?",
];

const answers = [4, 4, 1, 12, 6];

const correctAnswers = [],
  incorrectAnswers = [];

questions.forEach((question, index) => {
  const answer = +prompt(question);
  if (answer === answers[index]) {
    correctAnswers.push(answer);
    alert("Верно!");
  } else {
    incorrectAnswers.push(answer);
    alert("Неверно!");
  }
});

alert(
  `Конец теста! Правильные ответы - ${correctAnswers.join(
    ", "
  )}, неправильные ответы - ${incorrectAnswers.join(", ")}`
);
