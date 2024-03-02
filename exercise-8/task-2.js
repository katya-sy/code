const ordersArr = [4, 2, 1, 3];
const people = [
  { id: 1, name: "Maxim" },
  { id: 2, name: "Nikolay" },
  { id: 3, name: "Angelina" },
  { id: 4, name: "Vitaliy" },
];

const giveTalonsInOrder = (patients, orders) => {
  return orders.map((el) => patients.find((patient) => patient.id === el));
};

console.log(giveTalonsInOrder(people, ordersArr));
