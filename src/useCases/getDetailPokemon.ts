import {Pokemon, Stats} from '@/common/interface/pokemon';
import {Ability, PokemonDTO, StatsDTO} from '@/dtos/pokemon';
import api from '@/services/api';
import {
  formatFirstLetterToUpperCase,
  formatPokemonNumber,
  getPokemonIdByUrlString,
} from '@/util';
import getEvolutionChainUseCase from './getEvolutionChain';
import getPokemonSpeciesUseCase from './getPokemonSpecies';

async function getDetailPokemonUseCase(
  pokemonId: number | string,
): Promise<Pokemon | null> {
  const {data, status} = await api.get<PokemonDTO>(`pokemon/${pokemonId}`);

  if (status === 200) {
    const pokemon = {
      id: data.id,
      pokemonNumber: formatPokemonNumber(data.id),
      name: formatFirstLetterToUpperCase(data.name),
      image: data.sprites.other['official-artwork'].front_default,
      height: formatHeightValue(data.height),
      weight: formatWeightValue(data.weight),
      abilities: formatAbilities(data.abilities),
      species: data.species,
    } as Pokemon;

    const pokemonSpecieId = getPokemonIdByUrlString(data.species.url);
    pokemon.species.id = pokemonSpecieId;
    pokemon.stats = getStats(data.stats);

    pokemon.types = [];

    data.types.forEach(tp => {
      pokemon.types.push(tp.type.name);
    });

    const pokemonSpecies = await getPokemonSpeciesUseCase(pokemonSpecieId);

    pokemon.about = pokemonSpecies?.about!;

    if (pokemonSpecies?.evolutionChainUrl) {
      const pokemonEvolutionChainId = getPokemonIdByUrlString(
        pokemonSpecies?.evolutionChainUrl,
      );

      pokemon.evolutionChain = await getEvolutionChainUseCase(
        pokemonEvolutionChainId,
      );
    }

    return pokemon;
  }

  return null;
}

function getStats(stats: StatsDTO[]) {
  const newStats: Stats[] = [];

  stats.forEach(stat => {
    newStats.push({
      baseStat: stat.base_stat,
      name: stat.stat.name,
    });
  });

  return newStats;
}

function formatHeightValue(value: number) {
  const meter = (Number(`${value}0`) / 100).toFixed(2);
  const feet = (Number(`${value}0`) / 30.48).toFixed(2);

  return `${meter}m (${feet}f)`;
}

function formatWeightValue(value: number) {
  const kg = (Number(`${value}00`) / 1000).toFixed(2);
  const lbs = (Number(`${value}00`) / 454).toFixed(2);

  return `${kg}kg (${lbs}lbs)`;
}

function formatAbilities(abilities: Ability[]) {
  let newAbilities: string[] = [];

  abilities.forEach(ab => {
    newAbilities.push(ab.ability.name);
  });
  return newAbilities;
}

export default getDetailPokemonUseCase;
