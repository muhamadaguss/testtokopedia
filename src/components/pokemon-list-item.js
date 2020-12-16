import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import PokemonImage from "./pokemon-image";
import Title from "./title";

const Card = styled.div`
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;

const PokemonListItem = (props) => (
  <Card className="pokemon-list-item w-1/2 md:w-1/4 wrounded overflow-hidden">
    <div className="m-2 p-3 shadow-lg text-center">
      <PokemonImage
        src={`https://img.pokemondb.net/artwork/${props.name}.jpg`}
        alt={props.name}
      />
      <Title text={props.name} />
      <Link
        to={`/pokemon/${props.name}`}
        className="block w-full rounded-full bg-red-500 hover:bg-red-700 text-white text-xs font-bold p-2 text-center"
      >
        Details
      </Link>
    </div>
  </Card>
);

export default PokemonListItem;
