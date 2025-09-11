"use strict";

function calcAge(birthYear) {
  const age = 2025 - birthYear;

  function printAge() {
    let output = `${firstName} Your are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      const str = `Oh, and you are a milennial, ${firstName}`;
      console.log(str);
    } else {
      var milenial = false;
      // Creating NEW variable with same name as outer's scope variableq
      const firstName = "Rocky"; // Overwrites global because scope chain looks up fist at it own scope
      const str2 = `Oh, you are not a milenial, ${firstName}`;
      console.log(str2);

      function add(a, b) {
        return a + b;
      }

      // Reassigning outer scope's variable
      output = "NEW OUTPUT";
      console.log(add(2, 3));
    }
    console.log(milenial);
    console.log(output);
  }
  printAge();
  return age;
}

const firstName = "Zarek";
calcAge(2002);
