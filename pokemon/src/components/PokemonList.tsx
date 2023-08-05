import React from 'react';
interface Props{
   name:string,
   id:number , 
   image:string,
}


const PokemonList:React.FC<Props>= (props) => {
const {name,id,image} = props ;

    return (
        <div>
            <h1>{name}</h1>
            <img src={image} alt="" />
        </div>
    );
};

export default PokemonList;