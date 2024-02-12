const coffees = ["Latte", "Cappuccino", "Americano"];
const prices = [1.5, 1, 2];
const clientsEstimations = [];

// Изменения цены
const updatePrices = prices.map((price) => price + 0.5);

coffees.forEach((coffee, index) =>
  alert(`Кофе ${coffee} теперь стоит ${updatePrices[index]} евро`)
);

// Поиск кофе
const coffeeName = prompt("Поиск кофе по названию").toLowerCase().trim();

const indexOfCoffee = coffees
  .map((coffee) => coffee.toLowerCase())
  .findIndex((coffee) => coffee === coffeeName);

if (indexOfCoffee !== -1) {
  alert(
    `Держите ваш любимый кофе ${coffees[indexOfCoffee]}, он ${
      indexOfCoffee + 1
    }-й по популярности в нашей кофейне`
  );
} else {
  alert("К сожалению, такого вида кофе нет в наличии");
}

// Получение оценок
function askClientToGiveEstimation() {
  const estimation = +prompt("Как вы оцениваете нашу кофейню от 1 до 10?");
  if (estimation >= 1 && estimation <= 10) clientsEstimations.push(estimation);
}

for (let index = 0; index < 5; index++) {
  askClientToGiveEstimation();
}

const goodEstimations = clientsEstimations.filter(
  (estimation) => estimation > 5
);

const notGoodEstimations = clientsEstimations.filter(
  (estimation) => estimation <= 5
);

alert(
  `Положительных оценок - ${goodEstimations.length}, отрицательных оценок - ${notGoodEstimations.length}`
);
