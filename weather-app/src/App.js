import React from 'react';
import index from "./index.css";

let api = {
  key: "a969311cfcbb4a83dfad2cf7478397f9",
  url: "https://api.openweathermap.org"
}

function App() {

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
    <main>
    <div className="search-box">
    <input type="text" className='search-bar'
    placeholder='Search...'
    />
    </div>
    <div className="location-box">
    <div className="location">New York City, US</div>
    <div className="date">{dateBuilder(new Date())}</div>
    </div>
    <div className="weather-box">
    <div className="temp">15°c</div>
    <div className="weather">Sunny</div>
    </div>
    </main>
    </div>
  );
}

export default App;