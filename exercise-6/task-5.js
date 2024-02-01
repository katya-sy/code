const showSuccessMessage = (message) => console.log(message);
const showErrorMessage = (message) => console.error(message);

const checkTextOnErrorSymbol = (
  text,
  errorSymbol,
  successCallback = showSuccessMessage,
  errorCallback = showErrorMessage
) => {
  for (let index = 0; index < text.length; index++) {
    if (text[index] === errorSymbol)
      errorCallback(
        `Найден запрещенный символ ${errorSymbol} под индексом ${index}`
      );
  }
  if (!text.includes(errorSymbol))
    successCallback("В данном тексте нет запрещенных символов");
};

checkTextOnErrorSymbol("qwertyq", "q");
