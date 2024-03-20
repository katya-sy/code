const parseDate = (date) => {
  const [day, month, year] = date.split(".").map(Number);
  return new Date(year, month - 1, day + 1);
};

const allowVisa = (people) => {
  return people.filter((person) => {
    const passportExpirationDate = parseDate(person.passportExpiration);
    return (
      passportExpirationDate.getTime() > new Date().getTime() &&
      !person.criminalRecord
    );
  });
};

const peopleWithVisa = [
  {
    firstName: "Stasia",
    lastName: "Ward",
    criminalRecord: true,
    passportExpiration: "19.06.2024",
  },
  {
    firstName: "Elliot",
    lastName: "Baker",
    criminalRecord: false,
    passportExpiration: "04.06.2024",
  },
  {
    firstName: "Leighann",
    lastName: "Scott",
    criminalRecord: true,
    passportExpiration: "31.07.2024",
  },
  {
    firstName: "Nick",
    lastName: "Pop",
    criminalRecord: false,
    passportExpiration: "31.12.2021",
  },
];

const result = allowVisa(peopleWithVisa);
console.log("result", result);
