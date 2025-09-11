"use strict";

const calcAge = function (birthYear) {
  console.log(2025 - birthYear);
  // console.log(this);
};

calcAge(2002);

const calcAgeArrow = (birthYear) => {
  console.log(2025 - birthYear);
  // console.log(this);
};

calcAgeArrow(2010);

const zarek = {
  year: 2002,
  calcAge: function () {
    console.log(this);
    console.log(2025 - this.year);
  },
};
zarek.calcAge();

const matilda = {
  year: 2010,
};

matilda.calcAge = zarek.calcAge;
matilda.calcAge();

const f = zarek.calcAge;
f();
