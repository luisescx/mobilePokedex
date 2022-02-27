import {PokemonSpeciesDTO} from '@/dtos/pokemon';
import api from '@/services/api';
import {removeBreakLines} from '@/util';

export interface PokemonSpeciesUseCase {
  about: string | null;
  evolutionChainUrl: string | null;
}

async function getPokemonSpeciesUseCase(
  pokemonId: number | string,
): Promise<PokemonSpeciesUseCase | null> {
  const {data, status} = await api.get<PokemonSpeciesDTO>(
    `pokemon-species/${pokemonId}`,
  );

  if (status === 200) {
    const textEntry = data.flavor_text_entries.find(textEntry => {
      if (textEntry.language?.name === 'en') {
        return textEntry;
      }
    });

    let about: null | string;
    if (textEntry) {
      about = removeBreakLines(textEntry.flavor_text);
    } else {
      about = null;
    }

    const evolutionChainUrl = data.evolution_chain.url;

    return {about, evolutionChainUrl};
  }

  return {about: null, evolutionChainUrl: null};
}

export default getPokemonSpeciesUseCase;
