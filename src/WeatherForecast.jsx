// src/WeatherForecast.jsx
import './WeatherForecast.css';
import WeatherIcon from './WeatherIcon';
import WeatherData from './WeatherData';

const WeatherForecast = ({ day, img, imgAlt, conditions, time }) => {
  return (
    <div className="weather">
      <h2>{day}</h2>
      <img src={img} alt={imgAlt} />
      <p>conditions: {conditions}</p>
      <p>time: {time}</p>
    </div>
  );
};

export default WeatherForecast;