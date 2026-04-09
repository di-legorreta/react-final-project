import React, { useState } from "react";
import Header from "./Header";
import SearchForm from "./SearchForm";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import Footer from "./Footer";

export default function Weather() {
   const [city, setCity] = useState("Berlin");

   function handleCityChange(newCity) {
      setCity(newCity);
   }

   return (
      <div className="weather-container glass">
         <main>
            <Header />
            <SearchForm onSearch={handleCityChange} />
            <WeatherInfo city={city} />
            <WeatherForecast />
         </main>
         <Footer />
      </div>
   );
}
