// src/WeatherData.jsx
const WeatherData = ({ day, conditions, time }) => {
    return (
      <div>
        <h2>{day}</h2>
        <p>conditions: {conditions}</p>
        <p>time: {time}</p>
      </div>
    );
  };
  
  export default WeatherData;