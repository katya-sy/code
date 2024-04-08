const dog = {
  name: "Чарли",
  type: "Собака",
  makeSound() {
    return "Гав-Гав";
  },
};
const bird = {
  name: "Петя",
  type: "Воробей",
  makeSound() {
    return "Чик-чирик";
  },
};

function makeDomestic(isDomestic) {
  console.log(`${this.type} по имени ${this.name} говорит ${this.makeSound()}`);

  return {
    ...this,
    isDomestic,
  };
}

const boundMakeDomesticDog = makeDomestic.bind(dog);
const domesticDogBind = boundMakeDomesticDog(true);
console.log(domesticDogBind);

const domesticBirdCall = makeDomestic.call(bird, false);
console.log(domesticBirdCall);

const domesticBirdApply = makeDomestic.apply(bird, [true]);
console.log(domesticBirdApply);
