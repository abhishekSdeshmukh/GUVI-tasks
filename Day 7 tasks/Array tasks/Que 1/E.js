// Print the country which uses US Dollars as currency.
fetch('https://restcountries.com/v3.1/all')
.then(response => response.json())
.then(data => {
    const countriesWithUSD = data.filter(country => country.currencies?.USD);
    const countriesNameWithUSD = countriesWithUSD.map(country => country.name.common);
    console.log(`Countries with US Dollar as a currency : ${countriesNameWithUSD}`);
})
.catch(error => console.error('Error fetching data : ', error))