import {Pokemon} from '@/common/interface/pokemon';
import React, {createContext, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from 'react-native';

interface FavoritePokemonProviderProps {
  children: React.ReactNode;
}

interface PokemonContextData {
  handleFavorites: (newPokemon: Pokemon) => Promise<void>;
  loadFavorites: () => Promise<void>;
  findFavoritePokemonById: (pokemonId: number) => Promise<boolean>;
  favoritesPokemon: Pokemon[];
}

const FavoritesPokemonContext = createContext<PokemonContextData>(
  {} as PokemonContextData,
);

function FavoritesProvider({children}: FavoritePokemonProviderProps) {
  const [favoritesPokemon, setFavorite] = useState<Pokemon[]>([]);

  const dataKey = '@pokedex';

  async function addFavorite(
    newPokemon: Pokemon,
    storageFavoritesPokemon: Pokemon[],
  ) {
    try {
      const newFavoritesList = [...storageFavoritesPokemon, newPokemon];

      await AsyncStorage.setItem(dataKey, JSON.stringify(newFavoritesList));

      setFavorite(orderListById(newFavoritesList));

      Alert.alert(
        'My Pokemons',
        `Added ${newPokemon.pokemonNumber}-${newPokemon.name} to My Pokemons list`,
      );
    } catch (error) {
      Alert.alert(
        'Error',
        'There was an error adding the pokemon. Try again later.',
      );
    }
  }

  async function removeFavorite(
    newPokemon: Pokemon,
    storageFavoritesPokemon: Pokemon[],
  ) {
    try {
      const newFavoritesList = storageFavoritesPokemon.filter(
        favoritePokemon => favoritePokemon.id !== newPokemon.id,
      );

      await AsyncStorage.setItem(dataKey, JSON.stringify(newFavoritesList));
      setFavorite(orderListById(newFavoritesList));

      Alert.alert(
        'My Pokemons',
        `Removed ${newPokemon.pokemonNumber}-${newPokemon.name} from My Pokemons list`,
      );
    } catch (error) {
      Alert.alert(
        'Error',
        'There was an error removing the pokemon from my Pokemons list. Try again later.',
      );
    }
  }

  async function handleFavorites(newPokemon: Pokemon) {
    const storageFavoritesPokemon = await getPokemons();

    const isFavorite = storageFavoritesPokemon.some(
      favoritePokemon => favoritePokemon.id === newPokemon.id,
    );

    if (isFavorite) {
      await removeFavorite(newPokemon, storageFavoritesPokemon);
      return;
    }

    await addFavorite(newPokemon, storageFavoritesPokemon);
  }

  async function loadFavorites() {
    try {
      const storageFavoritesPokemon = await getPokemons();

      setFavorite(orderListById(storageFavoritesPokemon));
    } catch (error) {
      Alert.alert(
        'Error',
        'There was an error loading the pokemons. Try again later.',
      );
    }
  }

  async function getPokemons() {
    const favoritesPokemonList = await AsyncStorage.getItem(dataKey);

    const storageFavoritesPokemon =
      favoritesPokemonList && favoritesPokemonList?.length > 0
        ? JSON.parse(favoritesPokemonList)
        : [];

    return storageFavoritesPokemon as Pokemon[];
  }

  async function findFavoritePokemonById(pokemonId: number) {
    const storageFavoritesPokemon = await getPokemons();

    return storageFavoritesPokemon.some(
      favoritePokemon => favoritePokemon.id === pokemonId,
    );
  }

  function orderListById(pokemonsList: Pokemon[]) {
    return pokemonsList.sort((a, b) =>
      a.id <= b.id ? -1 : a.id > b.id ? 1 : 0,
    );
  }

  return (
    <FavoritesPokemonContext.Provider
      value={{
        favoritesPokemon,
        handleFavorites,
        loadFavorites,
        findFavoritePokemonById,
      }}>
      {children}
    </FavoritesPokemonContext.Provider>
  );
}

export {FavoritesProvider, FavoritesPokemonContext};
