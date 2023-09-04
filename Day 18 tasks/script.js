document.addEventListener("DOMContentLoaded", () => {
  const countryCards = document.getElementById("countryCards");
  const cardTemplate = document.querySelector(".card-template");

  fetch("https://restcountries.com/v3.1/all")
    .then(response => response.json())
    .then(countries => {
      countries.forEach(country => {
        const newCard = cardTemplate.cloneNode(true);
        newCard.style.display = "block";

        const showWeatherBtn = newCard.querySelector(".show-weather-btn");
        const weatherDetails = newCard.querySelector(".weather-details");
        const temperature = newCard.querySelector(".temperature");
        const pressure = newCard.querySelector(".pressure");
        const wind = newCard.querySelector(".wind");
        const weatherForecast = newCard.querySelector(".weather-forecast");

        showWeatherBtn.addEventListener("click", () => {
          if (weatherDetails.style.display === "none") {
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${country.capital}&appid=d87f665553158cddb279a01a2f8012a5&units=metric`)
              .then(response => response.json())
              .then(weatherData => {
                temperature.textContent = `${weatherData.main.temp}°C`;
                pressure.textContent = `${weatherData.main.pressure} hPa`;
                wind.textContent = `${weatherData.wind.speed} m/s`;
                weatherForecast.textContent = weatherData.weather[0].description;
              })
              .catch(error => {
                console.error("Error fetching weather data:", error);
              });

            weatherDetails.style.display = "block";
            showWeatherBtn.textContent = "Hide Weather";
          } else {
            weatherDetails.style.display = "none";
            showWeatherBtn.textContent = "Show Weather";
          }
        });

        newCard.querySelector(".country-name").textContent = country.name.common;
        newCard.querySelector(".flag-img").src = country.flags.png;
        newCard.querySelector(".capital").textContent = country.capital;
        newCard.querySelector(".region").textContent = country.region;
        newCard.querySelector(".country-code").textContent = country.cca2;
        newCard.querySelector(".population").textContent = country.population;

        countryCards.appendChild(newCard);
      });
    })
    .catch(error => {
      console.error("Error fetching country data:", error);
    });
});