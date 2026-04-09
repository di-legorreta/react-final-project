import React, { useState } from "react";

export default function SearchForm(props) {
   const [city, setCity] = useState("");

   function handleSubmit(event) {
      event.preventDefault();
      props.onSearch(city);
   }

   function updateCity(event) {
      setCity(event.target.value);
   }

   return (
      <section>
         <form className="search-form" onSubmit={handleSubmit}>
            <input
               type="search"
               placeholder="Enter a city..."
               autoComplete="off"
               aria-label="Search city"
               onChange={updateCity}
            />
            <input type="submit" value="Search" />
         </form>
         <br />
      </section>
   );
}
