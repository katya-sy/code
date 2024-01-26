const existedUserLogin = "best_user_login",
  existedUserPassword = "12345678";

const userLogin = prompt("Введите логин").trim(),
  userPassword = prompt("Введите пароль").trim();

existedUserLogin === userLogin && existedUserPassword === userPassword
  ? alert(`Welcome, ${userLogin}`)
  : alert("Неверный логин и/или пароль!");
