const display = document.getElementById("display");

function appendToDisplay(input) {
    const current = display.value;
    
    // Prevent multiple operators or decimals
    const lastChar = current[current.length - 1];
    if (isOperator(lastChar) && isOperator(input)) return;
    if (lastChar === '.' && input === '.') return;
    
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function deleteLastChar() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        const result = eval(display.value);
        if (!isFinite(result)) throw new Error("Math Error");
        display.value = result;
    } catch (error) {
        display.value = "Error";
    }
}

function isOperator(char) {
    return ['+', '-', '*', '/'].includes(char);
}

document.addEventListener("keydown", function(event) {
    if (event.key.match(/[0-9.+\-*/]/)) {
        appendToDisplay(event.key);
    } else if (event.key === "Enter") {
        calculate();
    } else if (event.key === "Backspace") {
        deleteLastChar();
    } else if (event.key === "Escape") {
        clearDisplay();
    }
});