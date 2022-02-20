export interface PokemonDTO {
  id: number;
  name: string;
  sprites: SpritesDTO;
  types: TypeDTO[];
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
