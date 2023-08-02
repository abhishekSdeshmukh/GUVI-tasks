async function getStoicQuote() {
    try {
        const response = await fetch('https://api.themotivate365.com/stoic-quote');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching Stoic quote:', error);
        return null;
    }
}

function getRandomColor() {
    const colors = [
      '#FF5733', '#33FF57', '#5733FF', '#FF33A1', '#33A1FF', '#A1FF33', '#FF9A33',
      '#FF33FF', '#33FF33', '#33A1A1', '#A133FF', '#FF5733', '#33FF57', '#5733FF',
      '#FF33A1', '#33A1FF', '#A1FF33', '#FF9A33', '#FF33FF', '#33FF33', '#33A1A1',
      '#A133FF', '#FF5733', '#33FF57', '#5733FF', '#FF33A1', '#33A1FF', '#A1FF33',
      '#FF9A33', '#FF33FF', '#33FF33', '#33A1A1', '#A133FF', '#FF5733', '#33FF57',
      '#5733FF', '#FF33A1', '#33A1FF', '#A1FF33', '#FF9A33', '#FF33FF', '#33FF33',
      '#33A1A1', '#A133FF', '#FF5733', '#33FF57', '#5733FF', '#FF33A1', '#33A1FF',
      '#A1FF33', '#FF9A33', '#FF33FF', '#33FF33', '#33A1A1', '#A133FF'
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  }
  
  
  function displayMultipleQuotes(quotes) {
    const quoteContainer = document.getElementById('quoteContainer');
    quoteContainer.innerHTML = ''; // Clear previous quotes
  
    // Loop through the quotes and display them
    quotes.forEach((quoteData) => {
      const quoteText = quoteData.quote;
      const quoteAuthor = quoteData.author;
  
      const quoteElement = document.createElement('div');
      quoteElement.classList.add('quote-container');
  
      const quoteTextElement = document.createElement('p');
      quoteTextElement.textContent = `"${quoteText}"`;
  
      const quoteAuthorElement = document.createElement('p');
      quoteAuthorElement.textContent = `- ${quoteAuthor}`;
  
      quoteElement.appendChild(quoteTextElement);
      quoteElement.appendChild(quoteAuthorElement);
      quoteContainer.appendChild(quoteElement);
  
      // Set a random background color for each quote element
      const quoteColor = getRandomColor();
      quoteElement.style.backgroundColor = quoteColor;
    });
  }
  
  
async function refreshQuote() {
    const numQuotes = 3;
    const quotes = [];

    // Fetch multiple quotes and store them in the quotes array
    for (let i = 0; i < numQuotes; i++) {
        const quoteData = await getStoicQuote();
        if (quoteData) {
            quotes.push(quoteData);
        }
    }

    // Display the fetched quotes
    displayMultipleQuotes(quotes);
}


// Get and display 3 random Stoic quotes when the page is loaded
refreshQuote();

// Attach an event listener to the refresh button
const refreshButton = document.getElementById('refreshButton');
refreshButton.addEventListener('click', refreshQuote);