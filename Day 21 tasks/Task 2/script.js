const url = 'https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random';
const options = {
	method: 'GET',
	headers: {
		accept: 'application/json',
		'X-RapidAPI-Key': '6f79acb2d8msh2021f0eb9089fb5p100ac4jsn785dfd5f2e9a',
		'X-RapidAPI-Host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com'
	}
};

async function getRandomJokes() {
    try {
        const response = await fetch(url,options);
        const data = await response.json();
        displayJoke(data.value);
    } catch (error) {
        console.error(error);
    }
}

function displayJoke(joke) {
    const jokesContainer = document.getElementById('jokesContainer');

    const jokeContainer = document.createElement('div');
    jokeContainer.classList.add('joke-container');
    jokeContainer.textContent = joke;

    jokesContainer.innerHTML = '';
    jokesContainer.appendChild(jokeContainer);
}
    
function refreshJoke() {
    getRandomJokes()
}

// Get and display a random joke when the page is loaded
getRandomJokes()

// Attach an event listner to the refresh button
const refreshButton = document.getElementById('Reload');
refreshButton.addEventListener('click',refreshJoke)