import React, { useEffect, useState } from 'react';
import { DetailPokemon, Pokemon } from '../interface';
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


const Card : React.FC<Props> = ({name,image,id,setDetail,detail,abilities}) => {
  //  const  [selected , setSelected] = useState(false);

  // useEffect(()=>{
  //   // 
  //   setSelected(id === detail?.id);
  // },[detail])

  return (
    <>
 <div className="">
    <div className= 'bg-white  mb-7 w-64 mx-3 mt-2 overflow-hidden rounded-xl shadow-blue-gray-500/40 shadow-lg '>
           <div
            className=" mx-20 items-center  mt-3 h-20 
     bg-blue-gray-200 bg-clip-border text-white "
          >
            <img src={image} />
          </div>
          {/* {types.type .map((ab: any) => {
              return <div className=""> {ab.name}</div>;
            })} */}
          <div className="p-4">
            <h5
              className="mb-2 block font-sans text-sm font-semibold text-center
        leading-snug tracking-normal text-blue-gray-900 antialiased"
            >
              {name}
            </h5>
        </div>
        </div>  
 </div>
     </>
    );
};

export default Card;