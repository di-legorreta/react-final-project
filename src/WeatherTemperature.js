import React, { useState } from "react";

export default function WeatherTemperature(props) {
   const [unit, setUnit] = useState("celsius");

   function showFahrenheit(event) {
      event.preventDefault();
      setUnit("fahrenheit");
   }

   function showCelsius(event) {
      event.preventDefault();
      setUnit("celsius");
   }

   function convertFahrenheit() {
      return (props.celsius * 9) / 5 + 32;
   }

   if (unit === "celsius") {
      return (
         <div>
            <span className="weather-app-temp-value">
               {" "}
               {Math.round(props.celsius)}
            </span>
            <span className="weather-app-temp-unit">
               °C |{" "}
               <a href="/" onClick={showFahrenheit}>
                  {" "}
                  °F{" "}
               </a>
            </span>
         </div>
      );
   } else {
      return (
         <div>
            <span className="weather-app-temp-value">
               {" "}
               {Math.round(convertFahrenheit())}
            </span>
            <span className="weather-app-temp-unit">
               <a href="/" onClick={showCelsius}>
                  {" "}
                  °C{" "}
               </a>{" "}
               | °F
            </span>
         </div>
      );
   }
}
