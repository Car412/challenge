import React from "react";
import estilos from "../styles/country.module.css"

export default function Country(props) {
  return (
    <div>
      {props.active === "Continent" ? <h2>{props.continent}</h2> : ""}
      {props.active === "Language" && props.languages[0] !== undefined ? (
        <h1>{props.languages[0].name}</h1>
      ) : (
        ""
      )}
      <div className={estilos.contenedor}>
        <h3 className={estilos.name}>{props.name} - {props.emoji}</h3>        
      <h6>
        Capital: {props.capital}
        <br />
        Continent: {props.continent}
        <br />
        Languages:{" "}
        {props.languages !== undefined
          ? props.languages.map((language) => language.name).join(", ")
          : "No official languages"}
      </h6>
    </div>
          </div>
  );
}
