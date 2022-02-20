import api from '@/services/api';
import {GetPokemonsResponseDTO} from '@/dtos/pokemons';

export interface GetPokemonUseCaseProps {
  offset: number;
  limit: number;
}

async function getPokemonsUseCase({
  offset,
  limit,
}: GetPokemonUseCaseProps): Promise<GetPokemonsResponseDTO | null> {
  const {data, status} = await api.get<GetPokemonsResponseDTO>('pokemon', {
    params: {
      offset,
      limit,
    },
  });

  if (status === 200) {
    return data;
  }

  return null;
}

export default getPokemonsUseCase;
