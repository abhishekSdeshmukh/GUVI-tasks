// Print the total population of countries using reduce function
fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    const totalPopulation = data.reduce((acc, country) => acc + country.population, 0);
    console.log(`Total Population of all countries: ${totalPopulation}`);
  })
  .catch(error => console.error('Error fetching data:', error));
