import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles.css";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
   let [loaded, setLoaded] = useState(false);
   let [forecast, setForecast] = useState(null);

   function handleRespose(response) {
      setForecast(response.data.daily);
      setLoaded(true);
   }

   useEffect(() => {
      if (!props.coordinates) return;
      setLoaded(false);

      let lat = props.coordinates.latitude;
      let lon = props.coordinates.longitude;
      let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${lon}&lat=${lat}&key=297bdob5643aebcfc422bc019b792eta&units=metric`;
      axios.get(apiUrl).then(handleRespose);
   }, [props.coordinates]);

   if (!props.coordinates || !loaded || !forecast) {
      return null;
   }

   return (
      <div className="weather-forecast" id="forecast">
         {forecast.slice(0, 5).map(function (dailyForecast, index) {
            return (
               <div className="weather-forecast-day" key={index}>
                  <WeatherForecastDay data={dailyForecast} />
               </div>
            );
         })}
      </div>
   );
}
