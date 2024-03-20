const convertDaysToMs = (days) => days * (24 * 60 * 60 * 1000);

const addDays = (date, days = 1) => {
  const dateNow = date.getTime(),
    timestamp = dateNow + convertDaysToMs(days);
  return new Date(timestamp);
};

console.log(addDays(new Date()));
