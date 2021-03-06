import PokemonCard from '@/components/PokemonCard';
import {useFavorites} from '@/hooks/useFavorites';
import {useFocusEffect} from '@react-navigation/native';
import React, {useCallback} from 'react';
import {FlatList, StatusBar} from 'react-native';
import {useTheme} from 'styled-components/native';
import {
  Container,
  ContainerImage,
  NotFavoritesImage,
  styles,
  Title,
  SubTitle,
} from './styles';
import NoFavoritesImage from '@/assets/images/pikachuPhone.png';

const NoPokemonsAdded: React.FC = () => {
  return (
    <ContainerImage>
      <Title>You haven't added any{'\n'}Pokemons yet.</Title>
      <SubTitle>Go catch some Pokemons on{'\n'}the Home screen</SubTitle>
      <NotFavoritesImage source={NoFavoritesImage} style={styles.image} />
    </ContainerImage>
  );
};

const Favorites: React.FC = () => {
  const {loadFavorites, favoritesPokemon} = useFavorites();
  const theme = useTheme();

  const renderItem = useCallback(({item, index}) => {
    return <PokemonCard index={index} data={item} />;
  }, []);

  useFocusEffect(
    useCallback(() => {
      loadFavorites();
    }, []),
  );

  return (
    <Container>
      <StatusBar
        animated={true}
        translucent={true}
        barStyle="dark-content"
        backgroundColor={theme.COLORS.BACKGROUND}
      />

      <FlatList
        data={favoritesPokemon}
        keyExtractor={item => String(item.id)}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
        ListEmptyComponent={<NoPokemonsAdded />}
        contentContainerStyle={styles.flatList}
      />
    </Container>
  );
};

export default Favorites;
