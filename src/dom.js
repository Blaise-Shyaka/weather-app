const displayData = (data) => {
  const weatherTag = document.querySelector('#weather-tag');
  const visibilityTag = document.querySelector('#visibility-tag');
  const windspeedTag = document.querySelector('#windspeed-tag');
  const temperatureTag = document.querySelector('#temperature-tag');
  const errorTag = document.querySelector('#error-tag');
  const cityTag = document.querySelector('#city-tag');
  const weatherIcon = document.querySelector('#weather-icon');
  const unitSign = document.querySelector('#unit');

  errorTag.innerHTML = '';

  if (data.cod === '400') {
    errorTag.innerHTML = 'Please fill in a correct city name!';
    return;
  }

  if (data.message) {
    errorTag.innerHTML = data.message;
    return;
  }

  weatherTag.innerHTML = data.weather[0].description;
  temperatureTag.innerHTML = (data.main.temp - 273.15).toFixed(1);
  visibilityTag.innerHTML = `Visibility: ${data.visibility}`;
  windspeedTag.innerHTML = `Wind Speed: ${data.wind.speed}`;
  cityTag.innerHTML = data.name;
  unitSign.innerHTML = '<sup>o</sup>C';
  weatherIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
};

export default displayData;
