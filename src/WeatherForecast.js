import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";
import "./styles.css";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherDailyForecast(props) {
   let [loaded, setLoaded] = useState(false);
   let [forecast, setForecast] = useState(null);

   function handleRespose(response) {
      console.log(response.data);
      setForecast(response.data.daily);
      setLoaded(true);
   }

   if (loaded) {
      return (
         <div className="weather-forecast" id="forecast">
            <div className="weather-forecast-day">
               <WeatherForecastDay data={forecast[0]} />
            </div>
         </div>
      );
   } else {
      let city = props.city;
      let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=297bdob5643aebcfc422bc019b792eta&units=metric`;
      axios.get(apiUrl).then(handleRespose);
      return null;
   }
}
