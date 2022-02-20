export interface GetPokemonsResponseDTO {
  count: number;
  next: string;
  prev: string;
  results: GetPokemonResponseResultDTO[];
}

export interface GetPokemonResponseResultDTO {
  name: string;
  url: string;
}
