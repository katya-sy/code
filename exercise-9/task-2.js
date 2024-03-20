const convertMsToDays = (ms) => Math.floor(ms / (24 * 60 * 60 * 1000));

const getDaysBeforeBirthday = (nextBirthDate) => {
  const birthDate = new Date(nextBirthDate).getTime();

  return convertMsToDays(birthDate - new Date().getTime());
};

console.log(getDaysBeforeBirthday("2024-04-20"));
