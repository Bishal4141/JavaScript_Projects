const celsiusInput = document.getElementById('celsius');
const fahrenheitInput = document.getElementById('fahrenheit');
const kelvinInput = document.getElementById('kelvin');

// --- Conversion Functions for better modularity and readability ---

function fahrenheitToCelsius(f) {
    return (f - 32) / 1.8;
}

function celsiusToFahrenheit(c) {
    return c * 1.8 + 32;
}

function kelvinToCelsius(k) {
    return k - 273.15;
}

function celsiusToKelvin(c) {
    return c + 273.15;
}

function computeTemperatures(event) {
    const sourceInput = event.target;
    const sourceName = sourceInput.name;

    // Using the unary plus operator is a concise way to convert to a number.
    const currentNumValue = +sourceInput.value;

    // If input is an empty string, clear all fields and stop.
    if (sourceInput.value === '') {
        celsiusInput.value = '';
        fahrenheitInput.value = '';
        kelvinInput.value = '';
        return;
    }

    // If the value is not a valid number, do nothing further.
    if (isNaN(currentNumValue)) {
        return;
    }

    let celsiusValue;

    // 1. Convert the input value to a base unit (Celsius) for simplicity.
    switch (sourceName) {
        case 'celsius':
            celsiusValue = currentNumValue;
            break;
        case 'fahrenheit':
            celsiusValue = fahrenheitToCelsius(currentNumValue);
            break;
        case 'kelvin':
            celsiusValue = kelvinToCelsius(currentNumValue);
            break;
        default:
            return; // Should not happen
    }

    // 2. Update the other input fields based on the calculated Celsius value.
    if (sourceName !== 'celsius') {
        celsiusInput.value = celsiusValue.toFixed(2);
    }
    if (sourceName !== 'fahrenheit') {
        fahrenheitInput.value = celsiusToFahrenheit(celsiusValue).toFixed(2);
    }
    if (sourceName !== 'kelvin') {
        kelvinInput.value = celsiusToKelvin(celsiusValue).toFixed(2);
    }
}
