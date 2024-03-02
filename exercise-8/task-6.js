function getRandomNumberInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const startGame = (heroPlayer, enemyPlayer) => {
  while (heroPlayer.health > 0 && enemyPlayer.health > 0) {
    const randomNumber = getRandomNumberInRange(0, 1);
    randomNumber
      ? enemyPlayer.heatHero(heroPlayer)
      : heroPlayer.heatEnemy(enemyPlayer);
  }

  const winner = heroPlayer.health > 0 ? heroPlayer : enemyPlayer;

  console.log(
    `Победил ${winner.name}!!! У него осталось ${winner.health} здоровья`
  );
};

const heatPlayer = (player) => (player.health -= 10);

const hero = {
  name: "Batman",
  health: 100,
  heatEnemy: heatPlayer,
};
const enemy = {
  health: 100,
  name: "Joker",
  heatHero: heatPlayer,
};

startGame(hero, enemy);
