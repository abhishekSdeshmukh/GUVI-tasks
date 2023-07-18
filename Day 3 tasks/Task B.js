fetch("https://restcountries.com/v3.1/all")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((country) => {
      const countryCode = country.cca2;
      const flag = `https://restcountries.com/data/${countryCode.toLowerCase()}.svg`;

      console.log(`${country.name.common}: ${flag}`);
    });
  })
  .catch((error) => {
    console.log("Error fetching country data:", error);
  });
