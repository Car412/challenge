import React from "react";
import { useQuery } from "@apollo/react-hooks";
import Country from "./country";
import { Button } from "react-bootstrap";
import estilos from "../styles/filter.module.css"

export default function FilterCountries(props) {
  const types = ["Continent", "Language"];
  const { loading, error, data } = useQuery(props.getcountries);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  let filteredCountries = data.countries.filter((country) =>
    country.name.includes(props.country)
  );

  return (
    <>
      <div className={estilos.contenedor}>
        <h4>Group by:</h4>
        {types.map((type) => (
          <Button
            variant="outline-primary"
            key={type}           
          >
            {type}
          </Button>
        ))}
      </div>
      {filteredCountries.map((c) => {
        return (
          <div>
          <Country
            key={c.name}
            name={c.name}
            emoji={c.emoji}
            capital={c.capital}
            continent={c.continent.name}
            languages={c.languages}            
          />
          </div>
        );
      })}
    </>
  );
}
