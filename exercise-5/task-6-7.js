const clientName = prompt("Введите имя клиента");
let clientSpentForAllTime = +prompt(
    "Введите, сколько потратил клиент за все время"
  ),
  clientSpentToday = +prompt("Сумма заказа"),
  discount;

console.log(
  clientSpentForAllTime,
  clientSpentToday,
  typeof clientSpentForAllTime,
  typeof clientSpentToday
);

if (
  typeof clientSpentForAllTime !== "number" ||
  typeof clientSpentToday !== "number"
) {
  alert(
    "Потраченные суммы должны быть числом! Перезагрузите страницу для повторной попытки"
  );
} else {
  if (clientSpentForAllTime > 100 && clientSpentForAllTime <= 300) {
    discount = 10;
  } else if (clientSpentForAllTime > 300 && clientSpentForAllTime <= 500) {
    discount = 20;
  } else if (clientSpentForAllTime > 500) {
    discount = 30;
  }

  alert(`Вам скидка ${discount}%!`);

  clientSpentToday = clientSpentToday - (clientSpentToday * discount) / 100;
  clientSpentForAllTime += clientSpentToday;

  alert(
    `Спасибо, ${clientName}! К оплате ${clientSpentToday}$. За все время Вы потратили ${clientSpentForAllTime}$`
  );
}
