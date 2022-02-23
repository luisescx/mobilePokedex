import {Dimensions} from 'react-native';
import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';

const WIDTH = Dimensions.get('window').width - 48;
const percentage = (16 * 100) / WIDTH;
const WIDTH_TOTAL = (100 - percentage) / 2;
interface Props {
  index: number;
  type: string;
}

export const styles = StyleSheet.create({
  shadow: {
    shadowOffset: {
      width: 0,
      height: 2,
    },
    color: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
});

export const Container = styled.TouchableOpacity.attrs(() => {})<Props>`
  border-radius: 20px;
  align-items: center;
  padding: 20px 0;
  width: ${WIDTH_TOTAL}%;

  margin-right: ${({index}) => (index % 2 === 0 ? 16 : 0)}px;

  margin-bottom: 16px;
  background-color: ${({theme, type}) =>
    theme.COLORS.POKEMON_TYPES[type.toUpperCase()]};
`;

export const TextContainer = styled.View`
  margin-top: 15px;
  align-items: center;
  width: 120px;
`;

export const Name = styled.Text`
  font-family: ${({theme}) => theme.FONTS.BOLD};
  color: ${({theme}) => theme.COLORS.TEXT_LIGHT};
  font-size: 16px;
`;

export const PokemonNumber = styled.Text`
  font-family: ${({theme}) => theme.FONTS.REGULAR};
  color: ${({theme}) => theme.COLORS.TEXT_LIGHT};
  font-size: 16px;
`;
