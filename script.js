const display = document.getElementById('display');

// Function to add numbers/operators to the screen
function appendValue(input) {
    const lastChar = display.value.slice(-1);
    const operators = ['+', '-', '*', '/'];

    // Challenge 1: Prevent multiple operators in a row
    if (operators.includes(input) && operators.includes(lastChar)) {
        return;
    }

    // Challenge 2: Prevent starting with an operator (except minus)
    if (display.value === "" && operators.includes(input) && input !== '-') {
        return;
    }

    display.value += input;
}

// Clears the display
function clearDisplay() {
    display.value = "";
}

// Performs the calculation
function calculate() {
    try {
        // Challenge 3: Prevent division by zero
        if (display.value.includes('/0')) {
            alert("Error: Division by zero is not allowed!");
            clearDisplay();
            return;
        }

        // Using eval to calculate the string expression
        if (display.value !== "") {
            display.value = eval(display.value);
        }
    } catch (error) {
        display.value = "Error";
    }
}

// Optional Challenge: Square root
function calculateSqrt() {
    if (display.value !== "" && display.value !== "Error") {
        display.value = Math.sqrt(eval(display.value));
    }
}