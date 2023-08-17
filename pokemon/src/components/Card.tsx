import React, { useEffect, useState } from 'react';
import { DetailPokemon, Pokemon, PokemonType } from '../interface';
import CardDetail from './CardDetail';
import { type } from 'os';


interface Props{
    name:string;
    image:string ; 
    id:number;
    abilities:
    | {
        name: string;
        ability: string;
      }[]
    | undefined;
    types:PokemonType[];
//     types: |{
//         type:{
//  name:string;
//         }
//     }[] | undefined;
    detail:DetailPokemon;
    animated?:string ;
    setDetail: React.Dispatch<React.SetStateAction<DetailPokemon>>;
    // types: {
    //   type: {
    //     name: string;
    //     url: string;
    //   };

    // }
    
}

const Card : React.FC<Props> = ({name,image,id,setDetail,detail,abilities,types}) => {


  
  console.log(types);

  return (
    <>
 <div className="group">
 <div
            className=" flex m-auto items-center  w-28  h-20 
     bg-blue-gray-200 bg-clip-border text-white mb-4 -mt-3"
          >
            <img src={image} className='m-auto w-full mt-6  transition-transform duration-300 group-hover:scale-105'  />
          </div>
    <div className= 'border-2 border-transparent hover:border-solid   hover:border-gray-200 bg-white  mb-7 mx-3  overflow-hidden rounded-xl shadow-blue-gray-500/40 shadow-lg '>
           
          {/* {types.type .map((ab: any) => {
              return <div className=""> {ab.name}</div>;
            })} */}
          <div className="pt-8 pb-2 text-center">
          <p className='text-gray-400 font-medium'>  N°{id}</p>
            <h5
              className=" block mb-1 font-sans text-md capitalize mt-1 font-black  text-center
        leading-snug tracking-normal text-blue-gray-900 antialiased"
            >
              {name}
            </h5>
        
        </div>
        <div className=" flex justify-center m-auto text-center mb-6 ">
        {types?.map((ab:any)=>{
  return <div className={` bg-${ab.type.name} bg-normal px-4 py-1 border-1
   rounded-md  text-md font-bold capitalize mx-1 `}> {ab.type.name}</div>;
            })}
            
        </div>
        </div>  
 </div>
     </>
    );
};

export default Card;