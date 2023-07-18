// Get all the countries from the Asia continent /region using the Filter function
fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    const asiaCountries = data.filter(country => country.region === 'Asia');
    const countryNamesInAsia = asiaCountries.map(country => country.name.common);
    console.log(countryNamesInAsia);
  })
  .catch(error => console.error('Error fetching data:', error));
