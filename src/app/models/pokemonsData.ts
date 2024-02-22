export type PokemonData = {
  name:string;
  id:number;
  sprites: {
    front_default: string;
  }
  types: {
name: any;
    slot: number
    type: {
      name:string;
      url:string;
    }
  }[];
}
