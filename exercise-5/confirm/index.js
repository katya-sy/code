const questions = [
  "JavaScript появился в 1995 году?",
  "Спецификация JavaScript называется ECMAScript?",
  "JavaScript был создан за 1 месяц?",
];

questions.forEach((question) => {
  const answer = confirm(question);
  answer ? alert("Верно!") : alert("Неверно!");
});
