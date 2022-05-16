import React from "react";
import estilos from "../styles/country.module.css";

export default function Country(props) {
  return (
    <div>
      {props.active === "Continent" ? <h4>{props.continent}</h4> : ""}
      {props.active === "Language" && props.languages[0] !== undefined ? (
        <h4>{props.languages[0].name}</h4>
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
