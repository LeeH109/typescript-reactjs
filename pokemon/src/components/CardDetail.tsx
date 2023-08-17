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
    <div
      className="w-full  mt-14  relative
     "
    >
      <div className="  w-11/12 bg-white m-auto bg-clip-border rounded-xl shadow-lg shadow-blue-gray-500/40 ">
        <div className="w-24 absolute top-[-75px] right-1/3">
          <img
            className="w-full"
            src={
              pokemondetail?.sprites.versions?.["generation-v"]["black-white"]
                .animated.front_default
            }
            alt=""
          />
        </div>

        
        <div className="pt-16 pb-96">
        <p className='text-gray-400 font-medium text-center'>  N°{id}</p>
          <h5
            className=" block font-sans text-2xl font-black mb-3 capitalize font-semibold text-center 
        leading-snug tracking-normal text-blue-gray-900 antialiased"
          >
            {pokemondetail?.name}
          </h5>
          <p className="flex m-auto justify-center  block font-sans text-base font-light leading-relaxed text-inherit antialiased">
          
             {pokemondetail?.types?.map((ab:any)=>{
  return <div className={`  bg-${ab.type.name} bg-grass
  px-1 py-1 border-1
 rounded-md  text-sm font-bold capitalize mx-1`} > {ab.type.name}</div>;
            })}
           
          </p>
          <div className="my-4 text-center">
            <h6 className="font-bold text-md "> Pokedex Entry </h6>
          </div>
          {/* weight - height */}
          <div className="">
            <div className="flex justify-center text-center text-md font-black mb-2 ">
              <p className="px-12 mx-1">Height</p>
              <p className="px-12 mx-1">Weight</p>
            </div>
            <div className="flex justify-center text-center">
              <p className="py-2  w-5/12 mx-1  bg-slate-100 rounded-3xl">
                {pokemondetail?.height ? pokemondetail.height / 10 : null}m{" "}
              </p>
              <p className="py-2  w-5/12 mx-1 bg-slate-100 rounded-3xl">
                {pokemondetail?.weight}kg{" "}
              </p>
            </div>
          </div>
          {/*  */}
          <div className="mt-4 mb-2">
            <div className="flex justify-center text-center text-md font-black mb-2 ">
         <p>Abilities</p>
            </div>


            <div className="flex justify-center text-center capitalize">
              {pokemondetail?.abilities?.map((ab: any) => {
              return (
                <div
                  className="py-2  mx-1 w-5/12  bg-slate-100 rounded-3xl"
                >
                  {ab.ability.name}
                </div>
              );
            })}
            
            </div>
          </div>
{/*  */}
<div className="mt-4 mb-2">
            <div className="flex justify-center text-center text-md font-black mb-2 ">
         <p>Stats</p>
            </div>


            <div className="flex justify-center text-center capitalize">
              {pokemondetail?.stats.map((ab: any) => {
              return (
                <div
                  className="py-1  mx-1 w-1/12  bg-slate-100 rounded-3xl"
                >
                  <p></p>
                  {ab.base_stat}
                </div>
              );
            })}
            
            </div>
          </div>
{/*  */}
        </div>
      </div>
    </div>
  );
};

export default CardDetail;
