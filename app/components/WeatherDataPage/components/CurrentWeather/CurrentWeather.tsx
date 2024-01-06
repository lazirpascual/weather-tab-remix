import { useActionData } from '@remix-run/react';

const getTime = (dateTime: number) => {
  const currentSunrise = new Date(dateTime * 1000);
  return currentSunrise.toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });
};

export default function CurrentWeather() {
  const weatherData: any = useActionData();
  const currentWeather = weatherData.dailyData[0];

  const WeatherDetails = [
    {
      labelName: 'Humidity',
      value: `${currentWeather.humidity}%`,
    },
    {
      labelName: 'Air Pressure',
      value: `${currentWeather.pressure} hPa`,
    },
    {
      labelName: 'Feels Like',
      value: `${Math.round(currentWeather.feels_like)}°C`,
    },
    {
      labelName: 'Wind Speed',
      value: `${(currentWeather.wind_speed * 3.6).toFixed(2)} km/h`,
    },
    {
      labelName: 'Sunrise',
      value: getTime(currentWeather.sunrise),
    },
    {
      labelName: 'Sunset',
      value: getTime(currentWeather.sunset),
    },
    {
      labelName: 'Clouds',
      value: `${currentWeather.clouds}%`,
    },
    {
      labelName: 'Precipitation',
      value: `${Math.round(currentWeather.pop * 100)}%`,
    },
  ];

  const WeatherDetailsMarkup = WeatherDetails.map((detail, index) => {
    return (
      <div
        key={index}
        className="flex justify-between items-center border-b border-gray-600 py-2  text-white"
      >
        <span>{detail.labelName}</span>
        <span>{detail.value}</span>
      </div>
    );
  });

  return (
    <div className="h-auto w-96 bg-[#2d3550c9] shadow-xl rounded-lg text-lg p-5">
      <div className="text-white text-3xl">Today's Weather </div>
      <div className="text-white text-2xl pt-3">
        {weatherData.location}, {weatherData.country}
      </div>
      {WeatherDetailsMarkup}
    </div>
  );
}
