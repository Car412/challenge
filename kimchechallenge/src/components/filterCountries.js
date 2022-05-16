import React from "react";
import { useQuery } from "@apollo/react-hooks";
import Country from "./country";
import estilos from "../styles/filter.module.css";

export default function FilterCountries(props) {
  const options = ["Continent", "Language"];
  const [active, setActive] = React.useState(options[0]);
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
        {options.map((op) => (
          <button
            key={op}
            active={active === op}
            onClick={() => setActive(op)}
            className={estilos.boton}
          >
            {op}
          </button>
        ))}
      </div>
      {filteredCountries.map((c) => {
        return (
          <Country
            key={c.name}
            name={c.name}
            capital={c.capital}
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
