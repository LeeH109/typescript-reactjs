import React, { useState } from "react";
import { DetailPokemon, PokemonDT } from "../interface";

interface Props {
  pokemons: PokemonDT[];
  id: number;
}
const CardDetail: React.FC<Props> = ({ id, pokemons }) => {

  const pokemondetail = pokemons.find((pokemon) => pokemon.id === id);

  return (
    // h-[620px] 
    <div className="w-full  mt-14 h-[100vh] relative
     ">
      <div className="  w-11/12 bg-white m-auto bg-clip-border rounded-xl shadow-lg shadow-blue-gray-500/40 ">
        <div className="w-24 absolute top-[-75px] right-1/3">
            <img className="w-full" src={pokemondetail?.sprites.versions?.["generation-v"]["black-white"].animated.front_default} alt="" />
        </div>
      
        <div
          className="mx-7 mt-5 h-20 
     bg-blue-gray-200 "
        >
          <img src={pokemondetail?.sprites.front_default} />
        </div>
        <div className="p-6">
          <h5
            className="mb-2 block font-sans text-sm font-semibold text-center
        leading-snug tracking-normal text-blue-gray-900 antialiased"
          >
            {pokemondetail?.name}
          </h5>
          <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
            Ablities:
            {pokemondetail?.abilities?.map((ab: any) => {
              return <div className=""> {ab.ability.name}</div>;
            })}
            {pokemondetail?.types?.map((ab:any)=>{
  return <div className=""> {ab.type.name}</div>;
            })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardDetail;
