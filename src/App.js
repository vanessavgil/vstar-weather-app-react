import axios from "axios";
import WeatherSrc from "./WeatherSrc";
import React from "react";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Vanessa's Weather App</h1>
        <WeatherSrc />
      </header>
      <br />
      <div>
        <a href="https://github.com/vanessavgil/vstar-weather-app-react">
          open source code
        </a>
        by vanessa gil
      </div>
    </div>
  );
}

export default App;
