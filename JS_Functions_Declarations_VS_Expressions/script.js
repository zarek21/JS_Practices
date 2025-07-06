'use strict';
// The world population is 7900 million people. Create a function declaration called percentageOfWorld1 which receives a population value, and returns the percentage of the world population that the given population represents. For example, China has 1441 million people, so it's about 18.2% of the world population.

// To calculate the percentage, divide the given population value by 7900 and then multiply by 100.

// Call percentageOfWorld1 for 3 populations of countries of your choice, store the results into variables, and log them to the console.

// Create a function expression which does the exact same thing, called percentageOfWolrd2, and also call it with 3 country populations (can be the same populations)


// FUNCTION DECLARATION

// Since it's a function declaration, we save the function before the function chunk of code on a variable with the country and then we printed

const country1 = percentageOfWorld1('Mexico', 130000000);
console.log (country1);
const country2 = percentageOfWorld1('China', 1441000000);
console.log (country2);
const country3 = percentageOfWorld1('Colombia', 80000000);
console.log (country3);

// Then we create the function and his body 
function percentageOfWorld1(country,population){
    const populationAdjustment = population / 1000000;
    const worldPopulation = (populationAdjustment / 7900) * 100;
    return `${country} has ${populationAdjustment} million people, so it's about ${worldPopulation}% of the world population`; 
}

// FUNCTION EXPRESSION

// We start saving our function in a variable named like we want to be the function called, then we use function() and add the wished parameters, and we code the code block inside the function
const percentageOfWolrd2 = function(country,population){
    const populationAdjustment = population / 1000000;
    const worldPopulation = (populationAdjustment / 7900) * 100;
    return `${country} has ${populationAdjustment} million people, so it's about ${worldPopulation}% of the world population`; 
}; // Since this one is an expression and its part of a variable declaration, in this case 'const percentageOfWolrd2 = function(country,population)' we must add a semi colon at the end of the function.


// Lastly we save the function on a variable with the country and then we printed
const country4 = percentageOfWolrd2('Italy', 30000000);
console.log(country4);
const country5 = percentageOfWolrd2('Spain', 50000000);
console.log(country5);
const country6 = percentageOfWolrd2('Germany', 100000000);
console.log(country6);