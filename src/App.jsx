import React from "react";
import PokemonList from "./components/PokemonList";

function App() {
  return (
    <div className="text-yellow-400">
      <h1 className="text-center  py-10 font-bold text-3xl md:text-4xl">
        Pokemon List
      </h1>
      <PokemonList />
    </div>
  );
}

export default App;
