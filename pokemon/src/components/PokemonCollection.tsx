import React from 'react';
import { Pokemon} from '../interface';
import PokemonList from './PokemonList';

interface Props{
    pokemon : Pokemon[]
}

const PokemonCollection : React.FC<Props> =({pokemon})=> { 
    // const {pokemon} = props;
    return (
        <section>
{pokemon.map((poke)=>{
    return(
        <div>
           <PokemonList
           key={poke.id}
           name={poke.name}
           id={poke.id}
           image = {poke.sprites.front_default}

           />
        </div>
    )
})}
        </section>
    );
};

export default PokemonCollection;