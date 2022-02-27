import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.COLORS.BACKGROUND};
  padding: ${getStatusBarHeight() + 18}px 24px 14px 24px;
`;

export const ErrorContainer = styled.View`
  /* flex: 1; */
  justify-content: center;
  align-items: center;
`;
