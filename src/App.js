import axios from "axios";
import WeatherSrc from "./WeatherSrc";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       
        <h1>
       Hello World
        </h1>
        <WeatherSrc />
      </header>
    </div>
  );
}

export default App;
