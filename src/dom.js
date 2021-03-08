const resetDataDisplay = () => {
  document.querySelector('#error-tag').innerHTML = '';
  document.querySelector('#weather-tag').innerHTML = '';
  document.querySelector('#temperature-tag').innerHTML = '';
  document.querySelector('#visibility-tag').innerHTML = '';
  document.querySelector('#windspeed-tag').innerHTML = '';
  document.querySelector('#city-tag').innerHTML = '';
  document.querySelector('#unit').innerHTML = '';
  document.querySelector('#weather-tag').innerHTML = '';
  document.querySelector('#weather-icon').src = '';
};

const displayData = (data) => {
  const weatherTag = document.querySelector('#weather-tag');
  const visibilityTag = document.querySelector('#visibility-tag');
  const windspeedTag = document.querySelector('#windspeed-tag');
  const temperatureTag = document.querySelector('#temperature-tag');
  const errorTag = document.querySelector('#error-tag');
  const cityTag = document.querySelector('#city-tag');
  const weatherIcon = document.querySelector('#weather-icon');
  const unitSign = document.querySelector('#unit');
  const units = document.querySelector('#measuring-unit');

  resetDataDisplay();

  if (data.cod === '400') {
    errorTag.innerHTML = 'Please fill in a correct city name!';
    return;
  }

  if (data.message) {
    errorTag.innerHTML = data.message;
    return;
  }

  weatherTag.innerHTML = data.weather[0].description;
  temperatureTag.innerHTML = (data.main.temp).toFixed(1);
  visibilityTag.innerHTML = `Visibility: ${data.visibility}`;
  windspeedTag.innerHTML = `Wind Speed: ${data.wind.speed}`;
  cityTag.innerHTML = data.name;
  weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

  if (units.value === 'metric' && data.main.temp) {
    unitSign.innerHTML = '<sup>o</sup>C';
    return;
  }

  if (units.value === 'imperial' && data.main.temp) {
    unitSign.innerHTML = '<sup>o</sup>F';
    return;
  }

  if (units.value === 'standard' && data.main.temp) {
    unitSign.innerHTML = '<sup>o</sup>K';
  }
};

export default displayData;
