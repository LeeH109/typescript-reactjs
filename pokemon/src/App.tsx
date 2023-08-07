import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import PokemonCollection from "./components/PokemonCollection";
import { Pokemon } from "./interface";



 export interface Detail{
    id:number,
    isOpened :boolean,
  }
  
const App: React.FC = () => {

  const [pokemons , setPokemons] = useState<Pokemon[]>([]);
  //loading 
  const [nextUrl, setNextUrl] = useState<string>("");
  const [loading,setLoading] = useState<boolean>(false);
  //mở mở detail 
 
  const [detail,setDetail] = useState<Detail>({
    id:0,
    isOpened:false,
  })

  useEffect(() => {
    const getPoke = async () => {
      const res = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=20&offset20"
      );
      setNextUrl(res.data.next);
//      console.log(res.data);

      res.data.results.forEach(async (pokemon: Pokemon) => {
        const poke = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        setPokemons((p) => [...p, poke.data]);
         setLoading(false)
      });
     
    };
    getPoke();

  }, []);
console.log(pokemons);

  const handleLoading=async()=>{
    console.log('loading...');
    setLoading(true)
    let res = await axios.get(nextUrl);

    setNextUrl(res.data.next);
    res.data.results.forEach(async (pokemon: Pokemon) => {
      const poke = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
      );
      setPokemons((p) => [...p, poke.data]);
      setLoading(false);
    });
  }  

  return (
    <div className="App">
      <div className=" text-2xl bg-red-300 h-100  w-full flex items-center justify-center bg-teal-lightest font-sans"></div>
      <PokemonCollection pokemon={pokemons} 
      detail={detail}
       setDetail={setDetail} />


  <div className="p-6 pt-0">
    <button
    onClick={()=>handleLoading()}
      className="select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button"
      data-ripple-light="true"
    >
       {!detail.isOpened && (
          <div className="btn">
            <button onClick={handleLoading}>
              {loading ? "Loading..." : "Load more"}{" "}
            </button>
          </div>
        )}
    </button>
  </div> 





    </div>
  );
};

export default App;
