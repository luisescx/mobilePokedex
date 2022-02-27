import React, {useCallback, useEffect, useState} from 'react';
import {FlatList, StatusBar} from 'react-native';
import {DetailScreenNavigationProps} from '@/@types/navigation';
import {Pokemon} from '@/common/interface/pokemon';
import {BackButton} from '@/components/BackButton';
import {useNavigation, useRoute} from '@react-navigation/native';
import PokeballBackground from '@/assets/images/pokeballAlt.svg';
import {
  styles,
  Container,
  Header,
  HeaderRow,
  PokemonName,
  PokemonNumber,
  ImageContainer,
  PokeImage,
  NumberContainer,
  DetailsContainer,
  DetailsContent,
  AboutText,
  AboutContainer,
  AboutTypeContainer,
  AboutTitleContainer,
  TitleDescription,
  DescriptionContainer,
  Description,
  StatsContainer,
  PokeEvolutionImage,
  EvolutionContainer,
  EvolutionName,
  PokeEvolutionNumber,
  LoadingContainer,
} from './styles';
import {useTheme} from 'styled-components';
import pokemonDefaultImage from '../../assets/images/pokemonDefault.png';
import {RFValue} from 'react-native-responsive-fontsize';
import FavoriteButton from '@/components/FavoriteButton';
import DetailContentButton from '@/components/DetailContentButton';
import TypeCard from '@/components/TypeCard';
import getDetailPokemonUseCase from '@/useCases/getDetailPokemon';
import {formatFirstLetterToUpperCase} from '@/util';
import ErrorHandler from '@/components/ErrorHandler';
import Loading from '@/components/Loading';
import Error from '../Error';
import {useFavorites} from '@/hooks/useFavorites';

const Detail: React.FC = () => {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [isFavorite, setFavorite] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [IsScreenError, setScreenError] = useState(false);
  const [activeTab, setActiveTab] = useState('about');
  const {handleFavorites, findFavoritePokemonById} = useFavorites();
  const theme = useTheme();
  const route = useRoute();
  const navigation = useNavigation();
  const {pokemon: pokemonParams} = route.params as DetailScreenNavigationProps;

  const handleFavorite = useCallback(() => {
    setFavorite(oldState => !oldState);
    handleFavorites(pokemonParams);
  }, [pokemonParams, handleFavorites]);

  const handleGoBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const renderItem = useCallback(
    ({item}) => {
      return (
        <EvolutionContainer>
          <PokeEvolutionImage
            source={item.image ? {uri: item.image} : pokemonDefaultImage}
            isOpacity={
              !(
                item.id === pokemon!.id ||
                pokemon!.evolutionChain!.length === 1 ||
                item.id === pokemon!.species.id
              )
            }
          />

          <PokeEvolutionNumber
            isOpacity={
              !(
                item.id === pokemon!.id ||
                pokemon!.evolutionChain!.length === 1 ||
                item.id === pokemon!.species.id
              )
            }>
            {item.pokemonNumber}
          </PokeEvolutionNumber>
          <EvolutionName
            isOpacity={
              !(
                item.id === pokemon!.id ||
                pokemon!.evolutionChain!.length === 1 ||
                item.id === pokemon!.species.id
              )
            }>
            {item.name}
          </EvolutionName>
        </EvolutionContainer>
      );
    },
    [pokemon],
  );

  const isPokemonFavorite = useCallback(async () => {
    const favorite = await findFavoritePokemonById(pokemonParams.id);
    setFavorite(favorite);
  }, [findFavoritePokemonById, pokemonParams.id]);

  useEffect(() => {
    const getPokemon = async () => {
      const pk = await getDetailPokemonUseCase(pokemonParams.id);

      if (pk) {
        setPokemon(pk);
        setIsError(false);
        setLoading(false);

        return;
      }

      setLoading(false);
      setIsError(true);
    };

    if (!pokemonParams || !pokemonParams.id) {
      setScreenError(true);
    }

    isPokemonFavorite();
    getPokemon();
  }, []);

  return (
    <>
      {IsScreenError ? (
        <Error />
      ) : (
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
              <FavoriteButton
                isFavorite={isFavorite}
                onPress={handleFavorite}
              />
            </HeaderRow>

            <NumberContainer>
              <PokemonNumber>{pokemonParams.pokemonNumber}</PokemonNumber>
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

          <DetailsContainer>
            <DetailsContent>
              <DetailContentButton
                title="About"
                isActive={activeTab === 'about'}
                onPress={() => setActiveTab('about')}
              />
              <DetailContentButton
                title="Base Stats"
                isActive={activeTab === 'baseStats'}
                onPress={() => setActiveTab('baseStats')}
              />
              <DetailContentButton
                title="Evolution"
                isActive={activeTab === 'evolution'}
                onPress={() => setActiveTab('evolution')}
              />
            </DetailsContent>

            {isLoading && (
              <LoadingContainer>
                <Loading isLoading={isLoading} height={60} />
              </LoadingContainer>
            )}

            {!isLoading && isError && <ErrorHandler hideImage={true} />}

            {!isLoading && !isError && (
              <>
                {pokemon && activeTab === 'about' && (
                  <AboutContainer>
                    <AboutTypeContainer>
                      {pokemonParams.types.map((type, index) => (
                        <TypeCard
                          key={type}
                          name={type}
                          isLastIndex={index === pokemonParams.types.length - 1}
                        />
                      ))}
                    </AboutTypeContainer>

                    <AboutText>{pokemon.about}</AboutText>

                    <DescriptionContainer>
                      <AboutTitleContainer>
                        <TitleDescription>Height</TitleDescription>
                        <Description>{pokemon.height}</Description>
                      </AboutTitleContainer>

                      <AboutTitleContainer>
                        <TitleDescription>Weight</TitleDescription>
                        <Description>{pokemon.weight}</Description>
                      </AboutTitleContainer>

                      <AboutTitleContainer>
                        <TitleDescription>Abilities</TitleDescription>
                        <Description>
                          {pokemon.abilities.join(', ')}
                        </Description>
                      </AboutTitleContainer>
                    </DescriptionContainer>
                  </AboutContainer>
                )}

                {pokemon && activeTab === 'baseStats' && (
                  <StatsContainer>
                    {pokemon.stats.map((status, index) => (
                      <AboutTitleContainer key={index}>
                        <TitleDescription>
                          {formatFirstLetterToUpperCase(status.name)}
                        </TitleDescription>
                        <Description>{status.baseStat}</Description>
                      </AboutTitleContainer>
                    ))}
                  </StatsContainer>
                )}

                {activeTab === 'evolution' &&
                  pokemon &&
                  pokemon.evolutionChain &&
                  pokemon.evolutionChain.length > 0 && (
                    <FlatList
                      horizontal
                      data={pokemon!.evolutionChain}
                      showsHorizontalScrollIndicator={false}
                      keyExtractor={item => String(item.id)}
                      renderItem={renderItem}
                      contentContainerStyle={[
                        styles.flatlistContainer,
                        {
                          flex:
                            pokemon!.evolutionChain!.length === 1
                              ? 1
                              : undefined,
                        },
                      ]}
                    />
                  )}
              </>
            )}
          </DetailsContainer>
        </Container>
      )}
    </>
  );
};

export default Detail;
