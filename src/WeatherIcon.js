import React from "react";

export default function WeatherInfo(props) {
   const iconMapping = {
      "clear-sky-day": "clear-day",
      "clear-sky-night": "clear-night",

      "few-clouds-day": "partly-cloudy-day",
      "few-clouds-night": "partly-cloudy-night",

      "scattered-clouds-day": "cloudy",
      "scattered-clouds-night": "cloudy",

      "broken-clouds-day": "overcast-day",
      "broken-clouds-night": "overcast-night",

      "shower-rain-day": "partly-cloudy-day-rain",
      "shower-rain-night": "partly-cloudy-night-rain",

      "rain-day": "rain",
      "rain-night": "rain",

      "thunderstorm-day": "thunderstorms-day-rain",
      "thunderstorm-night": "thunderstorms-night-rain",

      "snow-day": "partly-cloudy-day-snow",
      "snow-night": "partly-cloudy-night-snow",

      "mist-day": "fog-day",
      "mist-night": "fog-night",
   };

   const iconName = iconMapping[props.code];

   return (
      <img
         src={`https://cdn.meteocons.com/3.0.0-next.6/svg/fill/${iconName}.svg`}
         alt={props.alt}
         className="weather-app-icon"
      />
   );
}
