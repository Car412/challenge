import React from "react";
import estilos from "../styles/home.module.css";
import FilterCountries from "./filterCountries";
import { gql } from "apollo-boost";

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

  function handleChange(e) {
    setCountry(e.target.value);
  }

  return (
    <div>
      <input
        className={estilos.contenedor}
        type="text"
        onChange={(e) => handleChange(e)}
        placeholder="Country name..."
      />
      <FilterCountries getcountries={getcountries} country={country} />
    </div>
  );
}
