let userString = prompt("Введите текст для обрезки").trim();
const startSliceIndex = +prompt("С какого индекса обрезать?").trim(),
  endSliceIndex = +prompt("До какого индекса обрезать?").trim();

userString = userString.slice(startSliceIndex, endSliceIndex);

alert(`Результат: ${userString}`);
