// const display = document.getElementById("display");

//     function appendToDisplay(value) {
//       // Validate input before appending to display
//       if (/^[0-9.+\-*/]*$/.test(value)) {
//         display.innerText += value;
//       }
//     }

//     function calculateResult() {
//       try {
//         const result = Function('"use strict";return (' + display.innerText + ')')();
//         display.innerText = result;
//       } catch {
//         display.innerText = "Error";
//       }
//     }

//     function clearDisplay() {
//       display.innerText = "";
//     }

//     function backspace() {
//         const currentDisplay = display.innerText;
//         display.innerText = currentDisplay.slice(0, -1);
//       }

// Get the display element from the DOM
const display = document.getElementById("display");

// Function to append valid input to the display
function appendToDisplay(value) {
  // Validate input before appending to display
  if (isValidInput(value)) {
    display.innerText += value;
  }
}

// Function to calculate and display the result
function calculateResult() {
  try {
    // Use the Function constructor to evaluate the expression
    const result = Function('"use strict";return (' + display.innerText + ')')();
    // Update the display with the calculated result
    display.innerText = result;
  } catch {
    // Handle any errors during calculation and display an error message
    display.innerText = "Error";
  }
}

// Function to clear the display
function clearDisplay() {
  display.innerText = "";
}

// Function to remove the last character from the display
function backspace() {
  // Get the current display content
  const currentDisplay = display.innerText;
  // Remove the last character
  display.innerText = currentDisplay.slice(0, -1);
}

// Function to check if the input contains only valid characters
function isValidInput(value) {
  // Define valid characters for input
  const validCharacters = '0123456789.+-*/';

  // Check if all characters in value are valid
  for (let char of value) {
    if (!validCharacters.includes(char)) {
      return false;
    }
  }

  return true;
}
