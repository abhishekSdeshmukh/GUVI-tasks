// Use the rest API https://restcountries.com/v3.1/all url to print country name, region , sub region and population.
// 


fetch("https://restcountries.com/v3.1/all")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((country) => {
      const name = country.name.common;
      const region = country.region;
      const subregion = country.subregion;
      const population = country.population;

      console.log(`Name: ${name}`);
      console.log(`Region: ${region}`);
      console.log(`Subregion: ${subregion}`);
      console.log(`Population: ${population}`);
      console.log("---------------------------");
    });
  })
  .catch((error) => {
    console.log("Error fetching country data:", error);
  });
