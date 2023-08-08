import React, { useEffect, useState } from "react";
import ListCard from "../components/ListCard";
import { DetailPokemon, Pokemon } from "../interface";
import axios from "axios";
import CardDetail from "../components/CardDetail";

const Home: React.FC = () => {
  const [listPokemon, setListPokemon] = useState<Pokemon[]>([]);
  
  const [detail, setDetail] = useState<DetailPokemon>({
    id: 0,
    isOpened: false,
 
  });
  

  // lay du lieu => setlist
  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=20&offset20"
      );
      console.log((await res).data);

      // lấy từng con trong mảng
      res.data.results.forEach(async (pokemons: Pokemon) => {
        const pk = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${pokemons.name}`
        );
        setListPokemon((p) => [...p, pk.data]);
      });
    };
    getData();
  }, []);
  //   console.log(listPokemon);

  return (
    <div className="container flex w-5/6 m-auto ">
      <div className=" mt-5 z-10  ">
        <ListCard pokemons={listPokemon} 
        detail = {detail} setDetail = {setDetail}
        />
    
      </div>
    </div>
  );
};

export default Home;
