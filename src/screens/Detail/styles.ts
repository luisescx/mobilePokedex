import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';
import {getBottomSpace, getStatusBarHeight} from 'react-native-iphone-x-helper';
import FastImage from 'react-native-fast-image';

interface Props {
  type: string;
}

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.COLORS.BACKGROUND};
  margin-bottom: ${getBottomSpace()}px;
`;

export const Header = styled.View<Props>`
  flex: 1;
  width: 100%;
  background-color: ${({theme, type}) =>
    theme.COLORS.POKEMON_TYPES[type.toUpperCase()]};
  padding: ${getStatusBarHeight() + 18}px 24px 14px 24px;
`;

export const HeaderRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 14px;
`;

export const NumberContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 4px;
`;

export const TypesImageRowContainer = styled.View`
  flex-direction: row;
`;

export const PokemonNumber = styled.Text`
  font-size: ${RFValue(18)}px;
  color: ${({theme}) => theme.COLORS.TITLE};
  font-family: ${({theme}) => theme.FONTS.REGULAR};
`;

export const PokemonName = styled.Text`
  font-size: ${RFValue(24)}px;
  color: ${({theme}) => theme.COLORS.TITLE};
  font-family: ${({theme}) => theme.FONTS.BOLD};
`;

export const ImageContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

export const PokeImage = styled(FastImage)`
  width: ${RFValue(200)}px;
  height: ${RFValue(200)}px;
`;

export const DetailsContent = styled.View`
  flex: 1;
  border-top-right-radius: 50px;
  border-top-left-radius: 50px;
  background-color: ${({theme}) => theme.COLORS.SHAPE};
  margin-top: -${RFValue(60)}px;
`;
