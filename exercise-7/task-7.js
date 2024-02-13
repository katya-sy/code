const goals = [8, 1, 1, 3, 2, -1, 5];

const bestResultNumberOfGoals = [...goals].sort((a, b) => b - a)[0];
const bestResultNumber = goals.findIndex(
  (goal) => goal === bestResultNumberOfGoals
);
console.log(
  `Самый результативный матч был под номером ${
    bestResultNumber + 1
  }, было забито ${bestResultNumberOfGoals} голов`
);

const goalsSortedAsc = [...goals].sort((a, b) => a - b);
let worstResultsNumberOfGoals;
goalsSortedAsc.forEach((goal) => {
  if (goal > -1) {
    if (worstResultsNumberOfGoals) {
      if (goal < worstResultsNumberOfGoals) worstResultsNumberOfGoals = goal;
    } else worstResultsNumberOfGoals = goal;
  }
});
const worstResultNumber = [];
goals.filter((goal, index) => {
  if (goal === worstResultsNumberOfGoals) worstResultNumber.push(index);
});
console.log(
  `Самыми нерезультативными были матчи под номерами ${worstResultNumber.join(
    ", "
  )}, было забито ${worstResultsNumberOfGoals} голов`
);

let totalGoals = 0;
for (let index = 0; index < goals.length; index++) {
  if (goals[index] >= 0) {
    totalGoals += goals[index];
  }
}
console.log(`Общее количество голов за сезон - ${totalGoals}`);

const [autoDefeat] = goals.filter((goal) => goal < 0);
console.log(`Были автопоражения - ${autoDefeat ? "да" : "нет"}`);

console.log(
  `Среднее количество голов за матч - ${Math.round(totalGoals / goals.length)}`
);

console.log(`Голы по возрастанию - ${goalsSortedAsc.join(", ")}`);
