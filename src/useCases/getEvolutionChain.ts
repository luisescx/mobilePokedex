import {EvolvesTo} from '@/common/interface/pokemon';
import {EvolutionChainDTO, EvolvesToDTO} from '@/dtos/pokemon';
import api from '@/services/api';
import {
  formatFirstLetterToUpperCase,
  formatPokemonNumber,
  getPokemonIdByUrlString,
} from '@/util';
import getPokemonImage from './getPokemonImage';

async function getEvolutionChainUseCase(evolutionChainId: number | string) {
  const {data, status} = await api.get<EvolutionChainDTO>(
    `evolution-chain/${evolutionChainId}`,
  );

  if (status === 200) {
    const evolutions: EvolvesTo[] = [];
    const id = getPokemonIdByUrlString(data.chain.species.url);
    const image = getPokemonImage(id);

    evolutions.push({
      id,
      image,
      pokemonNumber: formatPokemonNumber(id),
      name: formatFirstLetterToUpperCase(data.chain.species.name),
    });

    createEvolvesToList(data.chain.evolves_to, evolutions);

    return evolutions;
  }

  return null;
}

function createEvolvesToList(evolutionChain: EvolvesToDTO[], newList: any[]) {
  evolutionChain.forEach(pkChain => {
    const id = getPokemonIdByUrlString(pkChain.species.url);
    const image = getPokemonImage(id);

    newList.push({
      id,
      image,
      name: formatFirstLetterToUpperCase(pkChain.species.name),
      pokemonNumber: formatPokemonNumber(id),
    });

    if (pkChain.evolves_to) {
      createEvolvesToList(pkChain.evolves_to, newList);
    }
  });
}

export default getEvolutionChainUseCase;
