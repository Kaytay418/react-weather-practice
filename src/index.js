import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import React from "react";
import "./style.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <Weather />
      <br />
      <p>https://github.com/Kaytay418/react-weather-practice</p>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
