import React, { useEffect, useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
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
         date: new Date(response.data.time * 1000),
         icon: `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`,
      });
   }

   useEffect(() => {
      setWeather({ ready: false });

      let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.city}&key=297bdob5643aebcfc422bc019b792eta&units=metric`;
      axios.get(apiUrl).then(displayWeather);
   }, [props.city]);

   if (!weather.ready) {
      return "Loading...";
   }

   return (
      <div className="weather-app-data">
         <div>
            <h1 className="weather-app-city">{weather.city}</h1>

            <p className="weather-app-details">
               <FormattedDate date={weather.date} />
               <span className="text-capitalize"> {weather.description}</span>
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
}
