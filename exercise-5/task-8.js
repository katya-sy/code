const password = prompt("Введите пароль");

if (password.length > 3 && password.length <= 20 && /[\dA-Z]/.test(password))
  alert("Welcome!");
else alert("Пароль не удовлетворяет условиям!");
