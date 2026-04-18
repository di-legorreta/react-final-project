import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./styles.css";

export default function WeatherDailyForecast() {
   return (
      <div className="weather-forecast" id="forecast">
         <div className="weather-forecast-day">
            <div className="weather-forecast-date">Monday </div>
            <div className="weather-app-icon">
               <WeatherIcon code="broken-clouds-day" />
            </div>
            <div className="weather-forecast-temps">
               <div className="weather-forecast-temper">
                  <strong> 22 °C </strong>
               </div>
               <div className="weather-forecast-temper">14 °C</div>
            </div>
         </div>
      </div>
   );
}
