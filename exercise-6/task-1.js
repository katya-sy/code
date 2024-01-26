function getName1(name) {
  return `Имя ${name}`;
}

const getName2 = function (name) {
  return `Имя ${name}`;
};

const getName3 = (name) => `Имя ${name}`;

console.log(getName1("Ivan"));
console.log(getName2("Ivan"));
console.log(getName3("Ivan"));
