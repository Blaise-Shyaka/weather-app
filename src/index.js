const apiKey = 'c15a8021aaa6d4c7b6fb2a77982f0396';

const displayData = (data) => {
  const weatherTag = document.querySelector('#weather-tag');
  const visibilityTag = document.querySelector('#visibility-tag');
  const windspeedTag = document.querySelector('#windspeed-tag');
  const temperatureTag = document.querySelector('#temperature-tag');

  weatherTag.innerHTML = data.weather[0].description;
  temperatureTag.innerHTML = data.main.temp - 273.15;
  visibilityTag.innerHTML = data.visibility;
  windspeedTag.innerHTML = data.wind.speed;
};

const getWeatherData = async (cityName) => {
  try {
    const result = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`);
    const response = await result.json();
    displayData(response);
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
