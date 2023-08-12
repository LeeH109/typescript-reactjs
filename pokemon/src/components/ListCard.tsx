import React, { useState } from "react";
import { DetailPokemon, Pokemon, PokemonDT } from "../interface";
import Card from "./Card";
import CardDetail from "./CardDetail";

interface Props {
  pokemons: PokemonDT[];
  detail: DetailPokemon;
  setDetail: React.Dispatch<React.SetStateAction<DetailPokemon>>;
}

const ListCard: React.FC<Props> = ({ pokemons, detail, setDetail }) => {
  const [selectId, setSelectId] = useState<number>();
  const [animation, setAnimation] = useState<boolean>(false);
  const handlePokemonDetail = (id: number) => {
    // mở
    setSelectId(id);
    setAnimation(true);
    setTimeout(() => {
      setAnimation(false);
    }, 2000);

    // if (!detail.isOpened) {
    //   setDetail({
    //     id: id,
    //     isOpened: true,
    //   });
    // }
    // console.log(detail);
  };
console.log(pokemons.length);
  return ( 
    <div className="flex w-full">
      {/* <div className="  flex flex-wrap w-3/4 m-auto mt-36 sm:w-full"> */}
      <div className="w-3/4 sm:w-full md:w-full">
      <div className={` grid grid-cols-3  gap-x-0 gap-y-4 w-4/6 m-auto mt-24 sm:w-full md:grid-cols-2  lg:grid-cols-3 sm:grid-cols-2 `} >
        {pokemons.map((pokemon) => {
          return (
            <div onClick={() => handlePokemonDetail(pokemon.id)}>
              <Card
                animated = {pokemon?.sprites?.versions?.["generation-v"]?.["black-white"]?.animated?.front_default}
                key={pokemon.id}
                name={pokemon.name}
                id={pokemon.id}
                image={pokemon.sprites.front_default}
                abilities={pokemon.abilities}
                detail={detail}
                setDetail={setDetail}
                // types={pokemon.types }
              />
            </div>
          );
        })}
      </div></div>
      
      <div className=" w-[415px]  hidden lg:block xl:block   ">
        {selectId ? (
          <div
            className={`fixed w-[380px]   ${
              animation ? "animate-[wiggle_2s_ease-in-out_forwards]" : ""
            }`}
          >
            <CardDetail pokemons={pokemons} id={selectId} />
          </div>
        ) : (
          // w-[380px]
          <div className="fixed w-1/4">
          <div
              className="w-full  mt-14  relative"
            >
              <div className="h-[700px]  w-11/12 bg-white m-auto bg-clip-border rounded-xl shadow-lg shadow-blue-gray-500/40 ">
                <div className="w-24 absolute -top-28 right-1/3">
                  <img
                    className="w-full"
                    src="https://js-pokedex-virid.vercel.app/src/no-pokemon-selected-image.png"
                    alt=""
                  />
                </div>
                <p className="text-center text-xl pt-60 w-5/12 flex m-auto"> Select a Pokemon
to display here. </p>
              </div>{" "}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ListCard;
