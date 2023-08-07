import React from "react";
import { Pokemon, PokemonDT } from "../interface";
import PokemonDetail from "./PokemonDetail";
import { Detail } from "../App";

interface Props {

  pokemon: PokemonDT[];

  detail:  Detail;
  setDetail:  React.Dispatch<React.SetStateAction<Detail>>;
}

const PokemonCollection: React.FC<Props> = ({ pokemon ,detail,setDetail}) => {
  // const {pokemon} = props;
  const handleClickPokemon = (id: number) => {
    console.log(id);
    // không mở
    if(!detail.isOpened)
    {
      setDetail({
        id:id,
        isOpened:true,
      }) 
    }
   console.log(detail);
  };

  return (
    <section className=" w-full mt-28 ">
     
     
     {detail.isOpened ? (<> 
     overlay
     </> ):( <> </> )}
      <div className="flex flex-wrap w-11/12 m-auto">


        {pokemon.map((poke) => {
          return (
            <div onClick={() => handleClickPokemon(poke.id)}>
              <PokemonDetail
              abilities={poke.abilities}
               detail={detail}
               setDetail = {setDetail}
                key={poke.id}
                name={poke.name}
                id={poke.id}
                image={poke.sprites.front_default}
              />
            </div>
       
          );
        })}
      </div>
    </section>
  );
};

export default PokemonCollection;
