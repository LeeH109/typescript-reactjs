import React, { useEffect, useState } from "react";
import ListCard from "../components/ListCard";
import { DetailPokemon, Pokemon } from "../interface";
import axios from "axios";
import CardDetail from "../components/CardDetail";
import Search from "../components/Search/Search";

const Home: React.FC = () => {
  const [listPokemon, setListPokemon] = useState<Pokemon[]>([]);
  const [listSearch, setListSearch] = useState<Pokemon[]>([]);
  const [nextUrl, setNextUrl] = useState<string>("");
  // const [previousUrl, setPreviousUrl] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [value, setValue] = useState("");
  const [detail, setDetail] = useState<DetailPokemon>({
    id: 0,
    isOpened: false,
  });
  // console.log(value);
  const listCard = value ? listSearch : listPokemon;

  // lay du lieu => setlist
  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=20&offset20"
      );
      setNextUrl(res.data.next);
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

  //
  useEffect(() => {
    const results = listPokemon.filter(
      (item) => item.name.toLowerCase().indexOf(value.toLowerCase()) !== -1
    );
    setListSearch(results);
    console.log(results);
  }, [listPokemon, value]);
  //
  const handleLoadingData = async () => {
    setIsLoading(true);
    const res = await axios.get(nextUrl);
    setNextUrl(res.data.next);
    // console.log(res.data.next);
    // console.log(nextUrl);
    res.data.results.forEach(async (pokemons: Pokemon) => {
      const pk = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemons.name}`
      );
      setListPokemon((p) => [...p, pk.data]);
      setIsLoading(false);
    });
  };

  //
// w 4/5
  return (
    <div className="container flex flex-col  w-10/12 m-auto ">
      {/* // */}
      <div className="w-3/5 ml-14 mt-10 ">
        <Search value={value} setValue={setValue} list={listSearch} />
      </div>

      <div className=" -mt-8 z-10  ">
        <ListCard pokemons={listCard} detail={detail} setDetail={setDetail} />
      </div>
      <div className="ml-3 mb-20">
        <button
          onClick={handleLoadingData}
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >
          {isLoading ? "Loading..." : "Load more"}{" "}
        </button>
      </div>
    </div>
  );
};

export default Home;
