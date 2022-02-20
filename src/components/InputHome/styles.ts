import {TextInput} from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';

interface ButtonProps {
  isDisabled: boolean;
}

export const Container = styled.View`
  background-color: ${({theme}) => theme.COLORS.SHAPE};
  flex-direction: row;
  border-radius: 5px;
  margin-top: 12px;
`;

export const InputField = styled(TextInput).attrs(({theme}) => ({
  placeholderTextColor: theme.COLORS.TEXT_DARK,
}))`
  flex: 1;
  padding: 0 12px;
  color: ${({theme}) => theme.COLORS.TEXT_DARK};
  font-size: 16px;
`;

export const InputButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})<ButtonProps>`
  background-color: ${({theme, isDisabled}) =>
    isDisabled ? theme.COLORS.TITLE_LIGHT : theme.COLORS.TITLE};
  padding: 16px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
`;

export const InputIcon = styled(Icon)`
  color: ${({theme}) => theme.COLORS.SHAPE};
`;
