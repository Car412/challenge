import React from "react";
import { gql } from "apollo-boost";
import FilterCountries from "./filterCountries";


export default function Home() {
  const [country, setCountry] = React.useState("");

  const getcountries = gql`
    query {
      countries {
        name
        capital
        continent {
          name
        }
        languages {
          name
        }
        emoji
      }
    }
  `;

  function handleInputChange(e) {
    e.preventDefault();
    setCountry(e.target.value);
  }

  return (
    <div>
      <h1>Countries</h1>
      <h3>You can filter countries by Continent or Language: </h3>
    <div>
      <input
        type="text"
        placeholder="Country name..."
        onChange={(e) => handleInputChange(e)}
      /> 
      <FilterCountries getcountries={getcountries} country={country} />
    </div>
    </div>
  );
}
