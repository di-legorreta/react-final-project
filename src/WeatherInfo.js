import React, { useState } from "react";
import axios from "axios";

export default function WeatherInfo(props) {
   const [city, setCity] = useState("");
   const [weather, setWeather] = useState({ ready: false });

   function displayWeather(response) {
      console.log(response.data);
      setWeather({
         ready: true,
         city: response.data.city,
         temperature: response.data.temperature.current,
         wind: response.data.wind.speed,
         humidity: response.data.temperature.humidity,
         description: response.data.condition.description,
         date: "Sunday 18:32",
         icon: `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`,
      });
   }

   if (weather.ready) {
      return (
         <div className="weather-app-data">
            <div>
               <h1 className="weather-app-city">{weather.city}</h1>

               <p className="weather-app-details">
                  Sunday 18:32{" "}
                  <span className="text-capitalize">{weather.description}</span>
                  <br />
                  Humidity: <strong>{weather.humidity}%</strong>, Wind:{" "}
                  <strong>{Math.round(weather.wind)}km/h</strong>
               </p>
            </div>

            <div className="weather-app-temp-container">
               <div className="weather-app-icon">
                  <img src={weather.icon} alt="icon" />
               </div>
               <div className="weather-app-temp-value">
                  {Math.round(weather.temperature)}
               </div>
               <div className="weather-app-temp-unit">°C</div>
            </div>
         </div>
      );
   } else {
      let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=297bdob5643aebcfc422bc019b792eta&units=metric`;
      axios.get(apiUrl).then(displayWeather);
      return "Loading";
   }
}
