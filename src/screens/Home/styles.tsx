import styled from 'styled-components/native';
//react-native-iphone-x-helper
// react-native-responsive-fontsize
export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.COLORS.BACKGROUND};
  padding: 12px 24px;
`;

export const Header = styled.View`
  width: 100%;
  height: 20%;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 48px;
`;

export const Title = styled.Text`
  font-family: ${({theme}) => theme.FONTS.BOLD};
  color: ${({theme}) => theme.COLORS.TITLE};
  font-size: 32px;
`;

export const SubTitle = styled.Text`
  font-family: ${({theme}) => theme.FONTS.REGULAR};
  color: ${({theme}) => theme.COLORS.TEXT_DARK};
  font-size: 16px;
`;
