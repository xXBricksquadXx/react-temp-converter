const converters = {
  toCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
  },

  toFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
  },
};

// 'conversion' will either be "toCelsius" OR "toFahrenheit"
const convert = (temperature, conversion) => {
  const parsedTemp = parseFloat(temperature);
  if (Number.isNaN(parsedTemp)) {
    return "Not something we can convert! 😞";
  }

  // INVOKE the 'method' 👆🏾 by passing in 'parsedTemp'
  return Math.round(converters[conversion](parsedTemp) * 1000) / 1000;
};

export default convert;
