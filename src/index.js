const apiKey = 'c15a8021aaa6d4c7b6fb2a77982f0396';
const getWeatherData = async (cityName) => {
  try {
    const result = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`);
    const response = await result.json();
    console.log(response);
  } catch (e) {
    console.log(e);
  }
};

getWeatherData('kigali');
