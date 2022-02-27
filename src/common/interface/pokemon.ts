export interface Pokemon {
  id: number;
  name: string;
  image: string;
  types: string[];
  pokemonNumber: string;
  about: string | null;
  height: string;
  weight: string;
  stats: Stats[];
  abilities: string[];
  evolutionChain: EvolvesTo[] | null;
  species: Species;
}

export interface Stats {
  baseStat: number;
  name: string;
}

export interface EvolvesTo {
  id: number;
  name: string;
  image: string;
}

export interface Species {
  name: string;
  url: string;
}
