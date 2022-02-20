import styled from 'styled-components/native';

interface Props {
  index: number;
  type: string;
}

export const Container = styled.TouchableOpacity.attrs(() => {})<Props>`
  border-radius: 20px;
  align-items: center;
  padding: 30px 27px;

  margin-right: ${({index}) => (index % 2 === 0 ? 16 : 0)}px;

  margin-bottom: 16px;
  background-color: ${({theme, type}) =>
    theme.COLORS.POKEMON_TYPES[type.toUpperCase()]};
`;

export const TextContainer = styled.View`
  margin-top: 15px;
  align-items: 120px;
  align-items: center;
`;

export const Name = styled.Text`
  font-family: ${({theme}) => theme.FONTS.BOLD};
  color: ${({theme}) => theme.COLORS.TITLE};
  font-size: 16px;
`;

export const PokemonNumber = styled.Text`
  font-family: ${({theme}) => theme.FONTS.REGULAR};
  color: ${({theme}) => theme.COLORS.TITLE};
  font-size: 16px;
`;
