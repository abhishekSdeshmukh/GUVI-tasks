// Print the following details name, capital, flag using forEach function

fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    data.forEach(country => {
      const name = country.name.common;
      const capital = country.capital?.[0] || 'N/A'; // Use optional chaining to handle undefined capitals
      const flag = country.flags.png;

      console.log(`Name: ${name}`);
      console.log(`Capital: ${capital}`);
      console.log(`Flag: ${flag}`);
      console.log("-----------------------");
    });
  })
  .catch(error => console.error('Error fetching data:', error));
