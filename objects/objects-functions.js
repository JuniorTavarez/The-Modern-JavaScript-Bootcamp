const fahrenheit = fahrenheit => {
  const celsius = ((fahrenheit - 32) * 5) / 9;
  const kelvin = ((fahrenheit + 459.67) * 5) / 9;

  const calculation = {
    fahrenheit: fahrenheit,
    celsius: celsius,
    kelvin: kelvin
  };
  return `Fahrenheit ${
    calculation.fahrenheit
  } Celsius ${calculation.celsius.toFixed(
    2
  )} Kelvin ${calculation.kelvin.toFixed(2)}`;
};

console.log(fahrenheit(29));
