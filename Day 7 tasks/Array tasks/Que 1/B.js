// Get all the countries with a population of less than 2 lakhs using Filter function

fetch('https://restcountries.com/v3.1/all')
.then(response => response.json())
.then(data => {
  const  contriesWithLessPopulation = data.filter(country => country.population < 200000);
  const countriesNameWithLessPopulation = contriesWithLessPopulation.map(country => country.name.common);
    console.log(countriesNameWithLessPopulation);
})
.catch(error => console.error('Error fetching data:', error))