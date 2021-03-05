import './index.css';

const apiKey = 'c15a8021aaa6d4c7b6fb2a77982f0396';

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

const getWeatherData = async (cityName) => {
  try {
    const result = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`);
    const response = await result.json();
    console.log(response);
    return displayData(response);
  } catch (e) {
    return e;
  }
};

const sendRequest = () => {
  const submitBtn = document.querySelector('#submit-city-name');

  submitBtn.addEventListener('click', () => {
    const userInput = document.querySelector('#city-name-input').value;
    getWeatherData(userInput);
  });
};

sendRequest();
