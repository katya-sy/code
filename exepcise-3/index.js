const age = 25;
console.log(Number(age), Boolean(age), String(age));

const name = "John";
console.log(Number(name), Boolean(name), String(name));

const isStudent = true;
console.log(Number(isStudent), Boolean(isStudent), String(isStudent));

const car = null;
console.log(Number(car), Boolean(car), String(car));

let address;
console.log(Number(address), Boolean(address), String(address));

const person = { name: "Alice", age: 30 };
console.log(Number(person), Boolean(person), String(person));

const bigNumber = 9007199254740991n;
console.log(Number(bigNumber), Boolean(bigNumber), String(bigNumber));

const id = Symbol("id");
console.log(Boolean(id), String(id));
