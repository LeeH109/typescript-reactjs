import React, { useEffect, useState } from 'react';
import { DetailPokemon, Pokemon, PokemonType } from '../interface';
import CardDetail from './CardDetail';


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
  //  const  [selected , setSelected] = useState(false);

  // useEffect(()=>{
  //   // 
  //   setSelected(id === detail?.id);
  // },[detail])
  // w-64 
  return (
    <>
 <div className="">
    <div className= 'bg-white  mb-7 mx-3 mt-2 overflow-hidden rounded-xl shadow-blue-gray-500/40 shadow-lg '>
           <div
            className=" flex m-auto items-center  w-28  -mt-1 h-20 
     bg-blue-gray-200 bg-clip-border text-white "
          >
            <img src={image} className='m-auto w-full' />
          </div>
          {/* {types.type .map((ab: any) => {
              return <div className=""> {ab.name}</div>;
            })} */}
          <div className="p-2">
            <h5
              className="mb-2 block font-sans text-sm font-semibold text-center
        leading-snug tracking-normal text-blue-gray-900 antialiased"
            >
              {name}
            </h5>
        
        </div>
        <div className="flex w-2/3 m-auto text-center mb-4 ">
        {types?.map((ab:any)=>{
  return <div className={` bg-${ab.type.name}   px-4 py-1 border-1 rounded-md m-auto text-md font-bold capitalize  `}> {ab.type.name}</div>;
            })}
        </div>
        </div>  
 </div>
     </>
    );
};

export default Card;