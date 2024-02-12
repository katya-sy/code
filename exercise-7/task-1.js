const peopleWaiting = [
  "Kristina",
  "Oleg",
  "Kirill",
  "Maria",
  "Svetlana",
  "Artem",
  "Gleb",
];

function giveParcel(peopleArr) {
  const [person] = peopleArr.splice(0, 1);
  console.log(
    `${person} получил(а) посылку. В очереди осталось ${peopleArr.length} человек`
  );
}

function leaveQueueWithoutParcel(peopleArr) {
  const [person] = peopleArr.splice(-1, 1);
  console.log(`${person} не получил(а) посылку и ушел(ла) из очереди`);
}

for (let index = 0; index < 3; index++) {
  giveParcel(peopleWaiting);
}

console.log("Обеденный перерыв!!!");

for (let index = 0; index < peopleWaiting.length; index) {
  leaveQueueWithoutParcel(peopleWaiting);
}
