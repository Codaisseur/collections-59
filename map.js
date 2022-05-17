const patients = require("./patients");

// console.log(patients);

const mapped = patients.map((p) => {
  return p.email;
});

const greetings = patients.map((p) => {
  const prefix = p.gender === "m" ? "Mr." : "Mrs.";

  return `Hello ${prefix} ${p.firstName} ${p.lastName}`;
});

// forEach only for `side-effect` => calling another function to do
// something with our data
patients.forEach((p) => {
  sendEmail(p.email);
});

// Hello {Mr || Mrs} firstName lastName

console.log("after map", greetings);
