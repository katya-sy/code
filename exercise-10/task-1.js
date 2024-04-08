const student = {
  stack: ["HTML"],
  level: 1,
  improveLevel: function () {
    this.level += 1;
    switch (this.level) {
      case 2:
        this.stack.push("CSS");
        break;
      case 3:
        this.stack.push("JavaScript");
        break;
      case 4:
        this.stack.push("React");
        break;
      case 5:
        this.stack.push("NodeJS");
        break;
    }
    if (this.level > 5) console.log("Студент доучился!");
    return this;
  },
};

const result = student
  .improveLevel()
  .improveLevel()
  .improveLevel()
  .improveLevel()
  .improveLevel();

console.log(result);
