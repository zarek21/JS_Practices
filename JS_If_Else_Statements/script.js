//If your country's population is greater than 33 million, log a string like this to the console: "Portugal's population is 22 million below average" (the 22 is the average of 33 minus the country's population).

//After checking the result, change the population temporarily to 13 and then to 130. See the different results, and set the population back to original.

const MexicanPopulation = 130000000;
const averagePopulation = 33000000;

if (MexicanPopulation > averagePopulation) {
    console.log(`Mexico's population is ${(MexicanPopulation - averagePopulation) / 1000000} million above average`);
} else {
    console.log(`Mexico's population is ${(averagePopulation - MexicanPopulation) / 1000000} million below average`);
}

// I divided by 1,000,000 so we get the expected output result and its on parenthesis because that way operators precedures knows that must do substraction first and then divided.
