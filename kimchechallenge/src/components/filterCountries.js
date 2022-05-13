import React from "react";
import { useQuery } from "@apollo/react-hooks";
import Country from "./country";
import { Button } from "react-bootstrap";

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
      <div className="groups">
        <h2>Group by:</h2>
        {types.map((type) => (
          <Button
            variant="outline-secondary"
            key={type}
            active={active === type}
            onClick={() => setActive(type)}
          >
            {type}
          </Button>
        ))}
      </div>
      {filteredCountries.map((c) => {
        return (
          <Country
            key={c.name}
            capital={c.capital}
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
