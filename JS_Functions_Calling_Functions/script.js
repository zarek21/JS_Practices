// Create a function called describePopulation. Use the function type you like the most. This function takes in two arguments: country and population, and returns a strings like this: 'China has 1441 million people, which is about 18.2% of the world'.

// To calculate the percentage, describePopulation calls the percentageOfWorld1 you created earlier.

// Call describePopulation with data for 3 countries of your choice.


// Percentage World function
function percentageOfWorld(country, population) {
    const populationAdjustment = population / 1000000;
    const worldPopulation = (populationAdjustment / 7900) * 100;
    return worldPopulation; 
}

// Function Declaration
function describePopulation(country, population) {
    const percentage = percentageOfWorld(country, population);
    return `${country} has ${population / 1000000} million people, which is about ${percentage}% of the world.`;
}

// Calling with 3 different countries
console.log(describePopulation('Mexico', 130000000));
console.log(describePopulation('India', 1400000000));
console.log(describePopulation('Brazil', 215000000));


//////////////////////////////////////////////////////////////////////////////////

// Function Expression
const percentageOfWorld = function (country, population) {
    const populationAdjustment = population / 1000000;
    const worldPopulation = (populationAdjustment / 7900) * 100;
    return worldPopulation; 
};

const describePopulation = function (country, population) {
    const percentage = percentageOfWorld(country, population);
    return `${country} has ${population / 1000000} million people, which is about ${percentage}% of the world.`;
};

console.log(describePopulation('Mexico', 130000000));
console.log(describePopulation('India', 1400000000));
console.log(describePopulation('Brazil', 215000000));

//////////////////////////////////////////////////////////////////////////////////

// Arrow Functions
const percentageOfWorld1 = (country, population) => {
    const populationAdjustment = population / 1000000;
    const worldPopulation = (populationAdjustment / 7900) * 100;
    return worldPopulation;
};

const describePopulation = (country, population) => {
    const percentage = percentageOfWorld1(country, population);
    return `${country} has ${population / 1000000} million people, which is about ${percentage}% of the world.`;
};

console.log(describePopulation('Mexico', 130000000));
console.log(describePopulation('India', 1400000000));
console.log(describePopulation('Brazil', 215000000));

