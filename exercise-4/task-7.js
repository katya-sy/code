let javaScriptDesc =
  "JavaScript — мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией спецификации ECMAScript (стандарт ECMA-262[2]).JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений";

javaScriptDesc = javaScriptDesc
  .slice(0, Math.floor(javaScriptDesc.length / 2))
  .replace("а", "А")
  .replace(" ", "")
  .repeat(3);

console.log(javaScriptDesc[Math.floor(javaScriptDesc.length / 2)]);
console.log(javaScriptDesc);
