import React, { useEffect, useState } from "react";
import ListCard from "../components/ListCard";
import { DetailPokemon, Pokemon } from "../interface";
import axios from "axios";
import CardDetail from "../components/CardDetail";
import Search from "../components/Search/Search";

const Home: React.FC = () => {

  const [listPokemon, setListPokemon] = useState<Pokemon[]>([]);
  const [listSearch, setListSearch] = useState<Pokemon[]>([]);
  const [detail, setDetail] = useState<DetailPokemon>({
    id: 0,
    isOpened: false,
  });
  // const [inputSearch,setInputSearch] = useState('');
  const [value,setValue] = useState('')
  console.log(value);

  useEffect(()=>{
      const getDataSearch = async()=>{
         const res = await axios.get(
         "https://pokeapi.co/api/v2/pokemon/"
         );
         console.log(res.data.results);
        
      }
      getDataSearch()
  },[])

  // lay du lieu => setlist
  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=20&offset20"
      );
      // console.log((await res).data);

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
  const results = listPokemon.filter(
    (item) =>
        item.name.toLowerCase().indexOf(value.toLowerCase()) !==
        -1
);
console.log(results);


  //   console.log(listPokemon);
  const listCard = value ? listSearch : listPokemon;
  return (
    <div className="container flex flex-col  w-5/6 m-auto ">
     {results.map((item)=>{
      return <>
{item.name}
      </>
})}
{/* // */}
      <div className="w-4/6 ml-2 mt-10 ">
        <Search value={value} setValue={setValue} list={listSearch} />
      </div>
 
      <div className=" mt-5 z-10  ">
        <ListCard
          pokemons={listCard}
          detail={detail}
          setDetail={setDetail}
        />
      </div>
    </div>
  );
};

export default Home;
