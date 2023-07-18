// Get the necessary elements
const resultElement = document.getElementById('result');
const buttons = document.getElementsByClassName('button');
const containerElement = document.querySelector('.container');

// Initialize the current result
let currentResult = '';

// Attach click event listeners to the buttons
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', handleButtonClick);
}

// Attach keydown event listener to the document
document.addEventListener('keydown', handleKeyDown);

// Function to handle button clicks
function handleButtonClick(event) {
  const clickedButton = event.target;
  const buttonValue = clickedButton.textContent;

  handleButtonAction(buttonValue);
}

// Function to handle keydown events
function handleKeyDown(event) {
  const keyPressed = event.key;

  // Check if the pressed key matches any of the button values
  for (let i = 0; i < buttons.length; i++) {
    if (buttons[i].textContent === keyPressed) {
      handleButtonAction(keyPressed);
      return;
    }
  }

  // Display a notification or alert for other keys
  alert('Please press a valid calculator key!');
}

// Function to handle button action
function handleButtonAction(buttonValue) {
  if (buttonValue === '=') {
    // Evaluate the expression and display the result
    try {
      const expressionResult = eval(currentResult);
      resultElement.value = expressionResult;
      currentResult = expressionResult.toString();
    } catch (error) {
      resultElement.value = 'Error';
      currentResult = '';
    }
  } else if (buttonValue === 'C') {
    // Clear the result
    resultElement.value = '';
    currentResult = '';
  } else if (buttonValue === 'Del') {
    // Remove the last character from the result
    currentResult = currentResult.slice(0, -1);
    resultElement.value = currentResult;
  } else if (buttonValue === '%') {
    // Perform modulus operation
    currentResult += '%';
    resultElement.value = currentResult;
  } else {
    // Append the button value to the current result
    currentResult += buttonValue;
    resultElement.value = currentResult;
  }
}
