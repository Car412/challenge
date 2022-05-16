import React from "react";
import estilos from "../styles/country.module.css";

export default function Country(props) {
  //props.languages[0] === undefined ? console.log(props) : console.log(props.languages[0].name)
  return (
    <div>
      {props.active === "Continent" ? <h3>{props.continent}</h3> : ""}
      {props.active === "Language" && props.languages[0] !== undefined ? (
        <h3>{props.languages[0].name}</h3>
      ) : (
        ""
      )}
      <div className={estilos.contenedor}>
        <h2 className={estilos.name}>
          {props.name} - {props.emoji}
        </h2>
        <div className={estilos.h6}>
          <h6>
            Capital: {props.capital}
            <br />
            Languages:{" "}
            {props.languages !== undefined
              ? props.languages.map((language) => language.name).join(", ")
              : "No official languages"}
          </h6>
        </div>
      </div>
    </div>
  );
}
