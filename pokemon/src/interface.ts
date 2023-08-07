export interface Pokemon{
  id:number,
    name:string,
    url:string,
    sprites:{
      front_default: string,
    }
  }
  export interface PokemonDT extends Pokemon {
    abilities?: {
      ability:string;
      name:string;
    }[];
  }  
  