const myName = "Katya",
  programmingLanguage = "JavaScript",
  courseCreatorName = "Nikita Mihailovich",
  reasonText = "много платят",
  numberOfMonth = 3;

let myInfoText = `Всем привет! Меня зовут ${myName}. Сейчас я изучаю язык программирования ${programmingLanguage} на курсе по ${programmingLanguage} y ${courseCreatorName}.
Я хочу стать веб-разработчиком, потому что ${reasonText}. До этого я изучал(а) ${programmingLanguage} ${numberOfMonth} месяцев. Я уверен(а), что пройду данный курс до
конца!`;

myInfoText = myInfoText.replaceAll(
  programmingLanguage,
  programmingLanguage.toUpperCase()
);

console.log(myInfoText);
console.log(myInfoText.length);
console.log(myInfoText[0], myInfoText[myInfoText.length - 1]);
