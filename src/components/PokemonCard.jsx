import React from "react";

const PokemonCard = ({ pokemon }) => {
  return (
    <div className=" border border-gray-300/50 flex flex-col items-center m-5 py-3 rounded-lg hover:scale-105 transition-all duration-200 ease-out cursor-pointer">
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <h3>{pokemon.name}</h3>
    </div>
  );
};

export default PokemonCard;
