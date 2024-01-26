let userText = prompt("Введите текст").trim();
const wordFromText = prompt("Введите слово из текста").trim();

const indexOfWord = userText.indexOf(wordFromText);

userText = userText.slice(0, indexOfWord);

alert(`Результат: ${userText}`);
