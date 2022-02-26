import React, {useEffect, useState} from 'react';
import {StatusBar, View} from 'react-native';
import {DetailScreenNavigationProps} from '@/@types/navigation';
import {Pokemon} from '@/common/interface/pokemon';
import {BackButton} from '@/components/BackButton';
import getPokemonUseCase from '@/useCases/getPokemon';
import {useNavigation, useRoute} from '@react-navigation/native';
import Pokeball from '@/assets/images/pokeball.svg';
import PokeballBackground from '@/assets/images/pokeballAlt.svg';
import {
  Container,
  Header,
  HeaderRow,
  PokemonName,
  PokemonNumber,
  ImageContainer,
  PokeImage,
  DetailsContent,
  TypesImageRowContainer,
  NumberContainer,
} from './styles';
import {useTheme} from 'styled-components';
import pokemonDefaultImage from '../../assets/images/pokemonDefault.png';
import {RFValue} from 'react-native-responsive-fontsize';
import TypeImage from '@/components/TypeImage';

const Detail: React.FC = () => {
  const [pokemon, setPokemon] = useState<Pokemon>({} as Pokemon);

  const theme = useTheme();
  const route = useRoute();
  const navigation = useNavigation();
  const {pokemon: pokemonParams} = route.params as DetailScreenNavigationProps;

  useEffect(() => {
    const getPokemon = async () => {
      const pk = await getPokemonUseCase(pokemonParams.id);
      if (pk) {
        setPokemon(pk);
      }
    };

    getPokemon();
  }, []);

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <Container>
      <StatusBar
        animated={true}
        translucent={true}
        barStyle="dark-content"
        backgroundColor={
          theme.COLORS.POKEMON_TYPES[pokemonParams.types[0].toUpperCase()]
        }
      />

      <Header type={pokemonParams.types[0]}>
        <HeaderRow>
          <BackButton onPress={handleGoBack} />
          <Pokeball width={32} height={32} color={theme.COLORS.DANGER_LIGHT} />
        </HeaderRow>

        <NumberContainer>
          <PokemonNumber>{pokemonParams.pokemonNumber}</PokemonNumber>

          <TypesImageRowContainer>
            {pokemonParams.types.map(type => (
              <TypeImage typeName={type} />
            ))}
          </TypesImageRowContainer>
        </NumberContainer>
        <PokemonName>{pokemonParams.name}</PokemonName>

        <PokeballBackground
          width={RFValue(250)}
          height={RFValue(250)}
          color={theme.COLORS.SKELETON_FOREGROUND}
          opacity={0.2}
          style={{position: 'absolute', top: '45%', left: '70%'}}
        />

        <ImageContainer>
          <PokeImage
            source={
              pokemonParams.image
                ? {uri: pokemonParams.image}
                : pokemonDefaultImage
            }
          />
        </ImageContainer>
      </Header>

      <DetailsContent />
    </Container>
  );
};

export default Detail;
