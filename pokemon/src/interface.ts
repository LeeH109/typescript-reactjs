// export interface Pokemon {
//   id: number;
//   name: string;
//   url?: string;
//   sprites: {
//     front_default: string;
    
//   };
 
// }
export interface Pokemon {
  id: number;
  name: string;
  url?: string;
  types: PokemonType[];
  sprites: PokemonSprites;
  height:number;
  weight:number;
  stats:PokemonStats[];
}

export interface PokemonType {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

export interface PokemonSprites {
  front_default: string;
  versions?: PokemonVersions;
}

export interface PokemonStats {
  base_stats: number;
  
}
export interface PokemonVersions {
  "generation-v": PokemonGenerationV;
}

export interface PokemonGenerationV {
  "black-white": PokemonBlackWhite;
}

export interface PokemonBlackWhite {
  animated: PokemonAnimated;
}

export interface PokemonAnimated {
  front_default: string;
}


///////////////////////
export interface DetailPokemon{
  id:number ; 
  isOpened: boolean;
}

export interface PokemonDT extends Pokemon {
  abilities?: {
    ability: string;
    name: string;
  }[];
}
