import axios from "axios";
import WeatherSrc from "./WeatherSrc";
import { Link } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World</h1>
        <WeatherSrc />
      </header>
      <br />
  
        <link to="https://github.com/vanessavgil/vstar-weather-app-react">
          open source code 
        </link>
        by vanessa gil
    
    </div>
  );
}

export default App;
