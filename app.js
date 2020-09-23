const celciusInput = document.querySelector('#celcius > input');
const fahrenheitInput = document.querySelector('#fahrenheit > input');
const kelvinInput = document.querySelector('#kelvin > input');

function celciusToFahrenheitAndKelvin() {
  const celciusTemp = parseFloat(celciusInput.value);
  const fahrenheitTemp = (celciusTemp *(9/5)) + 32;
  const kelvinTemp = celciusTemp + 273.15;
  fahrenheitInput.value = fahrenheitTemp;
  kelvinInput.value = kelvinTemp;
};
function fahrenheitToCelciusAndKelvin() {
  const fahrenheitTemp = parseFloat(fahrenheitInput.value);
  const celciusTemp = (fahrenheitTemp - 32) * (5/9);
  const kelvinTemp = (fahrenheitTemp + 459.67) * (5/9);
  celciusInput.value = celciusTemp;
  kelvinInput.value = kelvinTemp;
};
function kelvinToCelciusAndFahrenheit() {
  const kelvinTemp = parseFloat(kelvinInput.value);
  const celciusTemp = kelvinTemp - 273.15;
  const fahrenheitTemp = (kelvinTemp - 273.15) * (9/5) + 32;
  celciusInput.value = celciusTemp;
  fahrenheitInput.value = fahrenheitTemp;
};

celciusInput.addEventListener ('input', celciusToFahrenheitAndKelvin);
fahrenheitInput.addEventListener ('input',fahrenheitToCelciusAndKelvin);
kelvinInput.addEventListener ('input', kelvinToCelciusAndFahrenheit);