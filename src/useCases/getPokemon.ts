import {Pokemon} from '@/common/interface/pokemon';
import {PokemonDTO} from '@/dtos/pokemon';
import api from '@/services/api';

async function getPokemonUseCase(pokemonId: number): Promise<Pokemon> {
  const {data} = await api.get<PokemonDTO>(`pokemon/${pokemonId}`);

  const pokemon = {
    id: data.id,
    name: data.name,
    image: data.sprites.other['official-artwork'].front_default,
  } as Pokemon;

  pokemon.types = [];

  data.types.forEach(tp => {
    pokemon.types.push(tp.type.name);
  });

  return pokemon;
}

export default getPokemonUseCase;
