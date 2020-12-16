import React from "react";

const styleTypeItem = {
  display: `inline-block`,
  padding: `2px 5px`,
  border: `1px solid #ccc`,
  marginRight: `5px`,
  marginBottom: `5px`,
  borderRadius: `5px`,
};
const TYPE_COLORS = {
  bug: "B1C12E",
  dark: "4f3A2D",
  dragon: "755EDF",
  electric: "FCBC17",
  fairy: "F4B1F4",
  fighting: "823551D",
  fire: "E73B0C",
  flying: "A3B3F7",
  ghost: "6060B2",
  grass: "74c236",
  ground: "D3B357",
  ice: "A3E7BD",
  normal: "C8C4BC",
  poison: "934594",
  psychic: "ED4882",
  rock: "B9A156",
  steel: "B5B5C3",
  water: "3295F6",
};

const PokemonType = (props) => (
  <span
    className="badge badge-primary badge-pill mr-1"
    style={{
      backgroundColor: `#${TYPE_COLORS[props.type]}`,
      color: "white",
      display: `inline-block`,
      padding: `2px 5px`,
      border: `1px solid #ccc`,
      marginRight: `5px`,
      marginBottom: `5px`,
      borderRadius: `5px`,
    }}
  >
    {props.type
      .toLowerCase()
      .split("")
      .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
      .join("")}
  </span>
);

export default PokemonType;
