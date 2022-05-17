const patients = require("./patients");

const names = ["Matias", "Swen", "David", "Sebastian", "Gonzalo"];

const longerThan6 = names.find((name) => {
  return name.length > 6;
});

console.log("longerThan6", longerThan6);

// {
//   id: 2401,
//   firstName: "Cynde",
//   lastName: "Dohmann",
//   phoneNumber: "+98-468-937-0605",
//   email: "cdohmann0@netscape.com",
//   gender: "f",
//   height: 1.76,
//   weight: 97,
//   dailyExercise: "no",
//   age: 49,
// },

// .find
// returns the first element that is true for the given condition
// Returns? => element || undefined

const someId = 2444;
const byId = patients.find((p) => {
  return p.id === someId;
});

const searchEmail = "jallpressc@epa.gov";

const byEmail = patients.find((p) => {
  const isAMatch = p.email === searchEmail; // true || false
  return isAMatch;
});

console.log("found the patient?", byEmail);

// FILTER
// returns all the elements that are true for the given condition
// RETURNS => A new array, always. Might have elements or it might be empty
const femalePatients = patients.filter((p) => {
  return p.gender === "f";
});

// console.log("female Patients", femalePatients);
console.log("original patients", patients.length);
console.log("amount of female patients", femalePatients.length);

// list of patients that are under 35 AND don't exercise
const result = patients.filter((p) => {
  return p.age < 45 && p.dailyExercise === "no";
});

console.log("result", result);
