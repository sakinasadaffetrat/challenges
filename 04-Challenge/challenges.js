/* Challenges to Solve */
//       JS Functions using Objects

/*  Create a function that takes an object as an argument and returns a string with facts about the city. The city facts will need to be extracted from the object's three properties:

    name
    population
    continent
*/
function cityFacts(city) {
    result = city.name+" has a population of "+city.population+" and is situated in "+city.continent;
    
    console.log(result);
}

cityFacts({
    name: "kabul",
    population: "5,140,526",
    continent: "Asia",
  });
  cityFacts({
    name: "Zurich",
    population: "73,929,286",
    continent: "Europ"
  })



