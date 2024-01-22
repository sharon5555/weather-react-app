import React, { useState, useEffect } from 'react';

import index from "./index.css";

const WeatherBackground = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    // Fetch weather data from an API (replace 'API_ENDPOINT' with a real API endpoint)
    fetch("https://api.openweathermap.org")
      .then(response => response.json())
      .then(data => setWeather(data))
      .catch(error => console.error('Error fetching weather data:', error));
  }, []);

  // Function to get the background color based on the weather condition
  const getBackgroundColor = () => {
    // Implement logic based on the weather data to determine the background color
    // For simplicity, let's assume 'weather.condition' is available in the fetched data
    const condition = weather?.condition || 'default';

    switch (condition) {
      case 'sunny':
        return '#ffcc00';
      case 'cloudy':
        return '#cccccc';
      case 'rainy':
        return '#3399ff';
      default:
        return '#ffffff';
    }
  };

  return (
    <div className="weather-background" style={{ backgroundColor: getBackgroundColor() }}>
      {/* Display additional weather information if needed */}
      {weather && (
        <div className="weather-info">
        </div>
      )}
    </div>
  );
};

export default WeatherBackground;
