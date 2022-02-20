import api from '@/services/api';
import {GetPokemonsResponseDTO} from '@/dtos/pokemons';

export interface GetPokemonUseCaseProps {
  offset: number;
  limit: number;
}

async function getPokemonsUseCase({
  offset,
  limit,
}: GetPokemonUseCaseProps): Promise<GetPokemonsResponseDTO> {
  const {data} = await api.get<GetPokemonsResponseDTO>('pokemon', {
    params: {
      offset,
      limit,
    },
  });

  return data;
}

export default getPokemonsUseCase;
