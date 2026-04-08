export default function SearchForm() {
   return (
      <section>
         <form className="search-form">
            <input
               type="search"
               name="city"
               placeholder="Enter a city.."
               autoComplete="off"
               aria-label="Search city"
            />
            <input type="submit" value="Search" />
         </form>
         <br />
      </section>
   );
}
