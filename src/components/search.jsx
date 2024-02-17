import React from "react";
import { useSearchParams } from "react-router-dom";


function Search()
{
    const [searchParams, setSearchParams] = useSearchParams();
    const age = searchParams.get('age');
    const city = searchParams.get('city');

    const handleAgeChange = (e) => {
        setSearchParams({ ...searchParams, age: e.target.value });
      };
    
      const handleCityChange = (e) => {
        setSearchParams({ ...searchParams, city: e.target.value });
      };
    
      const setAgeAndCity = () => {
        setSearchParams({ ...searchParams, age: "e.target.age",city: "e.target.city" });
      };

    return(
        <>
            <h1>Search Page</h1>
            <h3>Age is: {age}</h3>
            <h3>City is: {city}</h3>

            <input
        type="text"
        name="Age"
        placeholder="Age"
        value={age || ""}
        onChange={handleAgeChange}
      />
      <br />
      <input
        type="text"
        name="City"
        placeholder="City"
        value={city || ""}
        onChange={handleCityChange}
      />
      <br />
      <button onClick={setAgeAndCity}>Set Age and City</button>
        </>
    )
}

export default Search;