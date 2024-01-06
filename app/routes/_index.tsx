import { ActionFunctionArgs, redirect } from '@remix-run/node';
import SearchPage from '~/components/SearchPage';
import WeatherDataPage from '~/components/WeatherDataPage';
import { useActionData } from '@remix-run/react';
import { fetchWeatherData } from '~/api';
import { useEffect, useState } from 'react';

export function headers({
  loaderHeaders,
  parentHeaders,
}: {
  loaderHeaders: Headers;
  parentHeaders: Headers;
}) {
  console.log(
    'This is an example of how to set caching headers for a route, feel free to change the value of 60 seconds or remove the header'
  );
  return {
    // This is an example of how to set caching headers for a route
    // For more info on headers in Remix, see: https://remix.run/docs/en/v1/route/headers
    'Cache-Control': 'public, max-age=60, s-maxage=60',
  };
}

export default function Index() {
  const data = useActionData();
  const [weatherData, setWeatherData] = useState<any>(data);

  useEffect(() => {
    setWeatherData(data);
  }, [data]);

  const handleBackClick = () => {
    setWeatherData(null);
  };

  const weatherDataMarkup = weatherData ? (
    <WeatherDataPage handleBackClick={handleBackClick} />
  ) : (
    <SearchPage />
  );

  return <div>{weatherDataMarkup}</div>;
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const locationInput = formData.get('location');

  const { dailyData, location, country } = await fetchWeatherData(
    locationInput as string
  );

  return { dailyData, location, country };
}
