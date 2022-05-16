import React from "react";
import { useQuery } from "@apollo/react-hooks";
import Country from "./country";
import estilos from "../styles/filter.module.css";

export default function FilterCountries(props) {
  const types = ["Continent", "Language"];
  const [active, setActive] = React.useState(types[0]);
  const { loading, error, data } = useQuery(props.getcountries);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  let filteredCountries = data.countries.filter((country) =>
    country.name.includes(props.country)
  );
  return (
    <>
      <div className={estilos.contenedor}>
        <h5>
          <strong>Group by:</strong>
        </h5>
        {types.map((type) => (
          <button
            key={type}
            active={active === type}
            onClick={() => setActive(type)}
            className={estilos.boton}
          >
            {type}
          </button>
        ))}
      </div>
      {filteredCountries.map((c) => {
        return (
          <Country
            key={c.code}
            capital={c.capital}
            currency={c.currency}
            name={c.name}
            emoji={c.emoji}
            continent={c.continent.name}
            languages={c.languages}
            active={active}
          />
        );
      })}
    </>
  );
}
