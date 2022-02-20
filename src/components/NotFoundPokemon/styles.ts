import styled from 'styled-components/native';
import {Image, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  image: {
    resizeMode: 'contain',
  },
});

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: 48px;
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

export const NotFoundImage = styled(Image)`
  width: 150px;
  height: 150px;
  margin-top: 32px;
`;
