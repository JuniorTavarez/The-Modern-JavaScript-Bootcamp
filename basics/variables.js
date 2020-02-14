let fahrenheit = 32;

const convertion = fahrenheit => {
  console.log('Celsius ' + ((fahrenheit - 32) * 5) / 9);
  console.log('Kelvin ' + ((fahrenheit + 459.67) * 5) / 9);
};

convertion(fahrenheit);
