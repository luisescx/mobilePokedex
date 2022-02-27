export interface PokemonDTO {
  id: number;
  name: string;
  sprites: SpritesDTO;
  types: TypeDTO[];
  height: number;
  weight: number;
  stats: StatsDTO[];
  abilities: Ability[];
  species: speciesDTO;
}

export interface StatsDTO {
  base_stat: number;
  stat: {
    name: string;
  };
}

export interface Ability {
  ability: {
    name: string;
  };
}

export interface PokemonSpeciesDTO {
  flavor_text_entries: [
    {
      flavor_text: string;
      language: {
        name: string;
      };
    },
  ];
  evolution_chain: {
    url: string;
  };
}

interface SpritesDTO {
  other: {
    'official-artwork': {
      front_default: string;
    };
  };
}

interface TypeDTO {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

export interface EvolutionChainDTO {
  id: number;
  chain: {
    species: speciesDTO;
    evolves_to: EvolvesToDTO[];
  };
}

export interface EvolvesToDTO {
  species: speciesDTO;
  evolves_to: EvolvesToDTO[];
}

interface speciesDTO {
  name: string;
  url: string;
}
