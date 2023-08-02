function getRandomQuotes(count){
    fetch(`https://quote-garden.onrender.com/api/v3/quotes/random?count=${count}`)
    .then((res) => res.json())
.then((data) => {
    displayQuotes(data.data);
})
.catch((error) => console.error('Error fetching quotes: ', error));
};

function displayQuotes( quotesData) {
    // Select the existing container element by its ID
const quotesContainer = document.getElementById('quotes');
    quotesContainer.innerHTML= "";

    quotesData.forEach(quoteData  => {
        const quote = quoteData.quoteText;
        const author = quoteData.quoteAuthor;
        const quoteElement = document.createElement('div');
        quoteElement.classList.add("quote-box");
        // create the html structure for each quote box with class "quote"
        quoteElement.innerHTML = `<p>"${quote}"</p><p>-"${author}"</p>`;
        quotesContainer.appendChild(quoteElement);
    });
}

function reloadPage () {
    // Reload page and fetch new quotes
    window.location.reload();
}

// Call the function to get and display three random quotes when the page is loaded 
getRandomQuotes(5);
 const refreshPage = document.getElementById("Reload")
 refreshPage.addEventListener('click', reloadPage);