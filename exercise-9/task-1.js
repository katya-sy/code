const addZero = (num) => (num >= 0 && num < 10 ? `0${num}` : num);

const getDateFormat = (date, separator = ".") => {
  const dateObj = {
    day: addZero(date.getDate()),
    month: addZero(date.getMonth() + 1),
    year: addZero(date.getFullYear()),
  };

  let result = "";

  for (const key in dateObj) {
    result += dateObj[key] + separator;
  }

  return result.slice(0, -1);
};

console.log(getDateFormat(new Date()));
