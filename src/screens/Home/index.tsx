import React, {useCallback, useEffect, useState} from 'react';
import {Pokemon} from '@/common/interface/pokemon';
import getPokemonsUseCase from '@/useCases/GetPokemons';
import InputHome from '@/components/InputHome';
import {Container, Title, Header, SubTitle, PokeballImage} from './styles';
import {View, FlatList} from 'react-native';
import PokemonCard from '@/components/PokemonCard';
import getPokemonUseCase from '@/useCases/getPokemon';
import {getPokemonIdByUrlString} from '@/util';

const Home: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  const handlePokemons = useCallback(async () => {
    const data = await getPokemonsUseCase({offset: 0, limit: 20});

    if (data?.results) {
      const resultPokemons: Pokemon[] = [];

      for (let index = 0; index < data.results.length; index++) {
        const {url} = data.results[index];

        const id = getPokemonIdByUrlString(url);
        const pokemon = await getPokemonUseCase(id);
        resultPokemons.push({...pokemon});
      }

      setPokemons(resultPokemons);
    }
  }, []);

  const renderItem = useCallback(({item, index}) => {
    return <PokemonCard index={index} data={item} />;
  }, []);

  useEffect(() => {
    handlePokemons();
  }, [handlePokemons]);

  return (
    <Container>
      <Header>
        <Title>Pokédex</Title>

        <PokeballImage width={400} height={260} />

        <SubTitle>
          Search for a Pokémon by name or using its National Pokédex number
        </SubTitle>

        <InputHome />
      </Header>

      <View style={{marginTop: 32}} />

      <FlatList
        data={pokemons}
        keyExtractor={item => String(item.id)}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
        contentContainerStyle={{
          paddingHorizontal: 24,
        }}
      />
    </Container>
  );
};

export default Home;
