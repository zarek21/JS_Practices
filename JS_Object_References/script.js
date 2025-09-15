"use strict";

const jessica1 = {
  fistName: "Jessica",
  lastName: "Williams",
  age: 27,
};

function marryPerson(originalPerson, newLastName) {
  originalPerson.lastName = newLastName;
  return originalPerson;
}

const marriedJessica = marryPerson(jessica1, "Davis");

// const marriedJessica = jessica1;
// marriedJessica.lastName = "Davis";

console.log("BEFORE:", jessica1);
console.log("AFTER:", marriedJessica);

const jessica = {
  fistName: "Jessica",
  lastName: "Williams",
  age: 27,
  family: ["Alice", "Bob"],
};

const jessicaCopy = { ...jessica };
jessicaCopy.lastName = "Davis";

console.log(jessica, jessicaCopy);

// Deep copy / clone
const jessicaClone = structuredClone(jessica);
jessicaClone.family.push("Mary");
jessicaClone.family.push("John");

console.log("ORIGINAL:", jessica);
console.log("CLONE:", jessicaClone);
