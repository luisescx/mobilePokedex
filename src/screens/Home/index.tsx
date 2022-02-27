import React, {useCallback, useEffect, useState} from 'react';
import {Pokemon} from '@/common/interface/pokemon';
import getPokemonsUseCase from '@/useCases/GetPokemons';
import InputHome from '@/components/InputHome';
import {
  Container,
  Title,
  Header,
  SubTitle,
  PokeballImage,
  SyncButton,
  SyncIcon,
} from './styles';
import {
  View,
  FlatList,
  TouchableWithoutFeedback,
  Keyboard,
  StatusBar,
} from 'react-native';
import PokemonCard from '@/components/PokemonCard';
import getPokemonUseCase from '@/useCases/getPokemon';
import {getPokemonIdByUrlString} from '@/util';
import Loading from '@/components/Loading';
import Skeleton from '@/components/Skeleton';
import Loader from '@/components/Skeleton/Loader';
import ErrorHandler from '@/components/ErrorHandler';
import NotFoundPokemon from '@/components/NotFoundPokemon';
import {useTheme} from 'styled-components/native';

const Home: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [isFirstRender, setIsFirstRender] = useState(true);
  const [isError, setIsError] = useState(false);
  const [isPokemonNotFound, setIsPokemonNotFound] = useState(false);
  const theme = useTheme();

  const handlePokemons = useCallback(async () => {
    setLoading(true);
    const data = await getPokemonsUseCase({offset, limit: 20});

    if (data?.results) {
      const resultPokemons = isSearch ? [] : [...pokemons];

      for (let index = 0; index < data.results.length; index++) {
        const {url} = data.results[index];

        const id = getPokemonIdByUrlString(url);
        const pokemon = await getPokemonUseCase(id);
        resultPokemons.push({...pokemon!});
      }

      setPokemons(resultPokemons);
      setOffset(offset + 20);
      setIsSearch(false);
      setIsFirstRender(false);
      setLoading(false);
      setIsPokemonNotFound(false);

      return;
    }

    setIsError(true);
    setIsFirstRender(true);
    setOffset(0);
    setLoading(false);
    setIsPokemonNotFound(false);
  }, [offset, pokemons, isSearch]);

  const renderItem = useCallback(({item, index}) => {
    return <PokemonCard index={index} data={item} />;
  }, []);

  const getPokemonsBySyncButton = useCallback(async () => {
    setIsFirstRender(true);
    setIsSearch(false);
    setIsPokemonNotFound(false);

    await handlePokemons();
  }, [handlePokemons]);

  const handlePokemonSearch = useCallback(async (value: string) => {
    setIsFirstRender(true);
    const pokemon = await getPokemonUseCase(value);

    if (pokemon) {
      setPokemons([{...pokemon}]);
      setIsPokemonNotFound(false);
    } else {
      setIsPokemonNotFound(true);
      setPokemons([]);
    }

    setIsFirstRender(false);
    setIsSearch(true);
    setOffset(0);
  }, []);

  const handleRender = useCallback(async () => {
    if (isSearch) {
      return null;
    }

    return handlePokemons();
  }, [isSearch, handlePokemons]);

  useEffect(() => {
    handlePokemons();
  }, []);

  return (
    <Container>
      <StatusBar
        animated={true}
        translucent={true}
        barStyle="dark-content"
        backgroundColor={theme.COLORS.BACKGROUND}
      />

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <Header>
            <Title>Pokédex</Title>

            <PokeballImage width={400} height={260} />

            <SubTitle>
              Search for a Pokémon by name or using its National Pokédex number
            </SubTitle>

            <InputHome handlePokemonSearch={handlePokemonSearch} />
          </Header>
          <View style={{marginTop: 32}} />
          {isPokemonNotFound && <NotFoundPokemon />}

          {isError && <ErrorHandler />}
        </View>
      </TouchableWithoutFeedback>

      {!isError && !isPokemonNotFound && (
        <Skeleton loading={isFirstRender} skeleton={<Loader />}>
          {pokemons && (
            <FlatList
              data={pokemons}
              keyExtractor={item => String(item.id)}
              numColumns={2}
              showsVerticalScrollIndicator={false}
              renderItem={renderItem}
              contentContainerStyle={{
                paddingHorizontal: 24,
              }}
              onEndReached={handleRender}
              onEndReachedThreshold={1}
              ListFooterComponent={<Loading isLoading={loading} />}
            />
          )}
        </Skeleton>
      )}

      {(isPokemonNotFound || isSearch || isError) && (
        <SyncButton onPress={getPokemonsBySyncButton}>
          <SyncIcon name="refresh-cw" size={24} />
        </SyncButton>
      )}
    </Container>
  );
};

export default Home;
