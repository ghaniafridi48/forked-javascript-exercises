const convertToCelsius = function(temp) {
  
  temp = (temp - 32) * (5/9
  );
  if (temp % 2 !== 0)
    return parseFloat(temp.toFixed(1));
  else
    return temp;
};

const convertToFahrenheit = function(temp) {
  
  temp = (temp * 9/5 + 32);
  if (temp % 2 !== 0)
    return parseFloat(temp.toFixed(1));
  else
    return temp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
