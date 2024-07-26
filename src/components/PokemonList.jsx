import React, { useState, useEffect } from "react";
import axios from "axios";
import PokemonCard from "./PokemonCard";
import { BiSearch } from "react-icons/bi";

const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=151"
      );
      const fetches = response.data.results.map(async (pokemon) => {
        const pokeData = await axios.get(pokemon.url);
        return pokeData.data;
      });
      const results = await Promise.all(fetches);
      setPokemonList(results);
    };
    fetchData();
  }, []);

  const filteredPokemon = pokemonList.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(search.toLowerCase())
  );

  if (!filteredPokemon) {
    return <div className="text-white text-center">Loading...</div>;
  }

  return (
    <div>
      <div className="max-w-md w-full m-auto mb-5 flex  items-center border-[1.7px] border-gray-300/50 rounded-lg px-3 py-2 ">
        <input
          type="text"
          placeholder="Search Pokemon"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border-none focus:outline-none bg-transparent"
        />
        <BiSearch size={23} />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 capitalize tracking-wider">
        {filteredPokemon.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
};

export default PokemonList;
