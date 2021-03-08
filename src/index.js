import displayData from './dom';
import './index.css';

const apiKey = process.env.API_KEY;

const getWeatherData = async (cityName, units) => {
  try {
    const result = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=${units}`);
    const response = await result.json();
    return displayData(response);
  } catch (e) {
    return e;
  }
};

const sendRequest = () => {
  const submitBtn = document.querySelector('#submit-city-name');

  submitBtn.addEventListener('click', () => {
    const userInput = document.querySelector('#city-name-input').value;
    const units = document.querySelector('#measuring-unit').value;
    getWeatherData(userInput, units);
  });
};

sendRequest();
