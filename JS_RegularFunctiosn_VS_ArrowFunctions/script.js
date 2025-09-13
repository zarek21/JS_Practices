"use strict";

const zarek = {
  firstName: "Zarek",
  year: 2002,

  calcAge: function () {
    console.log(this);
    console.log(2025 - this.year);

    // Solution 1
    const self = this;
    const isMillenial = function () {
      console.log(self.year >= 1981 && self.year <= 1996);
    };
    isMillenial();

    // Solution 2
    // Here we use an arrow function
    // so the this keyword gets the value
    // inhereted from it's parent, which is
    // this case it is from the calc methon object zarek
    const isMillenialArrow = () => {
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenialArrow();
  },

  // greet: () => console.log(`Hey, ${this.firstName}`), // NEVER USE ARROW FUNCTIONS ON OBJECTS
  greet: function () {
    console.log(`Hey ${this.firstName}!`);
  },
};
zarek.greet();
zarek.calcAge();
