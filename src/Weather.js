import React from "react";
import Header from "./Header";
import SearchForm from "./SearchForm";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import Footer from "./Footer";

export default function Weather() {
   return (
      <div className="weather-container glass">
         <Header />
         <SearchForm />
         <main>
            <WeatherInfo />
            <WeatherForecast />
         </main>
         <Footer />
      </div>
   );
}
