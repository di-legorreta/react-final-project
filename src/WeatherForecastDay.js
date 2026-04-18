import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
   function maxTemperature() {
      let temperature = Math.round(props.data.temperature.maximum);
      return temperature;
   }

   function minTemperature() {
      let temperature = Math.round(props.data.temperature.minimum);
      return temperature;
   }

   function setDay() {
      let date = new Date(props.data.time * 1000);
      let setDay = date.getDay();
      let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      return days[setDay];
   }

   return (
      <div>
         <div className="weather-forecast-date">{setDay()} </div>
         <div className="weather-app-icon">
            <WeatherIcon code={props.data.condition.icon} />
         </div>
         <div className="weather-forecast-temps">
            <div className="weather-forecast-temper">
               <strong> {maxTemperature()}°C </strong>
            </div>
            <div className="weather-forecast-temper">{minTemperature()}°C</div>
         </div>
      </div>
   );
}
