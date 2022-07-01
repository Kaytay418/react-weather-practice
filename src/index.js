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
      <footer>
        This project was coded by Katie Latham and is{" "}
        <a
          href="https://github.com/Kaytay418/react-weather-practice"
          target="_blank"
        >
          open-sourced on Github
        </a>
      </footer>
      <p></p>
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
