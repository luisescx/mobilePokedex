import styled, {css} from 'styled-components/native';
import {Image} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

interface Props {
  hideImage?: boolean;
}

export const Container = styled.View<Props>`
  ${({hideImage}) =>
    hideImage &&
    css`
      flex: 1;
    `};

  align-items: center;
  justify-content: center;
  margin-top: ${({hideImage}) => (hideImage ? 0 : 48)}px;
`;

export const Title = styled.Text`
  font-family: ${({theme}) => theme.FONTS.BOLD};
  color: ${({theme}) => theme.COLORS.TITLE};

  text-align: center;
  font-size: 22px;
  margin-bottom: 8px;
`;

export const SubTitle = styled.Text`
  font-family: ${({theme}) => theme.FONTS.REGULAR};
  color: ${({theme}) => theme.COLORS.TEXT_DARK};
  text-align: center;
  font-size: 16px;
`;

export const ErrorImage = styled(Image)`
  width: 150px;
  height: 150px;
  margin-top: 32px;
`;

export const RetryButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  margin-top: 32px;
`;

export const RetryIcon = styled(Icon)`
  color: ${({theme}) => theme.COLORS.TITLE};
`;
