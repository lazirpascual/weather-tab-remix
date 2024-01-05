import axios from 'axios';

export const fetchWeatherData = async (location: string) => {
  const cityUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=16f50bdf5889306f5580348e7afebac0`;

  const {
    data: { name, sys, coord },
  } = await axios.get(cityUrl);

  const oneCallUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coord.lat}&lon=${coord.lon}&exclude=current,minutely&units=metric&appid=16f50bdf5889306f5580348e7afebac0`;

  const {
    data: { daily },
  } = await axios.get(oneCallUrl);

  const dailyData = daily.map((currentData: any) => {
    return {
      current_temp: currentData.temp.day,
      min_temp: currentData.temp.min,
      max_temp: currentData.temp.max,
      feels_like: currentData.feels_like.day,
      dt: currentData.dt,
      desc: currentData.weather[0].description,
      humidity: currentData.humidity,
      pressure: currentData.pressure,
      wind_speed: currentData.wind_speed,
      icon: currentData.weather[0].icon,
      sunrise: currentData.sunrise,
      sunset: currentData.sunset,
      clouds: currentData.clouds,
      pop: currentData.pop,
    };
  });

  return { dailyData, location: name, country: sys.country };
};
