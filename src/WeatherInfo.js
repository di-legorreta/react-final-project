export default function WeatherInfo() {
   return (
      <div className="weather-app-data">
         <div>
            <h1 className="weather-app-city">Paris</h1>

            <p className="weather-app-details">
               Sunday 18:32 clear sky
               <br />
               Humidity: <strong>52%</strong>, Wind: <strong>6km/h</strong>
            </p>
         </div>

         <div className="weather-app-temp-container">
            <div className="weather-app-icon">☀️</div>
            <div className="weather-app-temp-value">12</div>
            <div className="weather-app-temp-unit">°C</div>
         </div>
      </div>
   );
}
