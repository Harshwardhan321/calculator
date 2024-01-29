const display = document.getElementById("display");

    function appendToDisplay(value) {
      // Validate input before appending to display
      if (/^[0-9.+\-*/]*$/.test(value)) {
        display.innerText += value;
      }
    }

    function calculateResult() {
      try {
        const result = Function('"use strict";return (' + display.innerText + ')')();
        display.innerText = result;
      } catch {
        display.innerText = "Error";
      }
    }

    function clearDisplay() {
      display.innerText = "";
    }

    function backspace() {
        const currentDisplay = display.innerText;
        display.innerText = currentDisplay.slice(0, -1);
      }