import {Pokemon} from '@/common/interface/pokemon';
import {formatFirstLetterToUpperCase} from '@/util';
import React, {useMemo} from 'react';
import {Image, TouchableOpacityProps} from 'react-native';
import {Container, TextContainer, Name, PokemonNumber, styles} from './styles';
import FastImage from 'react-native-fast-image';

interface Props extends TouchableOpacityProps {
  index: number;
  data: Pokemon;
}

const PokemonCard: React.FC<Props> = ({data, index, ...rest}) => {
  const {id, image, name, types} = data;

  const nameFormatted = useMemo(() => {
    return formatFirstLetterToUpperCase(name);
  }, [name]);

  const pokemonNumber = useMemo(() => {
    return String(id).length >= 3
      ? id
      : String(id).length === 2
      ? `0${id}`
      : `00${id}`;
  }, [id]);

  return (
    <Container
      index={index}
      type={types[0]}
      {...rest}
      activeOpacity={0.7}
      style={styles.shadow}>
      <FastImage
        style={{width: 120, height: 120}}
        source={{
          uri: image,
          priority: FastImage.priority.high,
        }}
      />

      <TextContainer>
        <Name>{nameFormatted}</Name>
        <PokemonNumber>{pokemonNumber}</PokemonNumber>
      </TextContainer>
    </Container>
  );
};

export default PokemonCard;
