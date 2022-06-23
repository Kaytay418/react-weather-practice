import React, { useState } from "react";
import axios from "axios";

export default function Weather(props) {
  let [city, setCity] = useState("");
  let [temperature, setTemperature] = useState("");
  let [description, setDescription] = useState("");
  let [humidity, setHumidity] = useState("");
  let [wind, setWind] = useState("");
  let [iconUrl, setIconUrl] = useState("");

  let form = (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Enter city here.."
        onChange={updateCity}
      />
      <input type="submit" value="Search" />
    </form>
  );

  function updateWeather(response) {
    setTemperature(Math.round(response.data.main.temp));
    setDescription(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setIconUrl(
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6c5702b8e0bdf208e797742914ea7cea&units=imperial`;
    axios.get(apiUrl).then(updateWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  if (temperature) {
    return (
      <div className="Weather">
        {form}
        <ul>
          <li>Temperature: {temperature} ºF</li>
          <li>Description: {description}</li>
          <li>Humidity: {humidity} %</li>
          <li>Wind {wind} mph</li>
          <li className="image">
            <img src={iconUrl} alt={description} />
          </li>
        </ul>
      </div>
    );
  } else {
    return <div>{form}</div>;
  }
}
