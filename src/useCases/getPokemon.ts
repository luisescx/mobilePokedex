import {Pokemon} from '@/common/interface/pokemon';
import {PokemonDTO} from '@/dtos/pokemon';
import api from '@/services/api';
import {formatFirstLetterToUpperCase, formatPokemonNumber} from '@/util';

async function getPokemonUseCase(
  pokemonId: number | string,
): Promise<Pokemon | null> {
  const {data, status} = await api.get<PokemonDTO>(`pokemon/${pokemonId}`);

  if (status === 200) {
    const pokemon = {
      id: data.id,
      pokemonNumber: formatPokemonNumber(data.id),
      name: formatFirstLetterToUpperCase(data.name),
      image: data.sprites.other['official-artwork'].front_default,
    } as Pokemon;

    pokemon.types = [];

    data.types.forEach(tp => {
      pokemon.types.push(tp.type.name);
    });

    return pokemon;
  }

  return null;
}

export default getPokemonUseCase;
