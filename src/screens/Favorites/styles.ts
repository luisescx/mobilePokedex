import {Image, StyleSheet} from 'react-native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const styles = StyleSheet.create({
  image: {
    resizeMode: 'contain',
  },
});

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.COLORS.BACKGROUND};
  padding: 12px 0px;
  margin-top: ${getStatusBarHeight()}px;
`;

export const ContainerImage = styled.View`
  flex: 1;
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

export const NotFavoritesImage = styled(Image)`
  width: ${RFValue(150)}px;
  height: ${RFValue(150)}px;
  margin-top: 32px;
`;
