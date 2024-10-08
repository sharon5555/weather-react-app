import React, { useState } from 'react';
import WeatherBackground from './WeatherBackground';
import index from "./index.css";

let api = {
  key: "02ba2e827bf35f642d22918e9924f814",
  url: "https://api.openweathermap.org"
}

function App() {
  let [query, setQuery] = useState('');
  let [weather, setWeather] = useState({});

  let search = (evt) => {
    if (evt.key === "Enter") {
      fetch(`${api.url}/data/2.5/weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setQuery('');
          setWeather(result);
          console.log(result);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
          // Handle the error as needed
        });
    }
  };
  

  let dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }
  return (
    <div className="App">
    <WeatherBackground weatherCode={weather.weather?.[0]?.id || null} />
    <main>
    <div className="search-box">
    <input type="text" className='search-bar'
    placeholder='Search For City...'
    onChange={e => setQuery(e.target.value)}
    value={query}
    onKeyPress={search}
    />
    </div>
    {typeof weather.main != "undefined" ? (
    <div>
    <div className="location-box">
    <div className="location">{weather.name}, {weather.sys.country}</div>
    <div className="date">{dateBuilder(new Date())}</div>
    </div>
    <div className="weather-box">
    <div className="temp">{Math.round(weather.main.temp)}°c</div>
      {/*
              <div className="weather">
                <img className = "weather-icon"
                  src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
                  alt={weather.weather[0].description}
                />
              </div>
        */}
    </div>
    </div>
    ) : ('') }
    </main>
    </div>
  );
}

export default App;