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
  const [animation, setAnimation] = useState(false);
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

  return (
    <div className="flex">
      <div className="  flex flex-wrap w-3/4 m-auto mt-36">
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
      </div>
      <div className="flex w-[414px]   ">
        {selectId ? (
          <div
            className={`fixed w-[380px]   ${
              animation ? "animate-[wiggle_2s_ease-in-out_forwards]" : ""
            }`}
          >
            <CardDetail pokemons={pokemons} id={selectId} />
          </div>
        ) : (
          <div className="fixed w-[380px]">
          <div
              className="w-full  mt-24  relative"
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
