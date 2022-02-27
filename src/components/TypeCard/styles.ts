import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

interface Props {
  isLastIndex: boolean;
  type: string;
}

export const Container = styled.View<Props>`
  flex-direction: row;
  align-items: center;
  background-color: ${({theme, type}) =>
    theme.COLORS.POKEMON_TYPES[`${type.toUpperCase()}_ALT`]};
  border-radius: 5px;
  margin-right: ${({isLastIndex}) => (isLastIndex ? 0 : 5)}px;
`;

export const CardName = styled.View`
  margin-left: -2px;
  padding: 4px;
  padding-right: 6px;
`;

export const Name = styled.Text`
  font-size: ${RFValue(12)}px;
  color: ${({theme}) => theme.COLORS.TEXT_LIGHT};
  font-family: ${({theme}) => theme.FONTS.MEDIUM};
`;
