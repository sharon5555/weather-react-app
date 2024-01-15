import React, { useEffect, useState } from 'react';
import './index.css';

const WeatherBackground = ({ weatherCode }) => {
const [backgroundClass, setBackgroundClass] = useState('default-background');

    useEffect(() => {
    setBackgroundClass(getBackgroundClass(weatherCode));
    }, [weatherCode]);

    const getBackgroundClass = (code) => {
    switch (code) {
      case 800: // Clear sky
        return 'clear-sky';
      case 801: // Few clouds
      case 802: // Scattered clouds
      case 803: // Broken clouds
      case 804: // Overcast clouds
        return 'cloudy';
    default:
        return 'default-background';
    }
};

return <div className={`weather-background ${backgroundClass}`}></div>;
};

export default WeatherBackground;
