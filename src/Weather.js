import React from "react";
import Header from "./Header";
import SearchForm from "./SearchForm";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import Footer from "./Footer";

export default function Weather() {
   return (
      <div className="weather-container glass">
         <main>
            <Header />
            <SearchForm />
            <WeatherInfo defaultCity="Berlin" />
            <WeatherForecast />
         </main>
         <Footer />
      </div>
   );
}
