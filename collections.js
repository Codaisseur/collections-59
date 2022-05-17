const user = {
  name: "Karla",
  age: 28,
  dob: "12/11/93",
  teacher: true,
};

// log the whole user
console.log("user", user);

// log a property - dot notation - PREFERED
console.log("user - name", user.name);

// log a property - bracket notation
console.log("user - age", user["age"]);

//                    0         1           2
const studentList = ["Niels", "Gonzalo", "Ingrid", "Matias"];

// access by index
console.log("first student", studentList[1]);

// .length method
console.log("how many students", studentList.length);

// access last element of array
console.log("last student", studentList[studentList.length - 1]);

// list with all different datatypes don't make much sense
const wrongArray = [true, "MAtias", 24, false, "Dog"];

const teachers = [
  { name: "Karla", age: 28, gender: "f", topics: ["React", "Typescript"] },
  { name: "Matias", age: 30, gender: "m", topics: ["CSS"] },
  { name: "David", age: 33, gender: "m", topics: ["React", "Node"] },
  { name: "Swen", age: 29, gender: "m", topics: ["Testing", "Backend"] },
];

console.log("amount of teachers", teachers.length);
console.log("topics of first teacher", teachers[0].topics[1]);

// Loops - looping over an array
// print the names of every teacher
teachers.forEach((element) => {
  console.log("t name:", element.name);
});

const found = teachers.find((teacher) => {
  return teacher.name === "David";
});

console.log("found david?", found);

const youngTeachers = teachers.filter((teacher) => {
  return teacher.age > 29;
});

console.log("youngTeachers", youngTeachers);
