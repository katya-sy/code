const getKiller = (suspectInfo, deadPeople) => {
  for (const suspect in suspectInfo) {
    if (
      deadPeople.every((deadPerson) =>
        suspectInfo[suspect].includes(deadPerson)
      )
    ) {
      return `Убийца ${suspect}`;
    }
  }
  return "Убийца не найден";
};

console.log(
  getKiller(
    {
      James: ["Jacob", "Bill", "Lucas"],
      Johnny: ["David", "Kyle", "Lucas"],
      Peter: ["Lucy", "Kyle"],
    },
    ["Lucas", "Bill"]
  )
);
