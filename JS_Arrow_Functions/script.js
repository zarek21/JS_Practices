// Recreate the last assignment, but this time create an arrow function called percentageOfWorld3.

const percentageOfWorld3 = (country,population) => {
    const worldPopulation = population / 7900 * 100;
    return `${country} has ${population} million people, so it's about ${worldPopulation}% of the world population`;
};

console.log(percentageOfWorld3('Mexico', 130));

console.log(percentageOfWorld3('Spain', 50));

console.log(percentageOfWorld3('Rusia', 110));

