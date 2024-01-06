import CurrentWeather from './components/CurrentWeather';
import { FaArrowLeft } from 'react-icons/fa/index.js';

interface WeatherDataPageProps {
  handleBackClick: () => void;
}

export default function WeatherDataPage({
  handleBackClick,
}: WeatherDataPageProps) {
  return (
    <div className="flex justify-center p-5 text-white text-2xl">
      <button
        className="fixed top-0 left-0 p-5"
        onClick={() => handleBackClick()}
      >
        <FaArrowLeft /> Back
      </button>
      <CurrentWeather />
    </div>
  );
}
