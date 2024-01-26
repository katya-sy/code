function checkQuestionAnswer(question, correctAnswer) {
  let answer = prompt(question).trim().toLowerCase();
  correctAnswer === answer ? alert("Верно!") : alert("Неверно!");
}

checkQuestionAnswer("Да или нет", "да");
