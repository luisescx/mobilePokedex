import {Pokemon} from '@/common/interface/pokemon';
import React, {useCallback} from 'react';
import {TouchableOpacityProps} from 'react-native';
import {Container, TextContainer, Name, PokemonNumber, styles} from './styles';
import FastImage from 'react-native-fast-image';
import pokemonDefaultImage from '../../assets/images/pokemonDefault.png';
import {useNavigation} from '@react-navigation/native';

interface Props extends TouchableOpacityProps {
  index: number;
  data: Pokemon;
}

const PokemonCard: React.FC<Props> = ({data, index, ...rest}) => {
  const {image, name, types, pokemonNumber} = data;
  const navigation = useNavigation();

  const handleNavigation = useCallback(() => {
    navigation.navigate('detailScreen', {pokemon: data});
  }, [navigation, data]);

  return (
    <Container
      onPress={handleNavigation}
      index={index}
      type={types[0]}
      {...rest}
      activeOpacity={0.7}
      style={styles.shadow}>
      <FastImage
        style={{width: 120, height: 120}}
        source={image ? {uri: image} : pokemonDefaultImage}
      />

      <TextContainer>
        <Name>{name}</Name>
        <PokemonNumber>{pokemonNumber}</PokemonNumber>
      </TextContainer>
    </Container>
  );
};

export default PokemonCard;
