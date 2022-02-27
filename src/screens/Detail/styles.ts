import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';
import {getBottomSpace, getStatusBarHeight} from 'react-native-iphone-x-helper';
import FastImage from 'react-native-fast-image';
import {StyleSheet} from 'react-native';

interface Props {
  type: string;
}

interface EvolutionProps {
  isOpacity: boolean;
}

export const styles = StyleSheet.create({
  flatlistContainer: {
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

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
  margin-bottom: 12px;
`;

export const NumberContainer = styled.View`
  margin-top: 4px;
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

export const DetailsContainer = styled.View`
  flex: 1;
  border-top-right-radius: 50px;
  border-top-left-radius: 50px;
  background-color: ${({theme}) => theme.COLORS.SHAPE};
  margin-top: -${RFValue(60)}px;
`;

export const DetailsContent = styled.View`
  flex-direction: row;
  padding: 28px 24px 0px 24px;
  justify-content: space-between;
`;

export const AboutText = styled.Text`
  font-size: ${RFValue(12)}px;
  color: ${({theme}) => theme.COLORS.TEXT_DARK};
  font-family: ${({theme}) => theme.FONTS.REGULAR};
`;

export const AboutContainer = styled.ScrollView`
  padding: 24px;
`;

export const AboutTypeContainer = styled.View`
  flex-direction: row;
  margin-bottom: 24px;
`;

export const DescriptionContainer = styled.View`
  margin: 28px 0;
`;

export const AboutTitleContainer = styled.View`
  flex-direction: row;
  margin-bottom: 12px;
  justify-content: space-between;
`;

export const TitleDescription = styled.Text`
  font-size: ${RFValue(12)}px;
  color: ${({theme}) => theme.COLORS.TEXT_DARK};
  font-family: ${({theme}) => theme.FONTS.MEDIUM};
  margin-right: ${RFValue(12)}px;
`;

export const Description = styled.Text`
  flex-shrink: 1;
  font-size: ${RFValue(12)}px;
  color: ${({theme}) => theme.COLORS.TITLE};
  font-family: ${({theme}) => theme.FONTS.REGULAR};
`;

export const StatsContainer = styled.View`
  flex: 1;
  padding: 24px;
  justify-content: space-evenly;
`;

export const EvolutionContainer = styled.View`
  align-items: center;
`;

export const PokeEvolutionImage = styled(FastImage)<EvolutionProps>`
  height: ${RFValue(200)}px;
  width: ${RFValue(200)}px;
  opacity: ${({isOpacity}) => (isOpacity ? 0.6 : 1)};
`;

export const EvolutionName = styled.Text<EvolutionProps>`
  font-family: ${({theme}) => theme.FONTS.BOLD};
  color: ${({theme}) => theme.COLORS.TITLE};
  font-size: 16px;
  opacity: ${({isOpacity}) => (isOpacity ? 0.6 : 1)};
`;

export const PokeEvolutionNumber = styled.Text<EvolutionProps>`
  font-family: ${({theme}) => theme.FONTS.REGULAR};
  color: ${({theme}) => theme.COLORS.TITLE};
  font-size: 16px;
  opacity: ${({isOpacity}) => (isOpacity ? 0.6 : 1)};
`;

export const LoadingContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
