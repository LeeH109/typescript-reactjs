import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import PokemonCollection from "./components/PokemonCollection";
import { Pokemon } from "./interface";

const App: React.FC = () => {

  const [pokemons , setPokemons] = useState<Pokemon[]>([]);
  useEffect(() => {
    const getPoke = async () => {
      const res = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=20&offset=20"
      );
      console.log(res.data);

      res.data.results.forEach(async (pokemon: Pokemon) => {
        const poke = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        setPokemons((p) => [...p, poke.data]);
      });
    };
    getPoke();
  }, []);
console.log(pokemons);

  
  return (
    <div className="App">
      <div className=" text-2xl bg-red-300 h-100  w-full flex items-center justify-center bg-teal-lightest font-sans"></div>
      <PokemonCollection pokemon={pokemons} />
    </div>
  );
};

export default App;
